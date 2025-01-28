import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const modelUrl = '/assets/models/steve.glb';

const MinecraftHead = ({ modelUrl }) => {
  const headRef = useRef();
  const { scene } = useGLTF(modelUrl);

  useFrame(() => {
    if (headRef.current) {
      // Rotate the head around the Y axis
      headRef.current.rotation.y += 0.008;
    }
  });

  return (
    <primitive 
      ref={headRef}
      object={scene}
      scale={[10, 10, 10]}
      position={[0, 0, 0]}
    />
  );
};

const modelViewer = () => {
  return (
    <div className="w-64 h-64 rounded-lg shadow-lg">
      <Canvas
        camera={{ position: [3, 3, 10], fov: 45}}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <MinecraftHead modelUrl={modelUrl} />
      </Canvas>
    </div>
  );
};

export default modelViewer;