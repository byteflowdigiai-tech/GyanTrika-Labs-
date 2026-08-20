import React, { useMemo, useState, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

function InteractiveLabCard({ 
  position, 
  size, 
  href, 
  uvOffset, 
  uvScale,
  texture 
}: any) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const groupRef = useRef<THREE.Group>(null);

  // Clone texture for this specific block to map its specific section of the image
  const localTexture = useMemo(() => {
    const tex = texture.clone();
    tex.repeat.set(uvScale[0], uvScale[1]);
    tex.offset.set(uvOffset[0], uvOffset[1]);
    tex.needsUpdate = true;
    return tex;
  }, [texture, uvScale, uvOffset]);

  const materials = useMemo(() => {
    // Make the physical 3D box invisible so we only see the PNG texture
    const invisibleMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
    
    // The front material shows the image, and uses the PNG's transparency!
    const frontMaterial = new THREE.MeshBasicMaterial({ 
      map: localTexture, 
      transparent: true,
      alphaTest: 0.1 // Ensures crisp edges on the transparent PNG
    });
    
    return [invisibleMaterial, invisibleMaterial, invisibleMaterial, invisibleMaterial, frontMaterial, invisibleMaterial];
  }, [localTexture]);

  useFrame(() => {
    if (groupRef.current) {
      // Float towards the camera (Z axis) when hovered
      const targetZ = hovered ? position[2] + 2.5 : position[2]; 
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.1);
      
      // Add a slight dynamic tilt when hovered
      const targetRotX = hovered ? -0.05 : 0;
      const targetRotY = hovered ? (position[0] > 0 ? -0.05 : 0.05) : 0;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.1);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh 
        material={materials}
        castShadow 
        receiveShadow
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
        onClick={(e) => { e.stopPropagation(); navigate(href); }}
      >
        <boxGeometry args={[size[0], size[1], 1]} />
      </mesh>
    </group>
  );
}

export default function InnovationHubImage() {
  const texture = useTexture('/images/innovation_hub_isometric.png');
  texture.colorSpace = THREE.SRGBColorSpace;

  // The total size of the original board was 32x18.
  // We shatter it into 5 distinct 3D blocks (puzzle pieces).
  
  return (
    <group position={[0, 0, 0]}>
      {/* Top Left: AI & Robotics */}
      <InteractiveLabCard 
        position={[-8, 4.5, 0]} 
        size={[16, 9]} 
        uvOffset={[0, 0.5]} 
        uvScale={[0.5, 0.5]} 
        href="/technology-lab-setup/ai-robotics"
        texture={texture}
      />
      
      {/* Top Right: Astronomy */}
      <InteractiveLabCard 
        position={[8, 4.5, 0]} 
        size={[16, 9]} 
        uvOffset={[0.5, 0.5]} 
        uvScale={[0.5, 0.5]} 
        href="/technology-lab-setup/astronomy"
        texture={texture}
      />
      
      {/* Bottom Left: Embedded */}
      <InteractiveLabCard 
        position={[-10.666, -4.5, 0]} 
        size={[10.666, 9]} 
        uvOffset={[0, 0]} 
        uvScale={[0.3333, 0.5]} 
        href="/technology-lab-setup/embedded-electronics"
        texture={texture}
      />
      
      {/* Bottom Center: STEM */}
      <InteractiveLabCard 
        position={[0, -4.5, 0]} 
        size={[10.666, 9]} 
        uvOffset={[0.3333, 0]} 
        uvScale={[0.3333, 0.5]} 
        href="/technology-lab-setup/stem-tinkering"
        texture={texture}
      />
      
      {/* Bottom Right: Composite */}
      <InteractiveLabCard 
        position={[10.666, -4.5, 0]} 
        size={[10.666, 9]} 
        uvOffset={[0.6666, 0]} 
        uvScale={[0.3333, 0.5]} 
        href="/technology-lab-setup/composite-skills"
        texture={texture}
      />
    </group>
  );
}
