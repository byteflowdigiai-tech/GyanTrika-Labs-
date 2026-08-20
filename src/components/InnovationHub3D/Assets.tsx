import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Box, Cylinder } from '@react-three/drei';

export function DetailedWorkstation({ position, rotation = [0, 0, 0] }: any) {
  return (
    <group position={position} rotation={rotation}>
      {/* Desk */}
      <mesh position={[0, -0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.05, 1]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.7} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.9, -0.7, -0.4]} castShadow><boxGeometry args={[0.05, 0.6, 0.05]} /><meshStandardMaterial color="#334155" /></mesh>
      <mesh position={[0.9, -0.7, -0.4]} castShadow><boxGeometry args={[0.05, 0.6, 0.05]} /><meshStandardMaterial color="#334155" /></mesh>
      <mesh position={[-0.9, -0.7, 0.4]} castShadow><boxGeometry args={[0.05, 0.6, 0.05]} /><meshStandardMaterial color="#334155" /></mesh>
      <mesh position={[0.9, -0.7, 0.4]} castShadow><boxGeometry args={[0.05, 0.6, 0.05]} /><meshStandardMaterial color="#334155" /></mesh>
      
      {/* Dual Monitors */}
      <group position={[-0.4, -0.1, -0.2]} rotation={[0, 0.2, 0]}>
        <mesh position={[0, 0, 0]} castShadow><boxGeometry args={[0.8, 0.5, 0.05]} /><meshStandardMaterial color="#1e293b" /></mesh>
        <mesh position={[0, 0, 0.03]}><planeGeometry args={[0.75, 0.45]} /><meshBasicMaterial color="#3b82f6" /></mesh>
        <mesh position={[0, -0.25, -0.05]}><cylinderGeometry args={[0.05, 0.05, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
        <mesh position={[0, -0.3, -0.1]}><boxGeometry args={[0.3, 0.02, 0.2]} /><meshStandardMaterial color="#1e293b" /></mesh>
      </group>
      <group position={[0.4, -0.1, -0.2]} rotation={[0, -0.2, 0]}>
        <mesh position={[0, 0, 0]} castShadow><boxGeometry args={[0.8, 0.5, 0.05]} /><meshStandardMaterial color="#1e293b" /></mesh>
        <mesh position={[0, 0, 0.03]}><planeGeometry args={[0.75, 0.45]} /><meshBasicMaterial color="#22c55e" /></mesh>
        <mesh position={[0, -0.25, -0.05]}><cylinderGeometry args={[0.05, 0.05, 0.1]} /><meshStandardMaterial color="#1e293b" /></mesh>
        <mesh position={[0, -0.3, -0.1]}><boxGeometry args={[0.3, 0.02, 0.2]} /><meshStandardMaterial color="#1e293b" /></mesh>
      </group>

      {/* Keyboard & Mouse */}
      <mesh position={[0, -0.37, 0.2]} castShadow><boxGeometry args={[0.5, 0.02, 0.15]} /><meshStandardMaterial color="#334155" /></mesh>
      <mesh position={[0.4, -0.37, 0.2]} castShadow><boxGeometry args={[0.08, 0.03, 0.12]} /><meshStandardMaterial color="#334155" /></mesh>

      {/* PC Tower */}
      <mesh position={[0.8, -0.7, 0]} castShadow><boxGeometry args={[0.3, 0.6, 0.8]} /><meshStandardMaterial color="#0f172a" /></mesh>
    </group>
  );
}

export function DetailedRobotArm({ position, rotation = [0, 0, 0] }: any) {
  return (
    <group position={position} rotation={rotation}>
      {/* Base */}
      <mesh position={[0, 0, 0]} castShadow><cylinderGeometry args={[0.4, 0.5, 0.2]} /><meshStandardMaterial color="#334155" metalness={0.6} /></mesh>
      <mesh position={[0, 0.2, 0]} castShadow><cylinderGeometry args={[0.3, 0.4, 0.3]} /><meshStandardMaterial color="#f59e0b" roughness={0.3} /></mesh>
      
      {/* First Joint */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI/4]} castShadow><cylinderGeometry args={[0.2, 0.2, 1.2]} /><meshStandardMaterial color="#f59e0b" roughness={0.3} /></mesh>
      <mesh position={[0.4, 0.9, 0]} rotation={[Math.PI/2, 0, 0]} castShadow><cylinderGeometry args={[0.25, 0.25, 0.3]} /><meshStandardMaterial color="#1e293b" /></mesh>
      
      {/* Second Joint */}
      <mesh position={[0.8, 1.2, 0]} rotation={[0, 0, -Math.PI/6]} castShadow><cylinderGeometry args={[0.15, 0.15, 1]} /><meshStandardMaterial color="#f59e0b" roughness={0.3} /></mesh>
      
      {/* End Effector */}
      <mesh position={[1.2, 1.0, 0]} castShadow><boxGeometry args={[0.3, 0.3, 0.3]} /><meshStandardMaterial color="#1e293b" /></mesh>
      <mesh position={[1.3, 0.8, 0.1]} castShadow><boxGeometry args={[0.05, 0.3, 0.05]} /><meshStandardMaterial color="#94a3b8" metalness={0.8} /></mesh>
      <mesh position={[1.3, 0.8, -0.1]} castShadow><boxGeometry args={[0.05, 0.3, 0.05]} /><meshStandardMaterial color="#94a3b8" metalness={0.8} /></mesh>
    </group>
  );
}

