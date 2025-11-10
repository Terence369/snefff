export default function Courses() {
  const videos = [
    "https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2F851d9b879f3e47d2bcc23b0d0067f739?alt=media&token=e8f25192-4b63-4a1c-ad43-ec95081d7c9b&apiKey=e04c116b0cec4cf7a475618352e3872a",
    "https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2Fe879b6dfeb534f92ae7dd66f4328e308?alt=media&token=4b1644c3-b8a1-41e9-8b15-383dff85c987&apiKey=e04c116b0cec4cf7a475618352e3872a",
    "https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2Ff4523c3692a54cfdb851793dd53f5c24?alt=media&token=d6d80b62-8ae6-4e96-b659-3fc1f8ec1858&apiKey=e04c116b0cec4cf7a475618352e3872a",
    "https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2F8e60c63399954bfa8f998b125d3e7aa0?alt=media&token=a7d4f5ac-f1f8-4e52-894f-d4557fb73193&apiKey=e04c116b0cec4cf7a475618352e3872a",
  ];

  return (
    <main>
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src={videos[0]} autoPlay muted loop playsInline />
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {videos.map((src, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <video className="w-full h-48 object-cover" src={src} controls playsInline muted loop />
            </div>
          ))}
          <div className="glass rounded-xl overflow-hidden">
            <img alt="Port aerial" className="w-full h-48 object-cover" src="https://cdn.builder.io/api/v1/image/assets%2Fe04c116b0cec4cf7a475618352e3872a%2F9709e5cd3de645b8bd99aa0e5899bf80?format=webp&width=800" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {list.map((c) => (
            <div key={c} className="glass rounded-2xl p-6">
              <h3 className="font-semibold">{c}</h3>
              <p className="mt-2 text-sm text-foreground/80">Concise overview of the course outcomes, key competencies, and duration with hands‑on practice.</p>
            </div>
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
