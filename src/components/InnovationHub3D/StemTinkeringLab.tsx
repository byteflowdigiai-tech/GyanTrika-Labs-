import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LabHotspot from './LabHotspot';
import { Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StemTinkeringLab({ position }: { position: [number, number, number] }) {
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
      onClick={(e) => { e.stopPropagation(); navigate('/technology-lab-setup/stem-tinkering'); }}
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

        <LabHotspot title="Atal Tinkering Lab" icon={Wrench} href="/technology-lab-setup/stem-tinkering" isHovered={hovered} />

        {/* --- Procedural 3D Equipment --- */}
        
        {/* Tinkering Workbench 1 */}
        <group position={[-2, 0.5, -2]}>
          <mesh position={[0, -0.4, 0]} castShadow><boxGeometry args={[3, 0.1, 2]} /><meshStandardMaterial color="#d97706" /></mesh> {/* Wooden top */}
          <mesh position={[-1.3, -0.8, -0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
          <mesh position={[1.3, -0.8, -0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
          <mesh position={[-1.3, -0.8, 0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
          <mesh position={[1.3, -0.8, 0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
          
          {/* Mechanical Project on table */}
          <mesh position={[0, -0.2, 0]} castShadow><boxGeometry args={[0.6, 0.4, 0.4]} /><meshStandardMaterial color="#3b82f6" /></mesh>
          <mesh position={[0.4, -0.2, 0]} castShadow rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.1, 0.1, 0.5]} /><meshStandardMaterial color="#94a3b8" /></mesh>
        </group>

        {/* Tinkering Workbench 2 */}
        <group position={[2, 0.5, 2]}>
          <mesh position={[0, -0.4, 0]} castShadow><boxGeometry args={[3, 0.1, 2]} /><meshStandardMaterial color="#d97706" /></mesh>
          <mesh position={[-1.3, -0.8, -0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
          <mesh position={[1.3, -0.8, -0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
          <mesh position={[-1.3, -0.8, 0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
          <mesh position={[1.3, -0.8, 0.8]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
          
          {/* Tools / Kits */}
          <mesh position={[-0.5, -0.3, -0.2]} castShadow><boxGeometry args={[0.5, 0.2, 0.3]} /><meshStandardMaterial color="#ef4444" /></mesh>
          <mesh position={[0.8, -0.35, 0.5]} castShadow rotation={[0, 0, Math.PI/2]}><cylinderGeometry args={[0.05, 0.05, 0.4]} /><meshStandardMaterial color="#94a3b8" /></mesh>
        </group>

        {/* Tool Wall / Pegboard */}
        <group position={[0, 1.5, -4.8]}>
          <mesh castShadow><boxGeometry args={[4, 2, 0.1]} /><meshStandardMaterial color="#fcd34d" /></mesh>
          {/* Pegs and hanging tools */}
          {Array.from({length: 8}).map((_, i) => (
            <mesh key={i} position={[-1.5 + (i%4)*1, 0.5 - Math.floor(i/4)*0.8, 0.08]} castShadow rotation={[Math.PI/2, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.2]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
          ))}
          {/* Tool outlines/shapes */}
          <mesh position={[-1.5, 0.3, 0.1]}><boxGeometry args={[0.1, 0.4, 0.02]} /><meshStandardMaterial color="#334155" /></mesh>
          <mesh position={[-0.5, 0.3, 0.1]} rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.1, 0.1, 0.02]} /><meshStandardMaterial color="#ef4444" /></mesh>
        </group>

      </group>
    </group>
  );
}
