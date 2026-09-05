import SectionHeading from "../components/SectionHeading";
import ResearchCard from "../components/ResearchCard";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { research } from "../data/research";
import { affiliations } from "../data/interests";

export default function Research() {
  return (
    <Section id="research" variant="alt">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Research"
          title="Three research threads, one underlying idea"
          description="Reformulating hard, real-world decision problems as optimization models, and testing where classical, quantum-inspired, and machine-learning methods each hold up."
        />

        <div className="mt-14 space-y-6">
          {research.map((item, i) => (
            <ResearchCard key={item.slug} item={item} delay={i * 0.06} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 border-t border-[var(--card-border)] pt-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            Research affiliations
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {affiliations.map((a) => (
              <div
                key={a.name}
                className="flex min-h-48 flex-col overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] shadow-soft"
              >
                <div className="flex h-28 items-center justify-center bg-white p-4">
                  <img
                    src={a.logo}
                    alt={`${a.name} logo`}
                    width="240"
                    height="112"
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-sm font-semibold text-[var(--text-strong)]">{a.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-faint)]">{a.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
