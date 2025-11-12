export default function Certification() {
  const hero = "https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2F8e60c63399954bfa8f998b125d3e7aa0?alt=media&token=a7d4f5ac-f1f8-4e52-894f-d4557fb73193&apiKey=e04c116b0cec4cf7a475618352e3872a";

  return (
    <main>
      <section className="relative h-[50vh] w-full overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src={hero} autoPlay muted loop playsInline preload="metadata" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto pb-10">
            <div className="glass-strong rounded-2xl p-6 max-w-2xl text-white">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Certification</h1>
              <p className="mt-3 text-white/80">BSP (Basic Seafarers Package) — Approved by NCT New Delhi, Govt of India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 grid gap-6 md:grid-cols-3">
        <Card title="Marine Value‑Added Safety Courses" desc="Latest research‑backed safety courses for seafarers." />
        <Card title="Marine Crew Management" desc="Ongoing management services for full crews or departments." />
        <Card title="Marine Documentation" desc="Support for documentation across fleets and craft." />
      </section>

      <section className="container mx-auto pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {gallery.map((src, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <video className="w-full h-56 object-cover" src={src} controls playsInline muted loop />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-foreground/80">{desc}</p>
    </div>
  );
}

const gallery = [
  "https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2F851d9b879f3e47d2bcc23b0d0067f739?alt=media&token=e8f25192-4b63-4a1c-ad43-ec95081d7c9b&apiKey=e04c116b0cec4cf7a475618352e3872a",
  "https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2Fe879b6dfeb534f92ae7dd66f4328e308?alt=media&token=4b1644c3-b8a1-41e9-8b15-383dff85c987&apiKey=e04c116b0cec4cf7a475618352e3872a",
];
