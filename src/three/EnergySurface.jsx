import { useMemo } from "react";
import * as THREE from "three";
import { buildSurfaceData } from "./landscapes";

// Brand palette, low energy -> high energy
const STOPS = [
  { t: 0.0, c: new THREE.Color("#10b981") }, // emerald — global minimum
  { t: 0.28, c: new THREE.Color("#c2a45d") }, // gold
  { t: 0.6, c: new THREE.Color("#e9e4d8") }, // soft cream
  { t: 1.0, c: new THREE.Color("#263126") }, // forest — peaks
];

function colorForT(t) {
  for (let i = 0; i < STOPS.length - 1; i++) {
    const a = STOPS[i];
    const b = STOPS[i + 1];
    if (t >= a.t && t <= b.t) {
      const localT = (t - a.t) / (b.t - a.t || 1);
      return a.c.clone().lerp(b.c, localT);
    }
  }
  return STOPS[STOPS.length - 1].c;
}

export default function EnergySurface({ landscapeKey, heightScale = 1.15 }) {
  const geometry = useMemo(() => {
    const { size, extent, heights, minH, maxH } = buildSurfaceData(landscapeKey);
    const geo = new THREE.PlaneGeometry(extent * 2, extent * 2, size - 1, size - 1);
    geo.rotateX(-Math.PI / 2);

    const posAttr = geo.attributes.position;
    const colors = new Float32Array(posAttr.count * 3);
    const range = maxH - minH || 1;

    for (let i = 0; i < posAttr.count; i++) {
      const h = heights[i];
      const y = (h - minH - range * 0.5) * heightScale;
      posAttr.setY(i, y);
      const t = (h - minH) / range;
      const color = colorForT(t);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  }, [landscapeKey, heightScale]);

  const wireframe = useMemo(() => new THREE.WireframeGeometry(geometry), [geometry]);

  return (
    <group>
      <mesh geometry={geometry} receiveShadow>
        <meshStandardMaterial
          vertexColors
          roughness={0.55}
          metalness={0.08}
          flatShading={false}
        />
      </mesh>
      <lineSegments geometry={wireframe}>
        <lineBasicMaterial color="#101311" transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}
