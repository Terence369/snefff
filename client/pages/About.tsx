import PlaceholderPage from "@/components/PlaceholderPage";

export default function About() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">About CMA</h1>
      <p className="mt-3 text-muted-foreground max-w-prose">
        Located in Kochi, India, we offer comprehensive maritime education with modern facilities and experienced faculty across shipping, logistics, and marine disciplines.
      </p>
      <PlaceholderPage title="More about our history, vision and team coming soon" />
    </div>
  );
}
