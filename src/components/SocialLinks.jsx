import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { socials } from "../data/socials";

const LINKS = [
  { key: "github", label: "GitHub", icon: Github, url: socials.github },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, url: socials.linkedin },
  { key: "email", label: "Email", icon: Mail, url: socials.email },
  { key: "ssrnPaper", label: "Research paper (SSRN)", icon: FileText, url: socials.ssrnPaper },
];

export default function SocialLinks({ className = "", iconClassName = "h-5 w-5" }) {
  const active = LINKS.filter((l) => l.url);
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {active.map(({ key, label, icon: Icon, url }) => {
        const isMail = url.startsWith("mailto:");
        return (
          <a
            key={key}
            href={url}
            aria-label={label}
            title={label}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-soft/15 text-cream-soft/80 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold-soft"
          >
            <Icon className={iconClassName} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
