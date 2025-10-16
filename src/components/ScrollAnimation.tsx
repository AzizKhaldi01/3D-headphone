"use client"
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef, useLayoutEffect } from 'react'
import { useScroll } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Mesh } from 'three'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function Model(props: any) {
  const meshRef = useRef<Mesh>(null)
  const tl = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    })

    tl.current
      .to(meshRef.current.position, {
        x: 2,
        y: 1,
        z: 3,
        duration: 2,
      })
      .to(meshRef.current.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 1.5,
        z: Math.PI * 0.5,
        duration: 2,
      })
      .to(meshRef.current.position, {
        x: -2,
        y: -1,
        z: 1,
        duration: 2,
      })
      .to(meshRef.current.rotation, {
        x: Math.PI * 4,
        y: Math.PI * 3,
        z: Math.PI,
        duration: 2,
      })
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.001
    meshRef.current.rotation.y += 0.001
  })

  return (
    <mesh {...props} ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial 
        color="#ff6b6b"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  )
}

export default function ScrollAnimation() {
  return (
    <div id="scroll-container" style={{ height: '400vh' }}>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100vh',
        background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)'
      }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1}
          />
          <Model position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  )
} 