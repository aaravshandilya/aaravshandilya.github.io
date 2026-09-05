import { useState } from "react";
import { ChevronDown, ExternalLink, Github, FileText } from "lucide-react";
import { StatusBadge, Tag } from "./Tag";
import Reveal from "./Reveal";

export default function ResearchCard({ item, delay = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay} className="group rounded-3xl border border-[var(--card-border)] bg-[var(--card-surface)] p-6 shadow-soft transition-colors hover:border-gold/25 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <StatusBadge status={item.status} label={item.statusLabel} />
          <h3 className="mt-3 text-xl font-semibold text-[var(--text-strong)] sm:text-2xl">{item.title}</h3>
        </div>
        <span className="text-xs text-[var(--text-faint)]">{item.dateRange}</span>
      </div>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-soft)] sm:text-base">
        {item.oneLiner}
      </p>

      <dl className="mt-5 grid grid-cols-1 gap-4 border-t border-[var(--card-border)] pt-5 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Contribution</dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-[var(--text-soft)]">{item.contribution}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Affiliation</dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-[var(--text-soft)]">
            {item.affiliation}
            {item.affiliationNote && (
              <span className="mt-1 block text-xs text-[var(--text-faint)]">{item.affiliationNote}</span>
            )}
          </dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-gold"
      >
        {open ? "Hide details" : "Read more"}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-4 space-y-4 border-t border-[var(--card-border)] pt-4">
          <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--text-soft)]">
            {item.description}
          </p>
          {item.keyResult && (
            <p className="text-sm text-[var(--accent-positive)]">
              <span className="font-semibold">Key result: </span>
              {item.keyResult}
            </p>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[var(--card-border)] pt-5">
        {item.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        <div className="ml-auto flex flex-wrap gap-3">
          {item.links?.paper && (
            <a
              href={item.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-gold"
            >
              <FileText className="h-4 w-4" /> Read paper
            </a>
          )}
          {item.links?.code && (
            <a
              href={item.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-gold"
            >
              <Github className="h-4 w-4" /> View code
            </a>
          )}
          {item.links?.demo && (
            <a
              href={item.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-gold"
            >
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
