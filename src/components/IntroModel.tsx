'use client'
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Mesh, Material } from 'three';
import { useRef, useEffect } from 'react';

interface ModelNodes {
  [key: string]: Mesh;
}

function HeadphoneModel(props: any) {
  const { nodes, materials, animations } = useGLTF('/headphone3D.glb') as unknown as {
    nodes: ModelNodes;
    materials: { [key: string]: Material };
    animations: any[];
  };

  const group = useRef<any>(null);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    let autoRotate = true;
    let animationId: number;
    let startTime = Date.now();
    const rotationDuration = 3000; // 3 seconds of auto-rotation

    const animate = () => {
      if (group.current && autoRotate) {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / rotationDuration, 1);

        // Ease out function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);

        // Rotate with decreasing speed
        const rotationSpeed = (1 - easeOut) * 0.01;
        group.current.rotation.y += rotationSpeed;

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        } else {
          autoRotate = false;
        }
      }
    };

    // Start auto-rotation
    animationId = requestAnimationFrame(animate);

    // After auto-rotation stops, enable mouse control
    const timeout = setTimeout(() => {
      const handleMouseMove = (event: MouseEvent) => {
        if (group.current) {
          // Reduced the rotation factor for subtler movement
          const rotation = (event.clientX / window.innerWidth - 0.5) * Math.PI * 0.3;
          group.current.rotation.y = rotation;
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, rotationDuration);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <group ref={group} {...props}>
      <primitive object={nodes.Scene} />
    </group>
  );
}

export function IntroScene() {
  return (
    <div className="w-full h-screen  z-30 absolute top-0 left-0">
      <Canvas className="w-full h-screen" camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={8} />
        <directionalLight position={[5, 8, 3]} intensity={6} castShadow />
        <spotLight
          position={[-8, 4, -4]}
          intensity={0.8}
          angle={0.5}
          penumbra={0.8}
          color="#b6e3ff"
          castShadow
        />
        <HeadphoneModel
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={0.045}
        />
      </Canvas>
    </div>
  );
} 