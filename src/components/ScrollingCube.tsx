"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useControls } from "leva";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./SceneHeadPhone";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeadphoneScene() {
  const containerRef = useRef(null);
  const { bgColor1, bgColor2, bgColor3 } = useControls("Background", {
    bgColor1: "#000000",
    bgColor2: "#1a1a1a",
    bgColor3: "#2a2a2a",
  });

  const ambientLightControls = useControls("Ambient Light", {
    intensity: { value: 8.0, min: 0, max: 10, step: 0.1 },
  });

  const directionalLightControls = useControls("Directional Light", {
    intensity: { value: 3.0, min: 0, max: 5, step: 0.1 },
    position: { value: [5, 8, 3], step: 0.1 },
  });

  const rimLightControls = useControls("Rim Light", {
    intensity: { value: 1.5, min: 0, max: 2, step: 0.1 },
    position: { value: [-8, 4, -4], step: 0.1 },
  });

  const fillLightControls = useControls("Fill Light", {
    intensity: { value: 0.8, min: 0, max: 2, step: 0.1 },
    position: { value: [-3, 2, -2], step: 0.1 },
  });

  const groundLightControls = useControls("Ground Light", {
    intensity: { value: 1.2, min: 0, max: 2, step: 0.1 },
    position: { value: [0, -6, 0], step: 0.1 },
  });

  const spotlightControls = useControls("Accent Spotlight", {
    intensity: { value: 2.0, min: 0, max: 5, step: 0.1 },
    position: { value: [4, 5, -3], step: 0.1 },
    color: "#ff7b00",
  });

  const neonLightControls = useControls("Neon Accent", {
    intensity: { value: 1.5, min: 0, max: 3, step: 0.1 },
    position: { value: [-4, 3, 4], step: 0.1 },
    color: "#00ffff",
  });

  const sunControls = useControls("Sun Effect", {
    position: { value: [10, 8, 5], step: 0.1 },
    intensity: { value: 3.0, min: 0, max: 10, step: 0.1 },
    size: { value: 2.0, min: 0.1, max: 5, step: 0.1 },
    color: "#FDB813",
    glowColor: "#FF8C42",
    glowIntensity: { value: 1.5, min: 0, max: 3, step: 0.1 },
  });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
        scrub: 1.5,
        markers: true,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
    
      {/* Model Section - This will be pinned */}
      <section id="model-section" className="h-[200vh] relative bg-[#E5E5E5]">
        <div className="fixed top-0 left-0 w-full h-screen">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            {/* Ambient light for base illumination */}
            <ambientLight 
              intensity={ambientLightControls.intensity} 
              color="#ffffff" 
            />
            
            {/* Primary key light */}
            <directionalLight 
              position={directionalLightControls.position} 
              intensity={directionalLightControls.intensity} 
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-bias={-0.0001}
            >
              <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
            </directionalLight>
            
            {/* Rim light for highlights */}
            <spotLight
              position={rimLightControls.position}
              intensity={rimLightControls.intensity}
              angle={0.5}
              penumbra={0.8}
              color="#b6e3ff"
              castShadow
            />
            
            {/* Fill light for softer shadows */}
            <pointLight 
              position={fillLightControls.position} 
              intensity={fillLightControls.intensity} 
              color="#ffd4b6" 
            />

            {/* Ground fill light */}
            <pointLight 
              position={groundLightControls.position} 
              intensity={groundLightControls.intensity} 
              color="#ffffff" 
            />

            {/* New dramatic spotlight */}
            <spotLight
              position={spotlightControls.position}
              intensity={spotlightControls.intensity}
              color={spotlightControls.color}
              angle={0.4}
              penumbra={0.5}
              castShadow
            />

            {/* Neon accent light */}
            <pointLight
              position={neonLightControls.position}
              intensity={neonLightControls.intensity}
              color={neonLightControls.color}
              distance={8}
              decay={2}
            />

            {/* Sun Effect */}
            <group position={sunControls.position}>
              {/* Sun sphere */}
              <mesh>
                <sphereGeometry args={[sunControls.size, 32, 32]} />
                <meshBasicMaterial color={sunControls.color} />
              </mesh>
              
              {/* Sun glow */}
              <pointLight 
                color={sunControls.glowColor} 
                intensity={sunControls.glowIntensity * 2} 
                distance={20}
                decay={2}
              />
              
              {/* Sun rays */}
              <directionalLight
                color={sunControls.color}
                intensity={sunControls.intensity}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-bias={-0.0001}
              >
                <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
              </directionalLight>
            </group>

            {/* Moving light effect */}
            <pointLight
              position={[
                Math.sin(Date.now() * 0.001) * 3,
                2,
                Math.cos(Date.now() * 0.001) * 3,
              ]}
              intensity={0.8}
              color="#ff00ff"
            />

            <Model
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={0.05}
            />
            {/* <OrbitControls /> */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -2, 0]}
              receiveShadow
            >
              <Environment preset="sunset" />
              <planeGeometry args={[100, 100]} />
              <shadowMaterial opacity={0.3} />
            </mesh>
          </Canvas>
        </div>
      </section>

      {/* Content Sections - These will appear after the animation */}
      <section className="h-screen bg-white flex items-center justify-center"
        >
        <h2 className="text-4xl font-bold text-white opacity-75">
        </h2>
      </section>

      <section className="h-screen bg-white flex items-center justify-center"
        >
        <h2 className="text-4xl font-bold text-white opacity-75">
        </h2>
      </section>
      
      <section className="h-screen bg-white flex items-center justify-center"
        >
        <h2 className="text-4xl font-bold text-white opacity-75">
        </h2>
      </section>
    </div>
  );
}
