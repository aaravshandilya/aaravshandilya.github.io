import { motion } from "framer-motion";
import { ArrowRight, FileDown, ChevronDown } from "lucide-react";
import { profile } from "../data/profile";
import SocialLinks from "../components/SocialLinks";
import QUBOVisualization from "../components/LazyQUBOVisualization";
import { usePrefersReducedMotion } from "../hooks";

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-16">
      <div className="pointer-events-none absolute inset-0">
        <QUBOVisualization mode="hero" className="h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-soft">
            {profile.school} · {profile.program}
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-cream sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-balance text-lg leading-relaxed text-cream-soft/85 sm:text-xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream-soft/60 sm:text-base">
            {profile.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream-soft/20 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold/50 hover:text-gold-soft"
            >
              <FileDown className="h-4 w-4" />
              View Résumé
            </a>
          </div>

          <SocialLinks className="mt-10" />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-soft/65 transition-colors hover:text-gold-soft sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  );
}
