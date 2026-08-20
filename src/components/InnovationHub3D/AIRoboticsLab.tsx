import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LabHotspot from './LabHotspot';
import { Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DetailedWorkstation, DetailedRobotArm, StorageRack, Student, Chair } from './Assets';

export default function AIRoboticsLab({ position }: { position: [number, number, number] }) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<Group>(null);
  const navigate = useNavigate();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly interpolate Y position for subtle elevation
      const targetY = hovered ? 0.3 : 0;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
    }
  });

  return (
    <group 
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
      onClick={(e) => { e.stopPropagation(); navigate('/technology-lab-setup/ai-robotics'); }}
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

        <LabHotspot title="Ai , STEM & Robotics Lab" icon={Bot} href="/technology-lab-setup/ai-robotics" isHovered={hovered} />

        {/* --- Densely Populated Procedural 3D Equipment --- */}
        <group position={[-1, 0, 0]}>
          <DetailedWorkstation position={[-2, 0.8, -1.5]} rotation={[0, Math.PI/4, 0]} />
          <Chair position={[-2, 0.8, -0.7]} rotation={[0, Math.PI/4, 0]} />
          <Student position={[-2, 0.8, -0.7]} rotation={[0, Math.PI/4, 0]} />
          
          <DetailedWorkstation position={[1, 0.8, -2.5]} rotation={[0, -Math.PI/6, 0]} />
          <Chair position={[1, 0.8, -1.7]} rotation={[0, -Math.PI/6, 0]} />
          
          <DetailedRobotArm position={[-2, 0, 1.5]} />
          <DetailedRobotArm position={[1.5, 0, 1]} rotation={[0, Math.PI/3, 0]} />
          
          <StorageRack position={[-4, 0, 1.5]} rotation={[0, Math.PI/2, 0]} />
          
          <Student position={[0, 0, 1]} rotation={[0, Math.PI, 0]} />
        </group>

        {/* Industrial Robot Arm 1 */}
        <group position={[3, 0, 1]}>
          {/* Base */}
          <mesh position={[0, 0.2, 0]} castShadow><cylinderGeometry args={[0.6, 0.8, 0.4]} /><meshStandardMaterial color="#FACC15" metalness={0.5} /></mesh>
          {/* Lower Arm */}
          <mesh position={[0, 1.0, 0]} castShadow rotation={[0, 0, 0.3]}><cylinderGeometry args={[0.2, 0.2, 1.5]} /><meshStandardMaterial color="#FACC15" metalness={0.5} /></mesh>
          {/* Joint */}
          <mesh position={[0.2, 1.7, 0]} castShadow rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.3, 0.3, 0.4]} /><meshStandardMaterial color="#334155" /></mesh>
          {/* Upper Arm */}
          <mesh position={[0.6, 2.2, 0]} castShadow rotation={[0, 0, 1.0]}><cylinderGeometry args={[0.15, 0.15, 1.2]} /><meshStandardMaterial color="#FACC15" metalness={0.5} /></mesh>
          {/* Gripper */}
          <mesh position={[1.2, 2.6, 0]} castShadow><boxGeometry args={[0.3, 0.3, 0.4]} /><meshStandardMaterial color="#334155" /></mesh>
        </group>

        {/* Educational Robot Base */}
        <group position={[-2, 0.3, 2]}>
          <mesh castShadow><cylinderGeometry args={[0.4, 0.4, 0.6]} /><meshStandardMaterial color="#FFFFFF" /></mesh>
          <mesh position={[0, 0.4, 0]} castShadow><sphereGeometry args={[0.3]} /><meshStandardMaterial color="#0C1446" /></mesh>
          <mesh position={[0, 0.4, 0.2]}><sphereGeometry args={[0.1]} /><meshStandardMaterial color="#38BDF8" emissive="#38BDF8" /></mesh>
        </group>

        {/* Technical Display Board */}
        <group position={[7, 1.5, -4.8]}>
          <mesh castShadow><boxGeometry args={[3, 1.5, 0.1]} /><meshStandardMaterial color="#1E293B" /></mesh>
          <mesh position={[0, 0, 0.06]}><boxGeometry args={[2.8, 1.3, 0.01]} /><meshStandardMaterial color="#000000" /></mesh>
          {/* Screen Content Grid */}
          <mesh position={[-0.8, 0, 0.07]}><planeGeometry args={[0.8, 0.8]} /><meshBasicMaterial color="#2B5C92" transparent opacity={0.8} /></mesh>
          <mesh position={[0.2, 0.3, 0.07]}><planeGeometry args={[1.0, 0.4]} /><meshBasicMaterial color="#38BDF8" transparent opacity={0.8} /></mesh>
          <mesh position={[0.2, -0.3, 0.07]}><planeGeometry args={[1.0, 0.4]} /><meshBasicMaterial color="#1D4ED8" transparent opacity={0.8} /></mesh>
        </group>

      </group>
    </group>
  );
}
