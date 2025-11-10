import PlaceholderPage from "@/components/PlaceholderPage";

export default function Facilities() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Facilities</h1>
      <p className="mt-3 text-muted-foreground max-w-prose">
        We are enriched with an outstanding faculty team capable of providing excellent academic training across courses.
      </p>
      <ul className="mt-6 grid gap-3 text-sm">
        <li>• Spacious Class Rooms with well‑equipped furniture</li>
        <li>• Advanced Computer Lab Facility</li>
        <li>• Food Safety and HACCP Training</li>
        <li>• Placement Guidelines</li>
        <li>• Accreditations / Approvals</li>
        <li>• Partners & Supporting Organisations</li>
        <li>• Laboratory Facility for hands‑on training</li>
      </ul>

      <PlaceholderPage title="Detailed facility modules coming soon" />
    </div>
  );
}
