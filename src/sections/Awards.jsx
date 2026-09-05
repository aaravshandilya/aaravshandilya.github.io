import { Award, BadgeCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { awards, certifications } from "../data/awards";

export default function Awards() {
  return (
    <Section id="awards" variant="base">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Awards & Certifications" title="Recognition and credentials" />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              <Award className="h-4 w-4" /> Awards & Achievements
            </h3>
            <ul className="space-y-3">
              {awards.map((a, i) => (
                <Reveal
                  as="li"
                  key={a.name}
                  delay={i * 0.02}
                  className="flex items-start justify-between gap-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-surface)] px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-[var(--text-strong)]">{a.name}</p>
                    <p className="text-xs text-[var(--text-faint)]">{a.issuer}</p>
                  </div>
                  <span className="whitespace-nowrap text-xs text-[var(--text-faint)]">{a.date}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              <BadgeCheck className="h-4 w-4" /> Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.name}
                  delay={i * 0.02}
                  className="rounded-xl border border-[var(--card-border)] bg-[var(--card-surface)] px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-medium text-[var(--text-strong)]">{c.name}</p>
                    <span className="whitespace-nowrap text-xs text-[var(--text-faint)]">{c.date}</span>
                  </div>
                  <p className="text-xs text-[var(--text-faint)]">{c.issuer}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-soft)]">{c.description}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
