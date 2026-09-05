import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import Section from "../components/Section";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" variant="base">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Experience" title="Research, internships, and technical roles" />

        <div className="mt-14 max-w-3xl space-y-6">
          {experience.map((e, i) => (
            <TimelineItem key={e.org + e.role} entry={e} delay={i * 0.05} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </Section>
  );
}
