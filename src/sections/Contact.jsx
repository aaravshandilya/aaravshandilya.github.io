import { Mail, FileDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          forceDark
          kicker="Contact"
          title="Let's build something meaningful."
          description="Reach out about research collaboration, mentorship, or opportunities in optimization, AI, or computational biology."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Reveal delay={0.05} className="space-y-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-cream-soft/85 hover:text-gold-soft"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-cream-soft/85 hover:text-gold-soft"
            >
              <FileDown className="h-4 w-4" /> Download résumé
            </a>
            <SocialLinks />
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-cream-soft/10 bg-forest/40 p-6 shadow-soft sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
