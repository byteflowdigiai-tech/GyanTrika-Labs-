import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import InnovationHubImage from './InnovationHubImage';

export default function InnovationHub3D() {
  return (
    <div className="w-full h-full relative cursor-move">
      <Canvas
        shadows
        camera={{ position: [0, 0, 22], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          castShadow 
          position={[10, 20, 30]} 
          intensity={1.0} 
          shadow-mapSize={[2048, 2048]} 
          color="#ffffff"
        />
        
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <InnovationHubImage />
            
            {/* Premium realistic floating shadow directly underneath the 32x18 board (bottom edge is at Y=-9) */}
            <ContactShadows position={[0, -9.1, 0]} opacity={0.5} scale={40} blur={2.0} far={10} />
          </group>
          
          <Environment preset="city" />
        </Suspense>

        <OrbitControls 
          makeDefault
          enablePan={true}
          enableZoom={true}
          enableRotate={true} // Enable 3D rotation so the user can tilt the 3D card
          minPolarAngle={Math.PI / 4} // Don't allow looking from strictly underneath
          maxPolarAngle={Math.PI / 1.5}
          minAzimuthAngle={-Math.PI / 3} // Restrict rotation so they don't look perfectly at the back
          maxAzimuthAngle={Math.PI / 3}
          minDistance={10}
          maxDistance={50}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}
