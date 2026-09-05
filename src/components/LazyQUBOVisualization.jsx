import { Suspense, lazy } from "react";
import StaticLandscape from "./StaticLandscape";

// The 3D visualization (three.js + @react-three/fiber) is the single
// heaviest dependency on this site, so it's code-split into its own chunk
// and only fetched when a visitor actually scrolls near it / the hero
// mounts — not blocking first paint of the rest of the page.
const QUBOVisualization = lazy(() => import("./QUBOVisualization"));

export default function LazyQUBOVisualization(props) {
  return (
    <Suspense fallback={<StaticLandscape className={props.className} />}>
      <QUBOVisualization {...props} />
    </Suspense>
  );
}
