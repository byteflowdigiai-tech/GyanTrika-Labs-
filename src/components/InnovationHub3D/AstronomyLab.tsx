import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LabHotspot from './LabHotspot';
import { Telescope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AstronomyLab({ position }: { position: [number, number, number] }) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<Group>(null);
  const navigate = useNavigate();

  useFrame((state, delta) => {
    if (groupRef.current) {
      const targetY = hovered ? 0.3 : 0;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
    }
  });

  return (
    <group 
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
      onClick={(e) => { e.stopPropagation(); navigate('/technology-lab-setup/astronomy'); }}
    >
      <group ref={groupRef}>
        {/* Lab Floor Area Indicator */}
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[14.5, 9.5]} />
          <meshStandardMaterial 
            color={hovered ? "#E0F2FE" : "#F8FAFC"} 
            transparent opacity={hovered ? 0.8 : 0.4} 
          />
        </mesh>

        <LabHotspot title="Astronomy Lab" icon={Telescope} href="/technology-lab-setup/astronomy" isHovered={hovered} />

        {/* --- Procedural 3D Equipment --- */}

        {/* Observatory Telescope */}
        <group position={[0, 0, 0]}>
          {/* Base */}
          <mesh position={[0, 0.4, 0]} castShadow><cylinderGeometry args={[0.8, 1.0, 0.8]} /><meshStandardMaterial color="#FFFFFF" roughness={0.2} /></mesh>
          {/* Mount Fork */}
          <mesh position={[-0.6, 1.2, 0]} castShadow><boxGeometry args={[0.2, 1.2, 0.6]} /><meshStandardMaterial color="#64748B" /></mesh>
          <mesh position={[0.6, 1.2, 0]} castShadow><boxGeometry args={[0.2, 1.2, 0.6]} /><meshStandardMaterial color="#64748B" /></mesh>
          {/* Optical Tube Assembly (Telescope) */}
          <group position={[0, 1.5, 0]} rotation={[-0.5, 0, 0]}>
            <mesh castShadow><cylinderGeometry args={[0.5, 0.5, 2.5]} rotation={[Math.PI/2, 0, 0]} /><meshStandardMaterial color="#FFFFFF" roughness={0.2} /></mesh>
            <mesh position={[0, 0, 1.25]} castShadow><cylinderGeometry args={[0.48, 0.48, 0.1]} rotation={[Math.PI/2, 0, 0]} /><meshStandardMaterial color="#000000" /></mesh>
            <mesh position={[0, 0, -1.25]} castShadow><cylinderGeometry args={[0.51, 0.51, 0.2]} rotation={[Math.PI/2, 0, 0]} /><meshStandardMaterial color="#0C1446" /></mesh>
          </group>
        </group>

        {/* Large Planetary Display Screen */}
        <group position={[0, 1.5, -4.8]}>
          <mesh castShadow><boxGeometry args={[6, 2.5, 0.1]} /><meshStandardMaterial color="#1E293B" /></mesh>
          <mesh position={[0, 0, 0.06]}><boxGeometry args={[5.8, 2.3, 0.01]} /><meshStandardMaterial color="#000000" /></mesh>
          {/* Constellation / Planet visualization */}
          <mesh position={[-1.5, 0, 0.07]}><circleGeometry args={[0.8, 32]} /><meshBasicMaterial color="#38BDF8" transparent opacity={0.6} /></mesh>
          <mesh position={[-1.5, 0, 0.08]}><circleGeometry args={[1.0, 32]} /><meshBasicMaterial color="#38BDF8" transparent opacity={0.2} wireframe /></mesh>
          <mesh position={[1.5, 0, 0.07]}><planeGeometry args={[2, 1.5]} /><meshBasicMaterial color="#2B5C92" transparent opacity={0.8} /></mesh>
        </group>

        {/* Control Console */}
        <group position={[0, 0.4, 3]}>
          <mesh castShadow rotation={[0.2, 0, 0]}><boxGeometry args={[2, 0.1, 1]} /><meshStandardMaterial color="#334155" /></mesh>
          <mesh position={[0, -0.4, 0]} castShadow><boxGeometry args={[1.8, 0.8, 0.8]} /><meshStandardMaterial color="#FFFFFF" /></mesh>
          {/* Buttons/Displays on console */}
          <mesh position={[-0.5, 0.06, 0]} rotation={[0.2, 0, 0]}><planeGeometry args={[0.4, 0.3]} /><meshBasicMaterial color="#38BDF8" /></mesh>
          <mesh position={[0.5, 0.06, 0]} rotation={[0.2, 0, 0]}><planeGeometry args={[0.4, 0.3]} /><meshBasicMaterial color="#FACC15" /></mesh>
        </group>

      </group>
    </group>
  );
}