export function StorageRack({ position, rotation = [0, 0, 0] }: any) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.5, 0]} castShadow><boxGeometry args={[2, 2, 0.8]} /><meshStandardMaterial color="#94a3b8" metalness={0.4} /></mesh>
      {/* Shelves */}
      {[0.8, 0.3, -0.2, -0.7].map((y, i) => (
        <group key={i} position={[0, y, 0]}>
          <mesh castShadow><boxGeometry args={[1.9, 0.05, 0.7]} /><meshStandardMaterial color="#f1f5f9" /></mesh>
          {/* Bins on shelf */}
          <mesh position={[-0.6, 0.15, 0]} castShadow><boxGeometry args={[0.4, 0.25, 0.6]} /><meshStandardMaterial color={["#ef4444", "#3b82f6", "#eab308", "#22c55e"][i]} /></mesh>
          <mesh position={[0, 0.15, 0]} castShadow><boxGeometry args={[0.4, 0.25, 0.6]} /><meshStandardMaterial color={["#3b82f6", "#eab308", "#22c55e", "#ef4444"][i]} /></mesh>
          <mesh position={[0.6, 0.15, 0]} castShadow><boxGeometry args={[0.4, 0.25, 0.6]} /><meshStandardMaterial color={["#eab308", "#22c55e", "#ef4444", "#3b82f6"][i]} /></mesh>
        </group>
      ))}
    </group>
  );
}

export function Student({ position, rotation = [0, 0, 0] }: any) {
  return (
    <group position={position} rotation={rotation}>
      {/* Body */}
      <mesh position={[0, 0.4, 0]} castShadow><cylinderGeometry args={[0.15, 0.15, 0.5]} /><meshStandardMaterial color="#2563eb" /></mesh>
      {/* Head */}
      <mesh position={[0, 0.8, 0]} castShadow><sphereGeometry args={[0.12]} /><meshStandardMaterial color="#fcd34d" /></mesh>
      {/* Legs */}
      <mesh position={[-0.07, 0.1, 0]} castShadow><cylinderGeometry args={[0.06, 0.06, 0.3]} /><meshStandardMaterial color="#1e293b" /></mesh>
      <mesh position={[0.07, 0.1, 0]} castShadow><cylinderGeometry args={[0.06, 0.06, 0.3]} /><meshStandardMaterial color="#1e293b" /></mesh>
      {/* Arms */}
      <mesh position={[-0.2, 0.4, 0.1]} rotation={[-Math.PI/4, 0, 0]} castShadow><cylinderGeometry args={[0.05, 0.05, 0.3]} /><meshStandardMaterial color="#2563eb" /></mesh>
      <mesh position={[0.2, 0.4, 0.1]} rotation={[-Math.PI/4, 0, 0]} castShadow><cylinderGeometry args={[0.05, 0.05, 0.3]} /><meshStandardMaterial color="#2563eb" /></mesh>
    </group>
  );
}

export function Chair({ position, rotation = [0, 0, 0] }: any) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, -0.6, 0]} castShadow><cylinderGeometry args={[0.2, 0.2, 0.05]} /><meshStandardMaterial color="#1e293b" /></mesh>
      <mesh position={[0, -0.4, 0]} castShadow><cylinderGeometry args={[0.05, 0.05, 0.4]} /><meshStandardMaterial color="#94a3b8" /></mesh>
      <mesh position={[0, -0.2, 0]} castShadow><boxGeometry args={[0.4, 0.05, 0.4]} /><meshStandardMaterial color="#0f172a" /></mesh>
      <mesh position={[0, 0.1, -0.2]} castShadow><boxGeometry args={[0.4, 0.4, 0.05]} /><meshStandardMaterial color="#0f172a" /></mesh>
    </group>
  );
}
