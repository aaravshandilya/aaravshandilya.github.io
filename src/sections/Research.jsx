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
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {affiliations.map((a) => (
              <div key={a.name}>
                <p className="text-base font-semibold text-[var(--text-strong)]">{a.name}</p>
                <p className="text-xs text-[var(--text-faint)]">{a.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
