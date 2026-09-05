import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

const LINKS = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cream-soft/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="text-lg font-semibold text-cream">
              {profile.name}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-cream-soft/60">
              {profile.tagline}
            </p>
            <SocialLinks className="mt-5" />
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold/80">Navigate</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm text-cream-soft/60 transition-colors hover:text-gold-soft">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream-soft/10 pt-6 text-xs text-cream-soft/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Designed and built by {profile.name}.</p>
        </div>
      </div>
    </footer>
  );
}
