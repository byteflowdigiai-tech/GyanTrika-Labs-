import React from 'react';

export default function FacilityBase() {
  return (
    <group>
      {/* Main Floor / Foundation */}
      <mesh position={[0, -0.25, 0]} receiveShadow>
        <boxGeometry args={[30.5, 0.5, 20.5]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Decorative Blueprint/Grid Floor */}
      <mesh position={[0, 0.01, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial color="#F8FAFC" metalness={0.1} roughness={0.3} />
      </mesh>



      {/* Outer Perimeter Walls */}
      {/* Back Wall */}
      <mesh position={[0, 1.5, -10]} castShadow receiveShadow>
        <boxGeometry args={[30, 3, 0.2]} />
        <meshPhysicalMaterial transparent opacity={0.2} transmission={0.9} roughness={0.1} color="#B3CDE0" />
      </mesh>
      {/* Front Wall */}
      <mesh position={[0, 1.5, 10]} castShadow receiveShadow>
        <boxGeometry args={[30, 3, 0.2]} />
        <meshPhysicalMaterial transparent opacity={0.1} transmission={0.95} roughness={0.1} color="#B3CDE0" />
      </mesh>
      {/* Left Wall */}
      <mesh position={[-15, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 3, 20]} />
        <meshPhysicalMaterial transparent opacity={0.2} transmission={0.9} roughness={0.1} color="#B3CDE0" />
      </mesh>
      {/* Right Wall */}
      <mesh position={[15, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 3, 20]} />
        <meshPhysicalMaterial transparent opacity={0.2} transmission={0.9} roughness={0.1} color="#B3CDE0" />
      </mesh>

      {/* Inner Partitions */}
      {/* Main horizontal partition */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[30, 3, 0.2]} />
        <meshPhysicalMaterial transparent opacity={0.3} transmission={0.8} roughness={0.1} color="#B3CDE0" />
      </mesh>
      
      {/* Top vertical partition (separates AI & Astronomy) */}
      <mesh position={[0, 1.5, -5]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 3, 10]} />
        <meshPhysicalMaterial transparent opacity={0.3} transmission={0.8} roughness={0.1} color="#B3CDE0" />
      </mesh>

      {/* Bottom vertical partition 1 (separates Embedded & STEM) */}
      <mesh position={[-5, 1.5, 5]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 3, 10]} />
        <meshPhysicalMaterial transparent opacity={0.3} transmission={0.8} roughness={0.1} color="#B3CDE0" />
      </mesh>

      {/* Bottom vertical partition 2 (separates STEM & Composite) */}
      <mesh position={[5, 1.5, 5]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 3, 10]} />
        <meshPhysicalMaterial transparent opacity={0.3} transmission={0.8} roughness={0.1} color="#B3CDE0" />
      </mesh>

      {/* Small glowing base trim */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[30.1, 0.2, 20.1]} />
        <meshBasicMaterial color="#2B5C92" opacity={0.2} transparent />
      </mesh>
    </group>
  );
}
