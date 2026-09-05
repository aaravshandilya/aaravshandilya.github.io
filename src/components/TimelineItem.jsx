import Reveal from "./Reveal";

export default function TimelineItem({ entry, delay = 0, isLast = false }) {
  return (
    <Reveal delay={delay} className="relative pl-9 sm:pl-12">
      {!isLast && (
        <span className="absolute left-[7px] top-6 h-full w-px bg-[var(--card-border)] sm:left-[9px]" />
      )}
      <span
        className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:h-[18px] sm:w-[18px] ${
          entry.ongoing ? "border-emerald bg-emerald/20" : "border-gold bg-gold/20"
        }`}
      />

      <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] p-5 shadow-soft sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold text-[var(--text-strong)] sm:text-lg">{entry.org}</h3>
          <span className="text-xs text-[var(--text-faint)]">{entry.dateRange}</span>
        </div>
        <p className="mt-0.5 text-sm font-medium text-[var(--accent)]">{entry.role}</p>
        {entry.scope && <p className="mt-1 text-xs text-[var(--text-faint)]">{entry.scope}</p>}
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">{entry.description}</p>
        {entry.ongoing && (
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-positive)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Ongoing
          </span>
        )}
      </div>
    </Reveal>
  );
}
