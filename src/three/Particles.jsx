import { useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { heightAt, gradientAt, LANDSCAPES } from "./landscapes";

const EXTENT = 3.9;

function randomScatter(count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.2 + Math.random() * EXTENT * 0.95;
    arr.push({
      x: Math.cos(angle) * radius,
      z: Math.sin(angle) * radius,
      vx: 0,
      vz: 0,
    });
  }
  return arr;
}

// count: number of candidate-solution particles
// temperature: 0..1, higher = more exploration noise
// speed: 0..1, higher = faster descent
// running: whether the simulation advances
// resetSignal: bump this number to re-scatter particles
export default function Particles({
  landscapeKey,
  count = 42,
  temperature = 0.35,
  speed = 0.5,
  running = true,
  resetSignal = 0,
  heightScale = 1.15,
}) {
  const meshRef = useRef(null);
  const stateRef = useRef(randomScatter(count));
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colorLow = useMemo(() => new THREE.Color("#10b981"), []);
  const colorHigh = useMemo(() => new THREE.Color("#c2a45d"), []);

  useEffect(() => {
    stateRef.current = randomScatter(count);
  }, [count, resetSignal, landscapeKey]);

  // pre-compute min/max height for this landscape for color + centering
  const { minH, maxH } = useMemo(() => {
    let mn = Infinity;
    let mx = -Infinity;
    const h = LANDSCAPES[landscapeKey].height;
    for (let i = 0; i <= 24; i++) {
      for (let j = 0; j <= 24; j++) {
        const x = (i / 24) * EXTENT * 2 - EXTENT;
        const z = (j / 24) * EXTENT * 2 - EXTENT;
        const v = h(x, z);
        if (v < mn) mn = v;
        if (v > mx) mx = v;
      }
    }
    return { minH: mn, maxH: mx };
  }, [landscapeKey]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const dt = Math.min(delta, 0.05);
    const particles = stateRef.current;
    const range = maxH - minH || 1;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (running) {
        const [gx, gz] = gradientAt(landscapeKey, p.x, p.z);
        const step = speed * 1.6;
        // gradient descent toward lower energy
        p.vx = p.vx * 0.82 - gx * step * dt * 6;
        p.vz = p.vz * 0.82 - gz * step * dt * 6;
        // thermal jitter — higher temperature explores more, can escape shallow minima
        const jitter = temperature * 1.6;
        p.vx += (Math.random() - 0.5) * jitter * dt * 4;
        p.vz += (Math.random() - 0.5) * jitter * dt * 4;

        p.x += p.vx * dt;
        p.z += p.vz * dt;

        // keep within bounds
        const r = Math.sqrt(p.x * p.x + p.z * p.z);
        if (r > EXTENT) {
          p.x *= EXTENT / r;
          p.z *= EXTENT / r;
          p.vx *= -0.3;
          p.vz *= -0.3;
        }
      }

      const h = heightAt(landscapeKey, p.x, p.z);
      const y = (h - minH - range * 0.5) * heightScale + 0.06;
      dummy.position.set(p.x, y, p.z);
      const scale = 0.075;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      const t = THREE.MathUtils.clamp((h - minH) / range, 0, 1);
      const c = colorLow.clone().lerp(colorHigh, t);
      meshRef.current.setColorAt(i, c);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial roughness={0.3} metalness={0.25} emissive="#10b981" emissiveIntensity={0.25} />
    </instancedMesh>
  );
}
