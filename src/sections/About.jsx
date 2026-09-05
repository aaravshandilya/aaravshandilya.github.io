import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" variant="base">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="About" title="A student researcher working across optimization, AI, and biology." />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Reveal delay={0.05} className="space-y-5 text-base leading-relaxed text-[var(--text-soft)]">
            {profile.bio.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-[var(--card-border)] shadow-soft">
              <picture>
                <source srcSet={profile.headshot.portraitWebp} type="image/webp" />
                <img
                  src={profile.headshot.portrait}
                  alt={profile.headshot.alt}
                  width="960"
                  height="1200"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {profile.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] p-4 text-center"
                >
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-[var(--accent)]">
                    {h.label}
                  </dt>
                  <dd className="mt-1 text-xl font-semibold font-mono-num text-[var(--text-strong)]">{h.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
