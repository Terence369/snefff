import PlaceholderPage from "@/components/PlaceholderPage";

export default function Certification() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Certification</h1>
      <p className="mt-3 text-muted-foreground max-w-prose">
        BSP (Basic Seafarers Package) — Approved by NCT New Delhi, Govt of India.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card title="Marine Value‑Added Safety Courses" desc="Latest research‑backed safety courses for seafarers." />
        <Card title="Marine Crew Management" desc="Ongoing management services for full crews or departments." />
        <Card title="Marine Documentation" desc="Support for documentation across fleets and craft." />
      </div>
      <PlaceholderPage title="Certificate gallery and downloads coming soon" />
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
