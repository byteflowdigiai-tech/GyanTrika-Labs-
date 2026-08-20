import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LabHotspot from './LabHotspot';
import { Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EmbeddedElectronicsLab({ position }: { position: [number, number, number] }) {
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
      onClick={(e) => { e.stopPropagation(); navigate('/technology-lab-setup/embedded-electronics'); }}
    >
      <group ref={groupRef}>
        {/* Lab Floor Area Indicator */}
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[9.5, 9.5]} />
          <meshStandardMaterial 
            color={hovered ? "#E0F2FE" : "#F8FAFC"} 
            transparent opacity={hovered ? 0.8 : 0.4} 
          />
        </mesh>

        <LabHotspot title="Embedded Systems & Electronics Lab" icon={Cpu} href="/technology-lab-setup/embedded-electronics" isHovered={hovered} />

        {/* --- Procedural 3D Equipment --- */}

        {/* Long Electronics Workbench */}
        <group position={[0, 0.5, -2]}>
          <mesh position={[0, -0.4, 0]} castShadow><boxGeometry args={[7, 0.1, 2]} /><meshStandardMaterial color="#FFFFFF" /></mesh>
          <mesh position={[-3.3, -0.8, -0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#64748B" /></mesh>
          <mesh position={[3.3, -0.8, -0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#64748B" /></mesh>
          <mesh position={[-3.3, -0.8, 0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#64748B" /></mesh>
          <mesh position={[3.3, -0.8, 0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#64748B" /></mesh>
          
          {/* Oscilloscope 1 */}
          <group position={[-2, 0.15, -0.5]}>
            <mesh castShadow><boxGeometry args={[0.6, 0.4, 0.5]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
            <mesh position={[-0.1, 0, 0.26]}><boxGeometry args={[0.3, 0.25, 0.01]} /><meshStandardMaterial color="#000000" /></mesh>
            <mesh position={[-0.1, 0, 0.27]}><planeGeometry args={[0.25, 0.2]} /><meshBasicMaterial color="#22c55e" /></mesh> {/* Green sine wave screen */}
            {/* Knobs */}
            <mesh position={[0.2, 0.1, 0.26]} rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 0.05]} /><meshStandardMaterial color="#475569" /></mesh>
            <mesh position={[0.2, -0.1, 0.26]} rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 0.05]} /><meshStandardMaterial color="#475569" /></mesh>
          </group>

          {/* Oscilloscope 2 */}
          <group position={[2, 0.15, -0.5]}>
            <mesh castShadow><boxGeometry args={[0.6, 0.4, 0.5]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
            <mesh position={[-0.1, 0, 0.26]}><boxGeometry args={[0.3, 0.25, 0.01]} /><meshStandardMaterial color="#000000" /></mesh>
            <mesh position={[-0.1, 0, 0.27]}><planeGeometry args={[0.25, 0.2]} /><meshBasicMaterial color="#3b82f6" /></mesh>
            <mesh position={[0.2, 0.1, 0.26]} rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 0.05]} /><meshStandardMaterial color="#475569" /></mesh>
            <mesh position={[0.2, -0.1, 0.26]} rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 0.05]} /><meshStandardMaterial color="#475569" /></mesh>
          </group>

          {/* Development Boards / Circuit Boards */}
          <mesh position={[0, -0.32, 0]} castShadow><boxGeometry args={[0.4, 0.02, 0.3]} /><meshStandardMaterial color="#166534" /></mesh>
          <mesh position={[0, -0.3, 0]}><boxGeometry args={[0.1, 0.03, 0.1]} /><meshStandardMaterial color="#000000" /></mesh>
          
          <mesh position={[0.8, -0.32, 0.2]} castShadow><boxGeometry args={[0.5, 0.02, 0.2]} /><meshStandardMaterial color="#166534" /></mesh>
          <mesh position={[-0.8, -0.32, -0.2]} castShadow><boxGeometry args={[0.3, 0.02, 0.4]} /><meshStandardMaterial color="#166534" /></mesh>
        </group>

        {/* Storage / Component Rack */}
        <group position={[-4, 1.2, 0]}>
          <mesh castShadow><boxGeometry args={[1, 2.4, 2]} /><meshStandardMaterial color="#94a3b8" /></mesh>
          {/* Drawers/Bins */}
          {Array.from({length: 6}).map((_, i) => (
             <mesh key={i} position={[0.51, 1 - i * 0.4, 0]}><boxGeometry args={[0.05, 0.3, 1.8]} /><meshStandardMaterial color="#3b82f6" transparent opacity={0.8} /></mesh>
          ))}
        </group>

      </group>
    </group>
  );
}
