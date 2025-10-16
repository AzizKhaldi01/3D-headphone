import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 function Model(props) {
  const { nodes, materials } = useGLTF('/ps502.glb')
  
  // Set depthWrite to false for all materials
  Object.values(materials).forEach(mat => {
    mat.depthWrite = false;
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.196}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials['1011']}
            position={[0, 0, -0.003]}
            renderOrder={1}
          />
          <mesh
            castShadow
            receiveShadow
            renderOrder={1}
            geometry={nodes.defaultMaterial001.geometry}
            material={materials['1001']}
          />
          <mesh
            castShadow
            renderOrder={1}
            receiveShadow
            geometry={nodes.defaultMaterial002.geometry}
            material={materials['1002']}
          />
          <mesh
            castShadow
            receiveShadow
            renderOrder={1}
            geometry={nodes.defaultMaterial003.geometry}
            material={materials['1011']}
          />
          <mesh
            castShadow
            receiveShadow
            renderOrder={1}

            geometry={nodes.defaultMaterial004.geometry}
            material={materials['1001.003']}
          />
          <mesh
            castShadow
            renderOrder={1}

            receiveShadow
            geometry={nodes.defaultMaterial005.geometry}
            material={materials['1001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial006.geometry}
            material={materials['1001.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial008.geometry}
            material={materials['1001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial009.geometry}
            material={materials['1001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial010.geometry}
            material={materials['1011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial011.geometry}
            material={materials['1011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial012.geometry}
            material={materials['1001']}
            position={[0, 0, 0.012]}
          />
        </group>
      </group>
      <group position={[0.123, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.196}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial007.geometry}
            material={materials['1001.002']}
            position={[0, 0, 0.012]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-0.109, 0.066, -0.049]}
        rotation={[-1.661, 0, 0]}
        scale={0.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[0.11, 0.057, -0.049]}
        rotation={[-1.661, 0, 0]}
        scale={0.042}
      />
    </group>
  )
}


useGLTF.preload('/ps502.glb')
export default Model;

