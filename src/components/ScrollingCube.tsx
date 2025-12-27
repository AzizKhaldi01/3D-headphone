"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useControls } from "leva";
import { Environment } from "@react-three/drei";
import { Model } from "./SceneHeadPhone";
import { useEffect, useRef, useState } from "react";

function ResponsiveMainModel() {
  const [currentScale, setCurrentScale] = useState(0.05);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentScale(0.035);
      } else {
        setCurrentScale(0.05);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Model
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={currentScale}
    />
  );
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeadphoneScene() {
  const containerRef = useRef(null);


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
        scrub: 3,
        markers: true,
      },
    });

    // Text 1 - Fade in and out
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top",
        end: "+=40%",
        scrub: 1,
      }
    })
      .to("#scroll-text-1", { opacity: 1, y: -30, scale: 1.1, duration: 0.3, ease: "power2.out" })
      .to("#scroll-text-1", { opacity: 0, y: -60, scale: 0.9, duration: 0.3, ease: "power2.in" }, "+=0.4");

    // Text 2
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=20%",
        end: "+=40%",
        scrub: 1,
      }
    })
      .to("#scroll-text-2", { opacity: 1, y: -30, scale: 1.1, duration: 0.3, ease: "power2.out" })
      .to("#scroll-text-2", { opacity: 0, y: -60, scale: 0.9, duration: 0.3, ease: "power2.in" }, "+=0.4");

    // Text 3
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=40%",
        end: "+=40%",
        scrub: 1,
      }
    })
      .to("#scroll-text-3", { opacity: 1, x: 20, scale: 1.1, duration: 0.3, ease: "power2.out" })
      .to("#scroll-text-3", { opacity: 0, x: 40, scale: 0.9, duration: 0.3, ease: "power2.in" }, "+=0.4");

    // Text 4
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=60%",
        end: "+=40%",
        scrub: 1,
      }
    })
      .to("#scroll-text-4", { opacity: 1, x: -20, scale: 1.1, duration: 0.3, ease: "power2.out" })
      .to("#scroll-text-4", { opacity: 0, x: -40, scale: 0.9, duration: 0.3, ease: "power2.in" }, "+=0.4");

    // Text 5
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=80%",
        end: "+=40%",
        scrub: 1,
      }
    })
      .to("#scroll-text-5", { opacity: 1, y: 30, scale: 1.1, duration: 0.3, ease: "power2.out" })
      .to("#scroll-text-5", { opacity: 0, y: 60, scale: 0.9, duration: 0.3, ease: "power2.in" }, "+=0.4");

    // Text 6
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=100%",
        end: "+=40%",
        scrub: 1,
      }
    })
      .to("#scroll-text-6", { opacity: 1, y: -30, scale: 1.1, duration: 0.3, ease: "power2.out" })
      .to("#scroll-text-6", { opacity: 0, y: -60, scale: 0.9, duration: 0.3, ease: "power2.in" }, "+=0.4");

    // Text 7
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=120%",
        end: "+=40%",
        scrub: 1,
      }
    })
      .to("#scroll-text-7", { opacity: 1, scale: 1.2, duration: 0.3, ease: "power3.out" })
      .to("#scroll-text-7", { opacity: 0, scale: 0.8, duration: 0.3, ease: "power3.in" }, "+=0.4");

    // Text 8
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=140%",
        end: "+=40%",
        scrub: 1,
      }
    })
      .to("#scroll-text-8", { opacity: 1, y: -50, duration: 0.3, ease: "expo.out" })
      .to("#scroll-text-8", { opacity: 0, y: -100, duration: 0.3, ease: "expo.in" }, "+=0.4");

    // Section animations for content
    // Sound Section
    gsap.fromTo("#sound-section .section-header",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#sound-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo("#sound-section .feature-item",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#sound-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Comfort Section
    gsap.fromTo("#comfort-section .section-header",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#comfort-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo("#comfort-section .content-item",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#comfort-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Features Section
    gsap.fromTo("#features-section .section-header",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#features-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo("#features-section .feature-row",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#features-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Connectivity Section
    gsap.fromTo("#connectivity-section .section-header",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#connectivity-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo("#connectivity-section .feature-row",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#connectivity-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Sustainability Section
    gsap.fromTo("#sustainability-section .section-header",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#sustainability-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo("#sustainability-section .feature-item",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#sustainability-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo("#sustainability-section .stats-item",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#sustainability-section",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">

      {/* Model Section - This will be pinned */}
      <section id="model-section" className="h-[200vh] relative bg-[#E5E5E5]">
        <div className="fixed top-0 left-0 w-full h-screen">
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
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

            <ResponsiveMainModel />
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

          {/* Animated Text Overlays */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Text 1 - Appears first */}
            <div
              id="scroll-text-1"
              className="absolute top-[20%] left-6 md:left-12 opacity-0"
            >
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Premium Audio
              </div>
              <h3 className="text-4xl md:text-7xl font-light text-black">
                Crafted for<br />Perfection
              </h3>
            </div>

            {/* Text 2 - Appears second */}
            <div
              id="scroll-text-2"
              className="absolute top-[35%] right-6 md:right-12 opacity-0 text-right"
            >
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Engineered Excellence
              </div>
              <h3 className="text-3xl md:text-6xl font-light text-black">
                Every Detail<br />Matters
              </h3>
            </div>

            {/* Text 3 - Appears third */}
            <div
              id="scroll-text-3"
              className="absolute bottom-[20%] left-6 md:left-12 opacity-0"
            >
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Innovation
              </div>
              <h3 className="text-4xl md:text-7xl font-light text-black">
                Sound<br />Redefined
              </h3>
            </div>

            {/* Text 4 */}
            <div
              id="scroll-text-4"
              className="absolute bottom-[35%] right-6 md:right-12 opacity-0 text-right"
            >
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Experience
              </div>
              <h3 className="text-4xl md:text-6xl font-light text-black">
                Immersive<br />Audio
              </h3>
            </div>

            {/* Text 5 - New */}
            <div
              id="scroll-text-5"
              className="absolute top-[50%] left-6 md:left-12 opacity-0"
            >
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Spatial Sound
              </div>
              <h3 className="text-4xl md:text-7xl font-light text-black">
                360°<br />Awareness
              </h3>
            </div>

            {/* Text 6 - New */}
            <div
              id="scroll-text-6"
              className="absolute top-[20%] right-6 md:right-12 opacity-0 text-right"
            >
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Design
              </div>
              <h3 className="text-4xl md:text-7xl font-light text-black">
                Purely<br />Iconic
              </h3>
            </div>

            {/* Text 7 - New */}
            <div
              id="scroll-text-7"
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none"
            >
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Power
              </div>
              <h3 className="text-5xl md:text-9xl font-light text-black text-center">
                40 HOURS<br />NON-STOP
              </h3>
            </div>

            {/* Text 8 - New */}
            <div
              id="scroll-text-8"
              className="absolute bottom-[10%] left-0 w-full flex flex-col items-center opacity-0"
            >
              <div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Sustainability
              </div>
              <h3 className="text-3xl md:text-5xl font-light text-black text-center">
                Carbon Neutral. Future Focused.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections - These will appear after the animation */}

    </div>
  );
}
