import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { Tag } from "../components/Tag";
import { skillCategories, labSkills } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" variant="base">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Skills" title="Tools and technologies" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal
              key={cat.category}
              delay={i * 0.04}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] p-6"
            >
              <h3 className="text-sm font-semibold text-[var(--accent)]">{cat.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Laboratory & research skills</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {labSkills.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04} className="border-l-2 border-gold/30 pl-5">
                <h4 className="text-sm font-semibold text-[var(--text-strong)]">{s.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-soft)]">{s.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
