// Alternating light/dark surface for content sections, driven by CSS custom
// properties that flip with the theme toggle (see index.css). variant="alt"
// gives a section a slightly different shade of the current mode, so pages
// keep visual rhythm without fighting the user's chosen theme.
export default function Section({ id, variant = "base", className = "", children }) {
  const bg = variant === "alt" ? "bg-[var(--surface-1)]" : "bg-[var(--surface-0)]";
  return (
    <section id={id} className={`${bg} py-24 text-[var(--text-strong)] sm:py-32 ${className}`}>
      {children}
    </section>
  );
}
