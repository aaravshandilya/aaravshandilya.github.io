import { Suspense, useCallback, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EnergySurface from "../three/EnergySurface";
import Particles from "../three/Particles";
import StaticLandscape from "./StaticLandscape";
import { isWebGLAvailable } from "../three/webgl";
import { usePrefersReducedMotion, useLowPerfDevice } from "../hooks";

function Scene({ landscapeKey, temperature, speed, running, resetSignal, interactive, autoRotate }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={0.55} color="#f4f0e6" />
      <directionalLight position={[-5, 3, -4]} intensity={0.22} color="#10b981" />
      <group position={[0, -0.2, 0]}>
        <EnergySurface landscapeKey={landscapeKey} />
        <Particles
          landscapeKey={landscapeKey}
          temperature={temperature}
          speed={speed}
          running={running}
          resetSignal={resetSignal}
          count={interactive ? 42 : 22}
        />
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={interactive}
        enableRotate={interactive}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
        minDistance={4.5}
        maxDistance={12}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  );
}

/**
 * mode: "hero" (subtle, non-interactive background) | "full" (signature,
 * fully interactive section with orbit/zoom + particle annealing demo)
 */
export default function QUBOVisualization({ mode = "full", className = "" }) {
  const reducedMotion = usePrefersReducedMotion();
  const lowPerf = useLowPerfDevice();
  const webglOk = useRef(isWebGLAvailable()).current;

  const [landscapeKey, setLandscapeKey] = useState("ruggedBasin");
  const [temperature, setTemperature] = useState(0.35);
  const [speed, setSpeed] = useState(0.5);
  const [running, setRunning] = useState(true);
  const [autoRotate, setAutoRotate] = useState(mode === "hero" ? true : !reducedMotion);
  const [resetSignal, setResetSignal] = useState(0);
  const resumeTimer = useRef(null);

  const handleInteractionStart = useCallback(() => {
    if (mode !== "full") return;
    setAutoRotate(false);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, [mode]);

  const handleInteractionEnd = useCallback(() => {
    if (mode !== "full") return;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      if (!reducedMotion) setAutoRotate(true);
    }, 4000);
  }, [mode, reducedMotion]);

  const useStaticFallback = !webglOk || (lowPerf && mode === "hero") || (reducedMotion && mode === "hero");

  if (useStaticFallback) {
    return <StaticLandscape className={className} />;
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [6.2, 4.6, 6.2], fov: 42 }}
        dpr={lowPerf ? [1, 1.4] : [1, 2]}
        gl={{ antialias: true, alpha: true, toneMappingExposure: 0.95 }}
        onPointerDown={handleInteractionStart}
        onPointerUp={handleInteractionEnd}
        onWheel={mode === "full" ? handleInteractionStart : undefined}
      >
        <fog attach="fog" args={["#101311", 9, 18]} />
        <Suspense fallback={null}>
          <Scene
            landscapeKey={landscapeKey}
            temperature={temperature}
            speed={speed}
            running={mode === "hero" ? !reducedMotion : running}
            resetSignal={resetSignal}
            interactive={mode === "full"}
            autoRotate={mode === "hero" ? !reducedMotion : autoRotate}
          />
        </Suspense>
      </Canvas>

      {mode === "full" && (
        <QUBOControls
          landscapeKey={landscapeKey}
          setLandscapeKey={(k) => {
            setLandscapeKey(k);
            setResetSignal((s) => s + 1);
          }}
          temperature={temperature}
          setTemperature={setTemperature}
          speed={speed}
          setSpeed={setSpeed}
          running={running}
          setRunning={setRunning}
          autoRotate={autoRotate}
          setAutoRotate={setAutoRotate}
          onRestart={() => setResetSignal((s) => s + 1)}
        />
      )}
    </div>
  );
}

function QUBOControls({
  landscapeKey,
  setLandscapeKey,
  temperature,
  setTemperature,
  speed,
  setSpeed,
  running,
  setRunning,
  autoRotate,
  setAutoRotate,
  onRestart,
}) {
  const landscapes = [
    { key: "ruggedBasin", label: "Rugged Basin" },
    { key: "doubleWell", label: "Double Well" },
    { key: "terraced", label: "Terraced" },
  ];

  return (
    <div className="mt-5 rounded-2xl border border-cream-soft/10 bg-forest/60 p-4 backdrop-blur-md sm:p-5">
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Choose example landscape">
        {landscapes.map((l) => (
          <button
            key={l.key}
            type="button"
            onClick={() => setLandscapeKey(l.key)}
            aria-pressed={landscapeKey === l.key}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
              landscapeKey === l.key
                ? "border-gold bg-gold/15 text-gold-soft"
                : "border-cream-soft/15 text-cream-soft/70 hover:border-cream-soft/30 hover:text-cream-soft"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-xs text-cream-soft/70">
          <span className="mb-1.5 flex justify-between font-mono-num">
            <span>Temperature</span>
            <span>{temperature.toFixed(2)}</span>
          </span>
          <input
            type="range"
            min="0.02"
            max="1"
            step="0.01"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-gold"
            aria-label="Annealing temperature"
          />
        </label>
        <label className="block text-xs text-cream-soft/70">
          <span className="mb-1.5 flex justify-between font-mono-num">
            <span>Optimization speed</span>
            <span>{speed.toFixed(2)}</span>
          </span>
          <input
            type="range"
            min="0.05"
            max="1"
            step="0.01"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full accent-gold"
            aria-label="Optimization speed"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="rounded-full border border-cream-soft/15 px-3.5 py-1.5 text-xs font-medium text-cream-soft/85 transition-colors hover:border-gold/50 hover:text-gold-soft"
        >
          {running ? "Pause optimization" : "Resume optimization"}
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="rounded-full border border-cream-soft/15 px-3.5 py-1.5 text-xs font-medium text-cream-soft/85 transition-colors hover:border-gold/50 hover:text-gold-soft"
        >
          Restart candidates
        </button>
        <label className="ml-auto flex items-center gap-2 text-xs text-cream-soft/70">
          <input
            type="checkbox"
            checked={autoRotate}
            onChange={(e) => setAutoRotate(e.target.checked)}
            className="accent-gold"
          />
          Auto camera movement
        </label>
      </div>
    </div>
  );
}
