export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--card-border)] px-2.5 py-1 text-[11px] font-medium tracking-wide text-[var(--text-faint)]">
      {children}
    </span>
  );
}

// These render on --card-surface, which is theme-adaptive (dark forest-tint
// in dark mode, light cream-tint in light mode) — so the text color must be
// the toggle-aware --accent / --accent-positive tokens, not literal
// text-gold / text-emerald, or light mode fails contrast.
const STATUS_STYLES = {
  active: "border-emerald/40 text-[var(--accent-positive)] bg-transparent",
  completed: "border-gold/40 text-[var(--accent)] bg-transparent",
  reproduction: "border-[var(--card-border)] text-[var(--text-soft)] bg-transparent",
  prototype: "border-[var(--card-border)] text-[var(--text-soft)] bg-transparent",
  conceptual: "border-[var(--card-border)] text-[var(--text-soft)] bg-transparent",
};

export function StatusBadge({ status, label }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.conceptual;
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${style}`}>
      {label}
    </span>
  );
}
