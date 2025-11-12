import VideoScrubber from "@/components/VideoScrubber";
import { Link } from "react-router-dom";

export default function Index() {
  const steps = [
    {
      title: "Marine Institute",
      body:
        "We undertake, coordinate, and promote marine R&D while providing specialized manpower for the industry.",
    },
    {
      title: "Blessed With",
      body:
        "Kochi’s rich coastline and renowned seaport create a supportive maritime ecosystem for learners.",
    },
    {
      title: "Why Choose Us",
      body:
        "High‑tech, operations‑driven training aligned with real shipboard demands and global standards.",
    },
  ];

  return (
    <main className="min-h-screen">
      <VideoScrubber
        src="https://cdn.builder.io/o/assets%2Fe04c116b0cec4cf7a475618352e3872a%2Fa05153aea2784fae8e2c5fe185f92b6b?alt=media&token=99a0a2bf-4fa6-44b9-a87d-4e617e0719af&apiKey=e04c116b0cec4cf7a475618352e3872a"
        steps={steps}
        heightVh={360}
      />

      <section className="container mx-auto py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">SNEF INDIA Facilities</h2>
            <p className="mt-3 text-muted-foreground max-w-prose">
              Our offerings are wide‑ranging and all‑inclusive. We provide optimal solutions for residential, commercial, and industrial verticals.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              <li>• Spacious Class Rooms with well‑equipped furniture</li>
              <li>• Advanced Computer Lab Facility</li>
              <li>• Food Safety and HACCP Training</li>
              <li>• Placement Guidelines</li>
              <li>• Accreditations / Approvals</li>
              <li>• Partners & Supporting Organisations</li>
            </ul>
            <div className="mt-6">
              <Link to="/facilities" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground font-semibold hover:bg-primary/90">
                Explore Facilities
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <Card title="Partners and Supporting Organization" desc="We work with global partners to further marine conservation and ocean stewardship." />
            <Card title="Director's Message" desc="We deliver job‑oriented maritime courses in line with IMO STCW, ISM, and ISPS codes, preparing cadets and GP ratings for sea." />
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold">Student Testimonials</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-xl border bg-card p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-semibold">{t.name} — {t.role}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold">Get in Touch</h2>
            <p className="mt-2 text-muted-foreground">Have questions? We're here to help you start your maritime career.</p>
            <div className="mt-6 grid gap-4 text-sm">
              <p><strong>Address:</strong> Aditya Complex, Kochupally road, Next to Anjali Marriage hall, Thoppumpady, Kochi, Kerala - 682005</p>
              <p><strong>Phone:</strong> <a className="hover:text-primary" href="tel:+914842234500">+91 484 2234500</a> · <a className="hover:text-primary" href="tel:+918484545501">+91 8484545501</a></p>
              <p><strong>Email:</strong> <a className="hover:text-primary" href="mailto:cochinmaritime@gmail.com">cochinmaritime@gmail.com</a></p>
            </div>
          </div>
          <div className="rounded-xl border p-6 bg-card shadow-sm">
            <h3 className="font-semibold">Popular Short‑term Courses</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>S‑01 — Marine English (30–45 days)</li>
              <li>S‑02 — Basic Fire Prevention (3 days)</li>
              <li>S‑03 — Personal Survival Techniques (2 days)</li>
              <li>S‑04 — Elementary First Aid (2 days)</li>
              <li>S‑05 — Personal Safety & Social Responsibilities (2 days)</li>
              <li>S‑06 — Security Awareness (1 day)</li>
              <li>S‑07 — Cargo Handling Safety (2 days)</li>
            </ul>
            <Link to="/courses" className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-primary-foreground font-semibold hover:bg-primary/90">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

const testimonials = [
  { name: "Vikram Patel", role: "Chief Engineer", quote: "Outstanding faculty and world‑class infrastructure. The institute prepared me exceptionally well for my career at sea." },
  { name: "Priya Deshmukh", role: "Deck Officer", quote: "Hands‑on training and mentorship made all the difference in my professional development." },
  { name: "Arjun Kumar", role: "Cadet", quote: "Best maritime academy in the region. Comprehensive courses and highly experienced faculty." },
  { name: "Sneha Nair", role: "Navigation Officer", quote: "The blend of theory and practicals gave me confidence to excel in the maritime industry." },
  { name: "Rajesh Iyer", role: "Engine Officer", quote: "Modern, industry‑relevant, and truly world‑class education." },
  { name: "Divya Sharma", role: "First Officer", quote: "Strong focus on safety and international norms sets CMA apart." },
];
