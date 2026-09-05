import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { projects } from "../data/projects";
import { socials } from "../data/socials";

export default function Projects() {
  return (
    <Section id="projects" variant="alt">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Projects"
          title="Applied and independent projects"
          description="Smaller builds and competitions alongside the core research threads — spanning computer vision, spaceflight biology, astrophysics, and signal processing."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.05} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--accent)] hover:text-gold"
          >
            More code and repositories on GitHub →
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
