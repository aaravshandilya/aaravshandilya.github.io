import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import Section from "../components/Section";
import { leadership } from "../data/leadership";

export default function Leadership() {
  return (
    <Section id="leadership" variant="base">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Leadership"
          title="Organizations built and led"
          description="Founding and officer roles across STEM clubs and a statewide SkillsUSA region — verified progression from chapter to region level."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {leadership.map((entry, i) => (
            <TimelineItem key={entry.org + entry.role} entry={entry} delay={i * 0.05} isLast />
          ))}
        </div>
      </div>
    </Section>
  );
}
