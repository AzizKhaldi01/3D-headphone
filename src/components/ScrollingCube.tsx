"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useControls } from "leva";
import { Environment } from "@react-three/drei";
import { Model } from "./SceneHeadPhone";
import { useEffect, useRef } from "react";

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
        scrub: 1.5,
        markers: true,
      },
    });

    // Animate text overlays
    // Text 1 - Fade in and out
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top",
        end: "+=50%",
        scrub: 1,
      }
    })
      .to("#scroll-text-1", {
        opacity: 1,
        y: -20,
        duration: 0.3,
      })
      .to("#scroll-text-1", {
        opacity: 0,
        y: -40,
        duration: 0.3,
      }, "+=0.4");

    // Text 2 - Fade in and out
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=25%",
        end: "+=50%",
        scrub: 1,
      }
    })
      .to("#scroll-text-2", {
        opacity: 1,
        y: -20,
        duration: 0.3,
      })
      .to("#scroll-text-2", {
        opacity: 0,
        y: -40,
        duration: 0.3,
      }, "+=0.4");

    // Text 3 - Fade in and out
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=50%",
        end: "+=50%",
        scrub: 1,
      }
    })
      .to("#scroll-text-3", {
        opacity: 1,
        y: 20,
        duration: 0.3,
      })
      .to("#scroll-text-3", {
        opacity: 0,
        y: 40,
        duration: 0.3,
      }, "+=0.4");

    // Text 4 - Fade in and out
    gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top top+=75%",
        end: "+=50%",
        scrub: 1,
      }
    })
      .to("#scroll-text-4", {
        opacity: 1,
        y: 20,
        duration: 0.3,
      })
      .to("#scroll-text-4", {
        opacity: 0,
        y: 40,
        duration: 0.3,
      }, "+=0.4");

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

          {/* Animated Text Overlays */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Text 1 - Appears first */}
            <div
              id="scroll-text-1"
              className="absolute top-1/4 left-12 opacity-0"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Premium Audio
              </div>
              <h3 className="text-5xl md:text-7xl font-light text-black">
                Crafted for<br />Perfection
              </h3>
            </div>

            {/* Text 2 - Appears second */}
            <div
              id="scroll-text-2"
              className="absolute top-1/3 right-12 opacity-0 text-right"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Engineered Excellence
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-6xl font-light text-black">
                Every Detail<br />Matters
              </h3>
            </div>

            {/* Text 3 - Appears third */}
            <div
              id="scroll-text-3"
              className="absolute bottom-1/4 left-12 opacity-0"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Innovation
              </div>
              <h3 className="text-5xl md:text-7xl font-light text-black">
                Sound<br />Redefined
              </h3>
            </div>

            {/* Text 4 - Appears fourth */}
            <div
              id="scroll-text-4"
              className="absolute bottom-1/3 right-12 opacity-0 text-right"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-2">
                Experience
              </div>
              <h3 className="text-4xl md:text-6xl font-light text-black">
                Immersive<br />Audio
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections - These will appear after the animation */}

      {/* Section 1: Sound Quality */}
      <section
        id="sound-section"
        className="min-h-screen relative bg-black text-white flex items-center justify-center"
      >
        <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-t from-[#e5e5e5] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 md:mb-20 section-header">
              <div className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 mb-4 md:mb-6">
                Audio Excellence
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-light mb-6 md:mb-8 leading-tight">
                Immersive<br />Sound Quality
              </h2>
              <div className="w-16 md:w-24 h-px bg-white/20"></div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {/* Feature 1 */}
              <div className="space-y-4 md:space-y-6 feature-item">
                <div className="text-5xl md:text-7xl font-light text-white/10">01</div>
                <h3 className="text-xl md:text-2xl font-light tracking-wide">Hi-Resolution Audio</h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  Premium 40mm neodymium drivers deliver exceptional clarity across the entire frequency spectrum, from deep bass to crystalline highs.
                </p>
                <div className="pt-2 md:pt-4 space-y-2 text-xs md:text-sm text-gray-500">
                  <div>Frequency Response: 20Hz - 40kHz</div>
                  <div>Impedance: 32 Ohms</div>
                  <div>Sensitivity: 98dB</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4 md:space-y-6 feature-item">
                <div className="text-5xl md:text-7xl font-light text-white/10">02</div>
                <h3 className="text-xl md:text-2xl font-light tracking-wide">Active Noise Cancellation</h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  Advanced hybrid ANC technology with 8 microphones analyzes and blocks ambient noise in real-time for pure, uninterrupted listening.
                </p>
                <div className="pt-2 md:pt-4 space-y-2 text-xs md:text-sm text-gray-500">
                  <div>Noise Reduction: Up to 35dB</div>
                  <div>Transparency Mode: Adaptive</div>
                  <div>Wind Noise Reduction: Active</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4 md:space-y-6 feature-item">
                <div className="text-5xl md:text-7xl font-light text-white/10">03</div>
                <h3 className="text-xl md:text-2xl font-light tracking-wide">Spatial Audio</h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  Dynamic head tracking and computational audio create a three-dimensional soundstage that places you at the center of your music.
                </p>
                <div className="pt-2 md:pt-4 space-y-2 text-xs md:text-sm text-gray-500">
                  <div>3D Audio Processing</div>
                  <div>Head Tracking: Gyroscope</div>
                  <div>Dolby Atmos Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Comfort & Design */}
      <section
        id="comfort-section"
        className="min-h-screen relative bg-white text-black flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20 section-header">
              <div className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-6">
                Engineered Comfort
              </div>
              <h2 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
                Premium<br />Materials
              </h2>
              <div className="w-24 h-px bg-black/20"></div>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-20">
              {/* Left Column */}
              <div className="space-y-16 content-item">
                <div>
                  <h3 className="text-3xl font-light mb-6 tracking-wide">Memory Foam Cushions</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    Plush memory foam ear cups wrapped in premium protein leather conform perfectly to your unique ear shape, providing exceptional comfort during extended listening sessions.
                  </p>
                  <div className="space-y-3 text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <span>Breathable protein leather</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <span>Pressure-relieving ergonomic design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <span>Temperature-regulating materials</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-light mb-6 tracking-wide">Precision Engineering</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Every component is meticulously crafted from premium materials. The aerospace-grade aluminum frame ensures durability while maintaining an incredibly lightweight profile.
                  </p>
                </div>
              </div>

              {/* Right Column - Specs */}
              <div className="space-y-12 content-item">
                <div className="border-t border-black/10 pt-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">Weight</div>
                  <div className="text-5xl font-light">250g</div>
                </div>

                <div className="border-t border-black/10 pt-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">Adjustment Range</div>
                  <div className="text-5xl font-light">10 Levels</div>
                </div>

                <div className="border-t border-black/10 pt-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">Rotation</div>
                  <div className="text-5xl font-light">360°</div>
                </div>

                <div className="border-t border-black/10 pt-8">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">Materials</div>
                  <div className="space-y-2 text-lg">
                    <div>Aluminum Alloy Frame</div>
                    <div className="text-gray-500">Premium Protein Leather</div>
                    <div className="text-gray-500">Memory Foam Padding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Smart Features */}
      <section
        id="features-section"
        className="min-h-screen relative bg-zinc-900 text-white flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20 section-header">
              <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
                Intelligent Technology
              </div>
              <h2 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
                Smart<br />Features
              </h2>
              <div className="w-24 h-px bg-white/20"></div>
            </div>

            {/* Features List */}
            <div className="space-y-12 mb-20">
              <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10 feature-row">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Battery Life</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-4xl font-light mb-4">30 Hours</div>
                  <p className="text-gray-400 text-lg">
                    Extended battery life with ANC enabled. Quick charge provides 5 hours of playback in just 10 minutes.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Connectivity</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-4xl font-light mb-4">Multi-Device Pairing</div>
                  <p className="text-gray-400 text-lg">
                    Seamlessly connect to two devices simultaneously. Bluetooth 5.3 with aptX HD codec support for superior wireless audio quality.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Voice Clarity</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-4xl font-light mb-4">AI-Enhanced Calls</div>
                  <p className="text-gray-400 text-lg">
                    Six beamforming microphones with AI-powered noise suppression ensure crystal-clear voice transmission in any environment.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Controls</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-4xl font-light mb-4">Touch Interface</div>
                  <p className="text-gray-400 text-lg">
                    Intuitive capacitive touch controls on both ear cups. Customizable gestures for play, pause, volume, and voice assistant activation.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mt-24">
              <h3 className="text-2xl font-light mb-12 tracking-wide">Technical Specifications</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Bluetooth</div>
                  <div className="text-2xl font-light">5.3 + aptX HD</div>
                </div>
                <div className="space-y-4">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Charging</div>
                  <div className="text-2xl font-light">USB-C Fast Charge</div>
                </div>
                <div className="space-y-4">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Range</div>
                  <div className="text-2xl font-light">10 meters / 33 feet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Build Quality */}


      {/* Section 5: Connectivity */}
      <section
        id="connectivity-section"
        className="min-h-screen relative bg-black text-white flex items-center justify-center animate-in fade-in-up"
      >
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20">
              <div className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
                Seamless Connection
              </div>
              <h2 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
                Universal<br />Compatibility
              </h2>
              <div className="w-24 h-px bg-white/20"></div>
            </div>

            {/* Features List */}
            <div className="space-y-12">
              <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10 feature-row">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Wireless</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-4xl font-light mb-4">Bluetooth 5.3</div>
                  <p className="text-gray-400 text-lg">
                    Latest Bluetooth technology ensures stable connection up to 10 meters with minimal latency. Supports aptX HD, AAC, and SBC codecs.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Wired</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-4xl font-light mb-4">3.5mm Audio Jack</div>
                  <p className="text-gray-400 text-lg">
                    Detachable braided cable with gold-plated connectors for lossless audio. Perfect for studio monitoring and critical listening.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Multipoint</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-4xl font-light mb-4">Dual Device Pairing</div>
                  <p className="text-gray-400 text-lg">
                    Seamlessly switch between your laptop and smartphone. Automatic device switching based on audio activity.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-8 feature-row">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-gray-500">Voice Assistant</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-4xl font-light mb-4">Universal Support</div>
                  <p className="text-gray-400 text-lg">
                    Compatible with Siri, Google Assistant, and Alexa. One-touch activation for hands-free control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Sustainability */}
      <section
        id="sustainability-section"
        className="min-h-screen relative bg-white text-black flex items-center justify-center"
      >
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20 section-header">
              <div className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-6">
                Responsible Design
              </div>
              <h2 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
                Sustainable<br />Future
              </h2>
              <div className="w-24 h-px bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-3 gap-16">
              <div className="space-y-6 feature-item">
                <div className="text-7xl font-light text-black/10">01</div>
                <h3 className="text-2xl font-light tracking-wide">Recycled Materials</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Packaging made from 100% recycled and recyclable materials. Aluminum components contain 60% recycled content.
                </p>
                <div className="pt-4 text-sm text-gray-500">
                  Carbon neutral shipping
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-7xl font-light text-black/10">02</div>
                <h3 className="text-2xl font-light tracking-wide">Repairable Design</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Modular construction allows easy replacement of ear cushions, cables, and batteries. Spare parts available for 5+ years.
                </p>
                <div className="pt-4 text-sm text-gray-500">
                  Extended product lifespan
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-7xl font-light text-black/10">03</div>
                <h3 className="text-2xl font-light tracking-wide">Energy Efficient</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Low-power Bluetooth chipset and efficient battery management extend usage time while reducing environmental impact.
                </p>
                <div className="pt-4 text-sm text-gray-500">
                  30-hour battery life
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-24 grid md:grid-cols-3 gap-12 pt-12 border-t border-black/10">
              <div className="text-center stats-item">
                <div className="text-5xl font-light mb-2">100%</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Recyclable Packaging</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light mb-2">60%</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Recycled Aluminum</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light mb-2">5+ Years</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">Parts Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
