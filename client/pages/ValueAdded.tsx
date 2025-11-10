import PlaceholderPage from "@/components/PlaceholderPage";

export default function ValueAdded() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Value Added Courses</h1>
      <p className="mt-3 text-muted-foreground max-w-prose">
        Course categories include Offshore Oil Field, Passenger/Cruise/Yacht, Inland & Main Fleet, Project Skilled, and Management courses.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card title="Offshore Oil Field Courses" desc="Safety, survival and equipment handling aligned with offshore standards." />
        <Card title="Passenger / Cruise / Yacht" desc="Hospitality, emergency procedures, and international etiquette modules." />
        <Card title="Inland – Near Coastal – Main Fleet" desc="Deck & engine fundamentals, navigation, ISM/ISPS, and simulator assessments." />
        <Card title="Project Skilled" desc="Rigging & slinging, welding basics, scaffolding safety, LOTO, PTW, and JSA." />
        <Card title="Management" desc="Leadership, audit readiness, incident investigation, and voyage planning." />
      </div>
      <PlaceholderPage title="Detailed category syllabi coming soon" />
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
