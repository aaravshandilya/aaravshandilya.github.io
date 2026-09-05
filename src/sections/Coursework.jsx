import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { coursework, education } from "../data/coursework";

function StatusPill({ status }) {
  const isDone = status === "completed";
  return (
    <span
      className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
        isDone ? "border border-emerald/40 text-[var(--accent-positive)]" : "border border-gold/40 text-[var(--accent)]"
      }`}
    >
      {isDone ? "Completed" : "In progress / planned"}
    </span>
  );
}

export default function Coursework() {
  return (
    <Section id="coursework" variant="alt">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Education" title="Paradise Valley High School, CREST program" />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal
              key={ed.school}
              delay={i * 0.05}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--text-strong)]">{ed.school}</h3>
              <p className="mt-1 text-sm text-[var(--accent)]">{ed.program}</p>
              <p className="mt-1 text-xs text-[var(--text-faint)]">
                {ed.dateRange}
                {ed.detail ? ` · ${ed.detail}` : ""}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {ed.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-mono-num text-lg font-semibold text-[var(--text-strong)]">{s.value}</p>
                    <p className="text-[11px] uppercase tracking-wide text-[var(--text-faint)]">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Coursework by subject</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {coursework.map((group, i) => (
              <Reveal
                key={group.subject}
                delay={i * 0.05}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] p-6"
              >
                <h3 className="text-sm font-semibold text-[var(--text-strong)]">{group.subject}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.courses.map((c) => (
                    <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-sm">
                      <span className="text-[var(--text-soft)]">
                        {c.name}
                        <StatusPill status={c.status} />
                      </span>
                      {c.detail && <span className="text-xs text-[var(--text-faint)]">{c.detail}</span>}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
