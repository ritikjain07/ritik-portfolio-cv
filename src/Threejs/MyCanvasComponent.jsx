import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Bloom, EffectComposer ,DepthOfField } from "@react-three/postprocessing";

const Mesh = React.lazy(() => import("./Mesh"));

function MyCanvasComponent() {
  return (
    <Canvas shadows camera={{ fov: 90 }} gl={{ antialias: true }}>
      <directionalLight intensity={10} position={[1, 1, 4]} castShadow />
      <directionalLight
        intensity={10}
        color={"white"}
        position={[-1, -1, -4]}
        castShadow
      />
      <Suspense fallback={<></>}>
        <Mesh />
      </Suspense>
      <EffectComposer>
        <Bloom intensity={1} />
        <ContactShadows />
        {/* <Outline /> */}
        <DepthOfField focusDistance={1} focalLength={0.05} />
      </EffectComposer>
      <OrbitControls
        enablePan={true}
        autoRotate
        rotateSpeed={1}
        autoRotateSpeed={1}
        enableRotate={true}
      />
    </Canvas>
  );
}

export default MyCanvasComponent;
