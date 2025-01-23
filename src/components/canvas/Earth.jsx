import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import "./App.css"; // Optional: Add styles for the container

// Earth Component
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive 
      object={earth.scene} 
      scale={6} // Increased scale for a larger model
      position-y={-1.5} // Adjusted vertical position to center it
      rotation-y={0} 
    />
  );
};

// EarthCanvas Component
const EarthCanvas = () => {
  return (
    <div id="earth-canvas-container">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 300, // Increased far to accommodate the larger model
          position: [-10, 8, 15], // Moved the camera farther back
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
