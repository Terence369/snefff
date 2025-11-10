import PlaceholderPage from "@/components/PlaceholderPage";

export default function Courses() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Courses</h1>
      <p className="mt-3 text-muted-foreground max-w-prose">
        Training modules include offshore, safety, hospitality, and technical specializations across the maritime industry. Explore highlighted programs below.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {list.map((c) => (
          <div key={c} className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">{c}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Concise overview of the course outcomes, key competencies, and duration with hands‑on practice.</p>
          </div>
        ))}
      </div>
      <PlaceholderPage title="More detailed course pages coming soon" />
    </div>
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
