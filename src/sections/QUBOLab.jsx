import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import QUBOVisualization from "../components/LazyQUBOVisualization";

export default function QUBOLab() {
  return (
    <section id="qubo-lab" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          forceDark
          kicker="Signature Visualization"
          title="An interactive QUBO energy landscape"
          description="Drag to rotate, scroll to zoom, and adjust the parameters below. Small spheres represent candidate solutions moving toward lower-energy states as the optimizer runs."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-cream-soft/10 bg-gradient-to-b from-forest/60 to-ink shadow-soft">
              <QUBOVisualization mode="full" className="h-[420px] w-full sm:h-[520px]" />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="space-y-6">
            <div className="rounded-2xl border border-cream-soft/10 bg-forest/40 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                What am I looking at?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-soft/75">
                A QUBO represents a problem as an energy landscape. Each point is a
                possible solution, and the optimizer searches for the lowest-energy
                feasible answer.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-soft/60">
                Raising the temperature lets candidate solutions explore more of the
                surface before settling; raising the speed makes them descend faster.
                This is an interactive conceptual visualization, not a scientifically
                exact simulation of a specific solved QUBO instance.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-soft/10 bg-forest/40 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Where this applies</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-soft/70">
                The same modeling idea — reformulating a hard combinatorial decision as
                a binary optimization landscape — underlies Aarav's research on
                supply-chain routing and pangenome graph optimization below.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
