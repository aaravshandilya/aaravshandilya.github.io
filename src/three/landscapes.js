// Conceptual QUBO-style energy landscapes. These are hand-authored smooth
// functions chosen to *look like* an optimization energy surface (a clear
// global minimum plus several shallower local minima) — they are not derived
// from a real QUBO matrix. The UI labels this as an "interactive conceptual
// visualization," per the site's content-integrity rules.

function gaussianWell(x, z, cx, cz, depth, spread) {
  const dx = x - cx;
  const dz = z - cz;
  return -depth * Math.exp(-(dx * dx + dz * dz) / (2 * spread * spread));
}

export const LANDSCAPES = {
  ruggedBasin: {
    label: "Rugged Multi-Minima Basin",
    describe: "Several shallow local minima surrounding one deep global minimum.",
    height(x, z) {
      let h = 0;
      h += gaussianWell(x, z, 1.4, -1.1, 3.4, 0.9); // global minimum
      h += gaussianWell(x, z, -2.2, 1.6, 1.6, 0.7);
      h += gaussianWell(x, z, 2.3, 2.1, 1.3, 0.6);
      h += gaussianWell(x, z, -1.6, -2.0, 1.1, 0.55);
      h += gaussianWell(x, z, 0.2, 2.6, 0.9, 0.5);
      h += gaussianWell(x, z, -3.0, -0.4, 1.0, 0.6);
      h += 0.15 * Math.sin(x * 1.6) * Math.cos(z * 1.4); // ripple / ruggedness
      return h;
    },
    globalMin: [1.4, -1.1],
  },
  doubleWell: {
    label: "Double-Well Landscape",
    describe: "Two competing low-energy basins of similar depth.",
    height(x, z) {
      let h = 0;
      h += gaussianWell(x, z, 2.0, 0, 3.2, 1.0);
      h += gaussianWell(x, z, -2.0, 0, 3.0, 1.0);
      h += gaussianWell(x, z, 0, 2.2, 0.9, 0.6);
      h += gaussianWell(x, z, 0, -2.2, 0.9, 0.6);
      h += 0.12 * Math.sin(x * 1.1 + z * 1.1);
      return h;
    },
    globalMin: [2.0, 0],
  },
  terraced: {
    label: "Terraced Constraint Surface",
    describe: "Stepped plateaus suggesting constraint boundaries, with one deep feasible minimum.",
    height(x, z) {
      let h = 0;
      h += gaussianWell(x, z, -1.2, 1.8, 3.6, 0.8);
      h += gaussianWell(x, z, 2.4, -1.6, 1.4, 0.7);
      h += gaussianWell(x, z, -2.6, -2.2, 1.2, 0.6);
      const terrace = Math.round((Math.sin(x * 0.6) + Math.cos(z * 0.6)) * 1.5) / 1.5;
      h += terrace * 0.35;
      return h;
    },
    globalMin: [-1.2, 1.8],
  },
};

export const LANDSCAPE_KEYS = Object.keys(LANDSCAPES);

export function buildSurfaceData(landscapeKey, resolution = 56, extent = 4.2) {
  const landscape = LANDSCAPES[landscapeKey];
  const size = resolution + 1;
  const positions = new Float32Array(size * size * 3);
  const heights = new Float32Array(size * size);

  let minH = Infinity;
  let maxH = -Infinity;

  for (let iz = 0; iz < size; iz++) {
    for (let ix = 0; ix < size; ix++) {
      const x = (ix / resolution) * extent * 2 - extent;
      const z = (iz / resolution) * extent * 2 - extent;
      const h = landscape.height(x, z);
      const idx = iz * size + ix;
      heights[idx] = h;
      if (h < minH) minH = h;
      if (h > maxH) maxH = h;
    }
  }

  return { landscape, size, extent, resolution, heights, minH, maxH };
}

export function heightAt(landscapeKey, x, z) {
  return LANDSCAPES[landscapeKey].height(x, z);
}

// Numerical gradient, used to move particles "downhill" each frame.
export function gradientAt(landscapeKey, x, z, eps = 0.05) {
  const h = LANDSCAPES[landscapeKey].height;
  const dx = (h(x + eps, z) - h(x - eps, z)) / (2 * eps);
  const dz = (h(x, z + eps) - h(x, z - eps)) / (2 * eps);
  return [dx, dz];
}
