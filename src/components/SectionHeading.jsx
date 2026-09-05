import Reveal from "./Reveal";

// forceDark: true for headings placed in a section that is *always* dark
// (Hero, QUBOLab, Contact) regardless of the light/dark toggle — those use
// the literal brand gold rather than the toggle-aware --accent token, since
// their background never becomes light.
export default function SectionHeading({ kicker, title, description, align = "left", forceDark = false }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {kicker && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            forceDark ? "text-gold" : "text-[var(--accent)]"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl ${
          forceDark ? "text-cream" : "text-[var(--text-strong)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            forceDark ? "text-cream-soft/75" : "text-[var(--text-soft)]"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
