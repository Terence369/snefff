import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/value-added", label: "Value Added" },
  { to: "/facilities", label: "Facilities" },
  { to: "/certification", label: "Certification" },
  { to: "/about", label: "About CMA" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded bg-primary/90 group-hover:bg-primary transition-colors" />
          <span className="font-extrabold tracking-wide">Cochin Maritime Academy</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent"
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground/80"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/courses"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm font-semibold shadow hover:bg-primary/90"
          >
            Explore Courses
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto py-3 flex flex-col">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-2 text-sm ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
