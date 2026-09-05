import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { interests } from "../data/interests";

// Purely abstract, original motif — no team crests, no F1 branding.
function SpeedLines() {
  return (
    <svg viewBox="0 0 200 40" className="h-8 w-24 opacity-40" aria-hidden="true">
      <line x1="0" y1="8" x2="140" y2="8" stroke="var(--color-gold)" strokeWidth="2" />
      <line x1="20" y1="20" x2="190" y2="20" stroke="var(--color-gold)" strokeWidth="2" />
      <line x1="0" y1="32" x2="120" y2="32" stroke="var(--color-gold)" strokeWidth="2" />
    </svg>
  );
}

export default function Interests() {
  return (
    <Section id="interests" variant="alt">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Beyond Research" title="Outside the lab" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {interests.map((it, i) => (
            <Reveal
              key={it.name}
              delay={i * 0.04}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] p-5"
            >
              <h3 className="text-sm font-semibold text-[var(--text-strong)]">{it.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-faint)]">{it.note}</p>
              {it.name === "Formula 1" && <SpeedLines />}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
