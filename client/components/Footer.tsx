import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto grid gap-8 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe04c116b0cec4cf7a475618352e3872a%2F5d8f6d4f482e4162b2ed08f417553aa6?format=webp&width=96"
              alt="SNEF INDIA"
              className="h-8 w-8 rounded bg-white"
            />
            <span className="font-extrabold">SNEF INDIA</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Located in Kochi, India, we offer comprehensive maritime education
            with modern facilities and experienced faculty.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">General</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-primary">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/facilities" className="hover:text-primary">
                Facilities
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              Aditya Complex, Kochupally road, Thoppumpady, Kochi, Kerala -
              682005
            </li>
            <li>
              <a href="tel:+914842234500" className="hover:text-primary">
                Call: +91 484 2234500
              </a>
            </li>
            <li>
              <a href="tel:+918484545501" className="hover:text-primary">
                Mobile: +91 8484545501
              </a>
            </li>
            <li>
              <a
                href="mailto:cochinmaritime@gmail.com"
                className="hover:text-primary"
              >
                cochinmaritime@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cochin Maritime Academy. All rights
        reserved.
      </div>
    </footer>
  );
}
