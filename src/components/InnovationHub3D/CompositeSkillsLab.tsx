import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LabHotspot from './LabHotspot';
import { Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CompositeSkillsLab({ position }: { position: [number, number, number] }) {
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
      onClick={(e) => { e.stopPropagation(); navigate('/technology-lab-setup/composite-skills'); }}
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

        <LabHotspot title="Composite Skills Lab" icon={Layers} href="/technology-lab-setup/composite-skills" isHovered={hovered} />

        {/* --- Procedural 3D Equipment --- */}
        
        {/* Large 3D Printer Enclosure 1 */}
        <group position={[-2, 0.8, -2]}>
          {/* Base */}
          <mesh position={[0, -0.6, 0]} castShadow><boxGeometry args={[1.5, 0.4, 1.5]} /><meshStandardMaterial color="#1e293b" /></mesh>
          {/* Glass Enclosure */}
          <mesh position={[0, 0.2, 0]} castShadow><boxGeometry args={[1.4, 1.2, 1.4]} /><meshPhysicalMaterial transparent opacity={0.3} transmission={0.9} color="#B3CDE0" /></mesh>
          {/* Frame struts */}
          <mesh position={[-0.7, 0.2, -0.7]}><cylinderGeometry args={[0.02, 0.02, 1.2]} /><meshStandardMaterial color="#000000" /></mesh>
          <mesh position={[0.7, 0.2, -0.7]}><cylinderGeometry args={[0.02, 0.02, 1.2]} /><meshStandardMaterial color="#000000" /></mesh>
          <mesh position={[-0.7, 0.2, 0.7]}><cylinderGeometry args={[0.02, 0.02, 1.2]} /><meshStandardMaterial color="#000000" /></mesh>
          <mesh position={[0.7, 0.2, 0.7]}><cylinderGeometry args={[0.02, 0.02, 1.2]} /><meshStandardMaterial color="#000000" /></mesh>
          {/* Print Bed */}
          <mesh position={[0, -0.3, 0]}><boxGeometry args={[1, 0.05, 1]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
          {/* Object being printed */}
          <mesh position={[0, -0.15, 0]}><cylinderGeometry args={[0.2, 0.2, 0.3]} /><meshStandardMaterial color="#ec4899" /></mesh>
        </group>

        {/* Medium 3D Printer */}
        <group position={[2, 0.8, -2]}>
          <mesh position={[0, -0.6, 0]} castShadow><boxGeometry args={[1, 0.4, 1]} /><meshStandardMaterial color="#334155" /></mesh>
          <mesh position={[0, 0.1, 0]} castShadow><boxGeometry args={[0.9, 1.0, 0.9]} /><meshPhysicalMaterial transparent opacity={0.3} transmission={0.9} color="#B3CDE0" /></mesh>
          <mesh position={[0, -0.3, 0]}><boxGeometry args={[0.7, 0.05, 0.7]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
          <mesh position={[0, -0.2, 0]}><boxGeometry args={[0.2, 0.2, 0.2]} /><meshStandardMaterial color="#3b82f6" /></mesh>
        </group>

        {/* Fabrication / Material Station */}
        <group position={[0, 0.5, 3]}>
          <mesh position={[0, -0.4, 0]} castShadow><boxGeometry args={[4, 0.1, 1.5]} /><meshStandardMaterial color="#e2e8f0" /></mesh>
          <mesh position={[-1.8, -0.8, -0.6]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#64748B" /></mesh>
          <mesh position={[1.8, -0.8, -0.6]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#64748B" /></mesh>
          <mesh position={[-1.8, -0.8, 0.6]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#64748B" /></mesh>
          <mesh position={[1.8, -0.8, 0.6]} castShadow><boxGeometry args={[0.1, 0.8, 0.1]} /><meshStandardMaterial color="#64748B" /></mesh>
          
          {/* Material Spools */}
          <mesh position={[-1, -0.2, 0]} castShadow rotation={[0, 0, Math.PI/2]}><cylinderGeometry args={[0.15, 0.15, 0.2]} /><meshStandardMaterial color="#ef4444" /></mesh>
          <mesh position={[-0.7, -0.2, 0]} castShadow rotation={[0, 0, Math.PI/2]}><cylinderGeometry args={[0.15, 0.15, 0.2]} /><meshStandardMaterial color="#22c55e" /></mesh>
          <mesh position={[-0.4, -0.2, 0]} castShadow rotation={[0, 0, Math.PI/2]}><cylinderGeometry args={[0.15, 0.15, 0.2]} /><meshStandardMaterial color="#eab308" /></mesh>

          {/* Design Workstation */}
          <group position={[1, 0, 0]}>
            <mesh position={[0, -0.2, 0]} castShadow><boxGeometry args={[0.6, 0.05, 0.4]} /><meshStandardMaterial color="#94a3b8" /></mesh>
            <mesh position={[0, 0.05, -0.1]} castShadow rotation={[0.3, 0, 0]}><boxGeometry args={[0.6, 0.4, 0.02]} /><meshStandardMaterial color="#0f172a" /></mesh>
            <mesh position={[0, 0.05, -0.09]} rotation={[0.3, 0, 0]}><planeGeometry args={[0.55, 0.35]} /><meshBasicMaterial color="#38bdf8" /></mesh>
          </group>
        </group>

      </group>
    </group>
  );
}
