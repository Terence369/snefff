import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Step {
  title: string;
  body: string;
}

interface Props {
  src: string;
  poster?: string;
  steps: Step[];
  heightVh?: number;
}

// A robust scroll-scrubbed video: maps scroll progress (0-1) to video currentTime
export default function VideoScrubber({ src, poster, steps, heightVh = 350 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);

  const totalHeight = useMemo(() => `${heightVh}vh`, [heightVh]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => {
      setDuration(video.duration || 0);
      setReady(true);
      // Ensure we're not playing; we scrub instead
      try {
        video.pause();
      } catch {}
    };
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("durationchange", onLoaded);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("durationchange", onLoaded);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    let animId = 0;
    const onScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        if (!ready || duration === 0) return;
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const start = viewportH; // start when top hits top (after passing one viewport)
        const end = rect.height + viewportH; // until bottom leaves viewport
        const progressRaw = (viewportH - rect.top) / (rect.height);
        const progress = Math.max(0, Math.min(1, progressRaw));
        const targetTime = progress * duration;
        if (!Number.isNaN(targetTime)) {
          try {
            // Smoothly approach target time to reflect scroll velocity feel
            const current = video.currentTime || 0;
            const diff = targetTime - current;
            video.currentTime = current + diff * 0.35;
          } catch {}
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ready, duration]);

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: totalHeight }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          muted
          playsInline
          preload="auto"
          poster={poster}
          aria-label="Background storytelling video"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 flex h-full w-full items-center">
          <div className="container mx-auto grid gap-12 text-white">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.2em] text-xs text-white/80">Welcome to</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Cochin Maritime Academy
              </h1>
              <p className="mt-4 text-white/80 max-w-2xl">
                Shipping, logistics, and freight are industries at the heart of modern society. Start your voyage with world‑class training.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/courses" className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-semibold shadow hover:bg-primary/90">
                  Explore Courses
                </Link>
                <a href="#contact" className="rounded-md border border-white/30 px-5 py-2.5 font-semibold hover:bg-white/10">
                  Contact Us
                </a>
              </div>
            </div>

            <ol className="grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={i} className="rounded-lg bg-white/5 backdrop-blur border border-white/10 p-5">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
