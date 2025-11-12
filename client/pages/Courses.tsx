export default function Courses() {
  const hero = "https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2F851d9b879f3e47d2bcc23b0d0067f739?alt=media&token=e8f25192-4b63-4a1c-ad43-ec95081d7c9b&apiKey=e04c116b0cec4cf7a475618352e3872a";

  return (
    <main>
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src={hero} autoPlay muted loop playsInline preload="metadata" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container mx-auto pb-10">
            <div className="glass-strong rounded-2xl p-6 max-w-3xl text-white">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Courses</h1>
              <p className="mt-3 text-white/80">Training modules include offshore, safety, hospitality, and technical specializations across the maritime industry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {list.map((c) => (
            <div key={c} className="glass rounded-2xl p-6">
              <h3 className="font-semibold">{c}</h3>
              <p className="mt-2 text-sm text-foreground/80">Concise overview of the course outcomes, key competencies, and duration with hands‑on practice.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto pb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">Training Gallery</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <figure key={i} className="glass rounded-2xl overflow-hidden">
              <img src={g.url} alt={g.alt} className="h-56 w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="p-3 text-sm text-foreground/80">{g.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

const list = [
  "Hydrogen Sulphide Awareness (H2S)",
  "Helicopter Underwater Escape Training (HUET)",
  "Basic Offshore Safety Education and Emergency Training (BOSET)",
  "Rigging and Slinging Safety Level 2",
  "Lifting and Hoisting Safety",
  "Crane Operations Theory (Practical on Demand)",
  "Cookery Course with HACCP",
  "Basic Cooking Course Certification",
  "PSD Crowd Management",
  "PSD Human Behaviour",
  "Hospitality & Spanish Course",
  "Ship Board Safety & Security (SOFF)",
  "Security Facility Code & Awareness",
  "Shipping New Entry for Fitter & Welders",
  "Shipping New Entry to Mechanical & Refrigeration Technicians",
  "Electrical & Electronic Technicians Bridging Course",
];

const gallery = [
  { url: "https://images.pexels.com/photos/3192669/pexels-photo-3192669.jpeg", alt: "Offshore oil platform under blue sky" },
  { url: "https://images.pexels.com/photos/7286074/pexels-photo-7286074.jpeg", alt: "Helicopter training over ocean" },
  { url: "https://images.pexels.com/photos/29979565/pexels-photo-29979565.jpeg", alt: "Lifeboat safety drill at sea" },
  { url: "https://images.pexels.com/photos/31642540/pexels-photo-31642540.jpeg", alt: "Port crane operations" },
  { url: "https://images.pexels.com/photos/3846012/pexels-photo-3846012.jpeg", alt: "Industrial workshop and mechanics" },
  { url: "https://images.pexels.com/photos/8951041/pexels-photo-8951041.jpeg", alt: "Chef slicing salmon – HACCP hygiene" },
  { url: "https://images.pexels.com/photos/14606488/pexels-photo-14606488.jpeg", alt: "Navigation bridge console" },
  { url: "https://images.pexels.com/photos/28438355/pexels-photo-28438355.jpeg", alt: "Cargo handling containers at port" },
  { url: "https://images.pexels.com/photos/9553343/pexels-photo-9553343.jpeg", alt: "Engine room maintenance" },
];
