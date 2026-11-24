import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-xs border-b border-primary/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#hero" className="text-2xl font-bold text-primary">
          Nivedhitha
        </a>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-gray-300 hover:text-primary transition">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-primary focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-background/90 border-t border-primary/20 space-y-2 py-2">
          {sections.map((s) => (
            <li key={s.id} className="px-4">
              <a
                href={`#${s.id}`}
                className="block text-gray-300 hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
