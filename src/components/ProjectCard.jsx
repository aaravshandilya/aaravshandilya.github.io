import { Github } from "lucide-react";
import { StatusBadge, Tag } from "./Tag";
import Reveal from "./Reveal";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="flex h-full flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/25"
    >
      <div className="flex items-start justify-between gap-3">
        <StatusBadge status={project.status} label={project.statusLabel} />
        <span className="text-right text-[11px] text-[var(--text-faint)]">{project.dateRange}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-[var(--text-strong)]">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{project.oneLiner}</p>

      <div className="mt-4 space-y-2 text-sm text-[var(--text-soft)]">
        <p>
          <span className="font-medium text-[var(--text-strong)]">Contribution — </span>
          {project.contribution}
        </p>
        {project.result && (
          <p className="text-[var(--accent-positive)]">
            <span className="font-medium">Result — </span>
            {project.result}
          </p>
        )}
        {project.affiliation && (
          <p className="text-[var(--text-faint)]">{project.affiliation}</p>
        )}
      </div>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {project.links?.code && (
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-gold"
          >
            <Github className="h-4 w-4" /> View code
          </a>
        )}
      </div>
    </Reveal>
  );
}
