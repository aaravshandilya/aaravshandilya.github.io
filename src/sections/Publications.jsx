import { ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import CopyButton from "../components/CopyButton";
import { publications } from "../data/publications";

function citationText(pub) {
  return `${pub.authors} (2026). ${pub.title}. SSRN Preprint, DOI: ${pub.doi}.`;
}

export default function Publications() {
  return (
    <Section id="publications" variant="alt">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Publications" title="Academic writing" />

        <div className="mt-12 space-y-6">
          {publications.map((pub) => (
            <Reveal
              key={pub.doi}
              className="rounded-3xl border border-[var(--card-border)] bg-[var(--card-surface)] p-6 shadow-soft sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {pub.status}
                </span>
                <span className="text-xs text-[var(--text-faint)]">Posted {pub.postedDate}</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--text-strong)] sm:text-2xl">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--accent)]">{pub.authors}</p>
              <ul className="mt-1.5 space-y-0.5">
                {pub.affiliations.map((a) => (
                  <li key={a} className="text-xs text-[var(--text-faint)]">{a}</li>
                ))}
              </ul>

              <p className="mt-4 text-sm leading-relaxed text-[var(--text-soft)]">{pub.abstract}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {pub.keywords.map((k) => (
                  <span key={k} className="rounded-full bg-[var(--surface-0)] px-2.5 py-1 text-[11px] text-[var(--text-faint)]">
                    {k}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--card-border)] pt-6">
                <a
                  href={pub.ssrnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Read Paper on SSRN <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={pub.ssrnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] px-4 py-2 text-xs font-medium text-[var(--text-soft)] hover:border-gold/50 hover:text-gold-soft"
                >
                  View Abstract
                </a>
                <CopyButton text={citationText(pub)} label="Copy citation" />
                <CopyButton text={pub.bibtex} label="Copy BibTeX" />
                <span className="ml-auto font-mono-num text-xs text-[var(--text-faint)]">DOI: {pub.doi}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
