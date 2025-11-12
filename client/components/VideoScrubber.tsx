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

// Simplified hero video (no scroll-scrubbing)
export default function VideoScrubber({ src, poster, steps }: Props) {
  return (
    <section className="relative w-full min-h-screen">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        poster={poster}
        aria-label="Background video"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto grid gap-12 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe04c116b0cec4cf7a475618352e3872a%2F5d8f6d4f482e4162b2ed08f417553aa6?format=webp&width=200"
                alt="SNEF INDIA logo"
                className="h-12 w-12 rounded-full bg-white/90 p-1"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <p className="uppercase tracking-[0.2em] text-xs text-white/80">Welcome to</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-2">
              SNEF INDIA
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl">
              Premier training hub in Kochi for shipping, logistics and maritime careers. Learn with modern labs, seasoned faculty, and globally aligned standards.
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
    </section>
  );
}
