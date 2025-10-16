import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import gsap from 'gsap'
import { Mesh, Material } from 'three'
import * as THREE from 'three'

interface ModelNodes {
  [key: string]: Mesh;  // This makes all node properties of type Mesh
}

export function Model(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/headphone3D.glb') as unknown as {
    nodes: ModelNodes;
    materials: { [key: string]: Material };
    animations: THREE.AnimationClip[];
  }
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Initialize animations
    Object.values(actions).forEach(action => {
      if (action) {
        action.clampWhenFinished = true;
        action.repetitions = 0;
        action.timeScale = 0; // Set timeScale to 0 to prevent auto-playing
        action.play(); // This puts the animation in a "ready" state
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#model-section",
        start: "top center",
        end: "+=400%",
        scrub: 1.5,
        onUpdate: (self) => {
          // Update animation progress based on scroll position
          Object.values(actions).forEach(action => {
            if (action) {
              // Set time directly proportional to scroll progress
              action.time = action.getClip().duration * self.progress;
            }
          })
        }
      }
    })

    return () => {
      tl.kill()
      Object.values(actions).forEach(action => {
        if (action) action.stop()
      })
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Scene">
      <group
        name="Sketchfab_model"
        position={[0.18, -36.519, -5.699]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.079}>
        <group
          name="Collada_visual_scene_group"
          position={[-35.269, -44.498, -24.153]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.139}>
          <group name="Microsoft_Surface_Headphones" position={[0, 468.186, 70.454]}>
            <group name="arco_superior" position={[0, 296.346, -70.041]}>
              <group name="1001_superior" position={[0, -0.607, 0.422]}>
                <mesh
                  name="defaultMaterial"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial.geometry}
                  material={materials['1001']}
                />
                <mesh
                  name="defaultMaterial030"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial030.geometry}
                  material={materials['1001']}
                  position={[0.19, 0, 0.3]}
                />
              </group>
            </group>
            <group name="direita" position={[233.428, -218.649, -70.454]}>
              <group
                name="1002_arco_lateral"
                position={[1.728, 437.225, 0.86]}
                rotation={[1.571, 0.539, -1.571]}>
                <mesh
                  name="defaultMaterial001"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial001.geometry}
                  material={materials['1002']}
                  position={[0, -1.23, -1.802]}
                />
                <mesh
                  name="defaultMaterial031"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial031.geometry}
                  material={materials['1002']}
                  position={[0, 0, -1.434]}
                />
              </group>
              <group name="1004_extens��o" position={[-13.507, 437.96, 0.893]}>
                <mesh
                  name="defaultMaterial002"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial002.geometry}
                  material={materials['1004']}
                />
              </group>
              <group
                name="1005_haste"
                position={[74.473, 161.897, 1.497]}
                rotation={[Math.PI / 2, -0.483, Math.PI / 2]}>
                <group
                  name="1005_conex��o"
                  position={[139.411, -0.437, 172.695]}
                  rotation={[-1.088, Math.PI / 2, 0]}
                />
                <group
                  name="1006_hardware"
                  position={[-3.129, 25.07, 276.109]}
                  rotation={[-1.088, Math.PI / 2, 0]}>
                  <group name="defaultMaterial005" />
                  <group name="defaultMaterial007" position={[501.207, 572.242, -180.761]} />
                  <group name="defaultMaterial008" position={[505.331, 528.907, -162.651]} />
                  <group name="defaultMaterial009" />
                </group>
                <group
                  name="1008_volume"
                  position={[-1.497, -43.364, 182.013]}
                  rotation={[-1.588, 0, 2.064]}>
                  <group name="defaultMaterial013" />
                </group>
                <group
                  name="bot��es"
                  position={[-1.497, -23.496, 181.664]}
                  rotation={[-1.588, 0, -0.123]}>
                  <group
                    name="1006_Ligar_Desligar"
                    position={[136.719, -22.378, 21.283]}
                    rotation={[-0.472, -1.217, -0.922]}>
                    <group name="defaultMaterial011" />
                  </group>
                  <group
                    name="1006_Microfone"
                    position={[114.551, -77.944, 20.538]}
                    rotation={[-1.045, -0.904, -1.54]}>
                    <group name="defaultMaterial010" />
                  </group>
                </group>
                <group
                  name="pad"
                  position={[-1.497, 91.984, 181.205]}
                  rotation={[-2.182, Math.PI / 2, 0]}>
                  <group
                    name="1009_couro"
                    position={[37.548, 27.226, 0]}
                    rotation={[Math.PI / 2, -0.952, Math.PI / 2]}
                  />
                  <group name="1010_tecido">
                    <mesh
                      name="defaultMaterial015"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial015.geometry}
                      material={materials['1010']}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group name="esquerda" position={[-238.762, -203.258, -34.573]}>
              <group
                name="1003_arco_lateral"
                position={[3.606, 421.834, -35.021]}
                rotation={[1.571, -0.539, 1.572]}>
                <mesh
                  name="defaultMaterial016"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial016.geometry}
                  material={materials['1003']}
                />
                <mesh
                  name="defaultMaterial032"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial032.geometry}
                  material={materials['1003']}
                />
              </group>
              <group name="1004_extens��o_2" position={[18.588, 422.569, -34.988]}>
                <mesh
                  name="defaultMaterial017"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial017.geometry}
                  material={materials['1004']}
                  rotation={[-0.002, -0.007, 0]}
                />
              </group>
              <group
                name="1005_haste_2"
                position={[-69.139, 146.507, -34.384]}
                rotation={[Math.PI / 2, -1.094, Math.PI / 2]}>
                <group
                  name="1005_conex��o_2"
                  position={[139.411, -172.695, -0.668]}
                  rotation={[-0.477, 1.571, 0]}
                />
                <group
                  name="1007_hardware"
                  position={[-1.497, -181.811, 22.333]}
                  rotation={[-3.118, 0, Math.PI]}>
                  <mesh
                    name="defaultMaterial020"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial020.geometry}
                    material={materials['1007']}
                  />
                </group>
                <group
                  name="1007_hardware_gear"
                  position={[-25.724, -152.689, 22.638]}
                  rotation={[-3.118, 0, -2.711]}>
                  <mesh
                    name="defaultMaterial021"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial021.geometry}
                    material={materials['1007']}
                  />
                </group>
                <group
                  name="1008_volume_2"
                  position={[-1.497, -182.286, 42.197]}
                  rotation={[-3.118, 0, Math.PI]}>
                  <group name="1008_volume_circle" />
                  <group name="1008_volume_connection">
                    <mesh
                      name="defaultMaterial023"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial023.geometry}
                      material={materials['1008']}
                    />
                  </group>
                  <group name="1008_volume_touch">
                    <mesh
                      name="defaultMaterial022"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial022.geometry}
                      material={materials['1008']}
                    />
                  </group>
                </group>
                <mesh
                  name="defaultMaterial018"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial018.geometry}
                  material={materials['1005']}
                />
                <group
                  name="pad_2"
                  position={[-1.48, -180.204, -87.071]}
                  rotation={[-1.571, 1.571, 0]}>
                  <group
                    name="1009_couro_2"
                    position={[0, -40.307, -0.017]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="defaultMaterial025"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial025.geometry}
                      material={materials['1009']}
                    />
                    <mesh
                      name="defaultMaterial027"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial027.geometry}
                      material={materials['1009']}
                    />
                  </group>
                  <group name="1010_tecido_2" position={[0, -2.971, 0.017]}>
                    <mesh
                      name="defaultMaterial026"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial026.geometry}
                      material={materials['1010']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        name="Sketchfab_model009"
        position={[0.063, -108.142, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.058}>
        <group name="Collada_visual_scene_group009" rotation={[Math.PI / 2, 0, 0]}>
          <group
            name="Microsoft_Surface_Headphones009"
            position={[-48.176, 328.698, 154.342]}
            scale={1.139}>
            <group name="arco_superior001" position={[0, 296.346, -70.041]}>
              <group name="1001_superior001" position={[0, -0.607, 0.422]} />
            </group>
            <group name="direita001" position={[233.428, -218.648, -70.454]}>
              <group
                name="1005_haste001"
                position={[74.473, 161.897, 1.497]}
                rotation={[Math.PI / 2, -0.483, Math.PI / 2]}>
                <group
                  name="1008_volume001"
                  position={[-1.497, -43.364, 182.013]}
                  rotation={[-1.588, 0, 2.064]}
                />
                <group
                  name="bot��es001"
                  position={[-1.497, -23.496, 181.664]}
                  rotation={[-1.588, 0, -0.123]}>
                  <group
                    name="1006_Ligar_Desligar001"
                    position={[136.719, -22.378, 21.283]}
                    rotation={[-0.472, -1.217, -0.922]}
                  />
                </group>
                <mesh
                  name="defaultMaterial038"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial038.geometry}
                  material={materials['1005.006']}
                  position={[-98.375, 546.375, -1278.515]}
                  rotation={[0.019, 0.002, 0.061]}
                  scale={1.324}
                />
                <mesh
                  name="defaultMaterial039"
                  castShadow
                  receiveShadow
                  geometry={nodes.defaultMaterial039.geometry}
                  material={materials['1005.006']}
                  position={[-98.375, 546.375, -1278.515]}
                  rotation={[0.019, 0.002, 0.061]}
                  scale={1.324}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        name="1009_couro001"
        position={[37.548, 27.226, 0]}
        rotation={[Math.PI / 2, -0.952, Math.PI / 2]}
      />
      <group
        name="1003_arco_lateral001"
        position={[1.306, 483.62, -35.593]}
        rotation={[1.571, -0.539, 1.572]}
        scale={1.139}
      />
      <group name="1004_extens��o_2001" position={[18.371, 484.457, -35.555]} scale={1.139} />
      <group
        name="1005_haste_2008"
        position={[-81.546, 170.037, -34.868]}
        rotation={[Math.PI / 2, -1.094, Math.PI / 2]}
        scale={1.139}
      />
      <group
        name="Sketchfab_model012"
        position={[-81.552, -38.42, -2.197]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.09}>
        <group name="Collada_visual_scene_group014" rotation={[Math.PI / 2, 0, 0]}>
          <group
            name="Microsoft_Surface_Headphones002"
            position={[-464.355, 351.887, -433.443]}
          />
        </group>
      </group>
      <mesh
        name="defaultMaterial019"
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial019.geometry}
        material={materials['1005.004']}
        position={[-22.805, -15.538, 10.343]}
        rotation={[-0.288, -0.149, 0.964]}
        scale={[0.094, 0.088, 0.113]}
      />
      <group
        name="Sketchfab_model001"
        position={[-2.596, -38.42, -2.197]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.09}>
        <group name="Collada_visual_scene_group001" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Microsoft_Surface_Headphones001" position={[0, 468.186, 70.454]}>
            <group name="esquerda001" position={[-238.762, -203.258, -34.573]}>
              <group
                name="1005_haste_2001"
                position={[-69.139, 146.507, -34.384]}
                rotation={[Math.PI / 2, -1.094, Math.PI / 2]}>
                <group
                  name="1008_volume_2001"
                  position={[-1.497, -182.286, 42.198]}
                  rotation={[-3.118, 0, Math.PI]}>
                  <group name="1008_volume_circle001">
                    <mesh
                      name="defaultMaterial028"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial028.geometry}
                      material={materials['1008.001']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        name="Sketchfab_model002"
        position={[37.36, -38.42, -2.197]}
        rotation={[-Math.PI / 2, 0, -3.137]}
        scale={0.09}>
        <group name="Collada_visual_scene_group002" rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group
        name="Sketchfab_model003"
        position={[37.36, -38.42, -2.197]}
        rotation={[-Math.PI / 2, 0, -3.137]}
        scale={0.09}>
        <group name="Collada_visual_scene_group003" rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group name="esquerda002" position={[-228.182, -203.258, -34.521]}>
        <group
          name="1005_haste_2002"
          position={[-69.139, 146.507, -34.384]}
          rotation={[Math.PI / 2, -1.094, Math.PI / 2]}>
          <group
            name="1008_volume_2002"
            position={[-1.497, -182.286, 42.198]}
            rotation={[-3.118, 0, Math.PI]}>
            <group name="1008_volume_circle002" />
          </group>
        </group>
      </group>
      <group name="esquerda003" position={[-228.182, -203.258, -34.521]}>
        <group
          name="1005_haste_2003"
          position={[-69.139, 146.507, -34.384]}
          rotation={[Math.PI / 2, -1.094, Math.PI / 2]}>
          <group
            name="1005_conex��o_2001"
            position={[139.411, -172.695, -0.668]}
            rotation={[-0.477, 1.571, 0]}
          />
          <group
            name="1007_hardware001"
            position={[-1.497, -181.811, 22.333]}
            rotation={[-3.118, 0, Math.PI]}
          />
          <group
            name="1007_hardware_gear001"
            position={[-25.724, -152.69, 22.638]}
            rotation={[-3.118, 0, -2.711]}
          />
          <group
            name="1008_volume_2003"
            position={[-1.497, -182.286, 42.198]}
            rotation={[-3.118, 0, Math.PI]}>
            <group name="1008_volume_circle003" />
            <group name="1008_volume_connection001" />
            <group name="1008_volume_touch001" />
          </group>
          <group
            name="pad_2001"
            position={[-1.48, -180.204, -87.071]}
            rotation={[-1.571, 1.571, 0]}>
            <group
              name="1009_couro_2001"
              position={[0, -40.307, -0.017]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
            <group name="1010_tecido_2001" position={[0, -2.971, 0.017]} />
          </group>
        </group>
      </group>
      <group
        name="Sketchfab_model004"
        position={[-39.181, -38.42, -2.197]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.09}>
        <group name="Collada_visual_scene_group004" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Microsoft_Surface_Headphones004" position={[0, 468.186, 70.454]}>
            <group
              name="esquerda004"
              position={[654.286, -212.873, -112.131]}
              rotation={[-Math.PI, 0.022, -Math.PI]}>
              <group
                name="1005_haste_2004"
                position={[-69.139, 146.507, -34.384]}
                rotation={[Math.PI / 2, -1.094, Math.PI / 2]}>
                <group
                  name="1008_volume_2004"
                  position={[-1.497, -182.286, 42.198]}
                  rotation={[-3.118, 0, -Math.PI]}>
                  <group name="1008_volume_circle004">
                    <mesh
                      name="defaultMaterial003"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial003.geometry}
                      material={materials['1008.004']}
                      position={[0, 0, 6.76]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        name="Sketchfab_model005"
        position={[-39.181, -38.42, -2.197]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.09}>
        <group name="Collada_visual_scene_group005" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Microsoft_Surface_Headphones005" position={[0, 468.186, 70.454]}>
            <group
              name="esquerda005"
              position={[654.286, -212.873, -112.131]}
              rotation={[-Math.PI, 0.022, -Math.PI]}>
              <group
                name="1005_haste_2005"
                position={[-69.139, 146.507, -34.384]}
                rotation={[Math.PI / 2, -1.094, Math.PI / 2]}>
                <group
                  name="1005_conex��o_2002"
                  position={[139.411, -172.695, -0.668]}
                  rotation={[-0.477, 1.571, 0]}>
                  <mesh
                    name="defaultMaterial048"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial048.geometry}
                    material={materials['1005.002']}
                    position={[9.135, 18.559, -283.489]}
                    rotation={[-0.066, 0.585, -0.013]}
                    scale={[1.083, 1.002, 1.198]}
                  />
                </group>
                <group
                  name="1007_hardware002"
                  position={[-1.497, -181.811, 22.333]}
                  rotation={[-3.118, 0, Math.PI]}>
                  <mesh
                    name="defaultMaterial047"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial047.geometry}
                    material={materials['1007.002']}
                    position={[0.123, -2.709, 4.951]}
                  />
                </group>
                <group
                  name="1007_hardware_gear002"
                  position={[-25.724, -152.69, 22.638]}
                  rotation={[-3.118, 0, -2.711]}>
                  <mesh
                    name="defaultMaterial046"
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial046.geometry}
                    material={materials['1007.002']}
                  />
                </group>
                <group
                  name="1008_volume_2005"
                  position={[-1.497, -182.286, 42.198]}
                  rotation={[-3.118, 0, -Math.PI]}>
                  <group name="1008_volume_circle005" />
                  <group name="1008_volume_connection002">
                    <mesh
                      name="defaultMaterial037"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial037.geometry}
                      material={materials['1008.005']}
                    />
                  </group>
                  <group name="1008_volume_touch002">
                    <mesh
                      name="defaultMaterial045"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial045.geometry}
                      material={materials['1008.005']}
                      position={[0.123, -2.709, 5.95]}
                    />
                  </group>
                </group>
                <group
                  name="pad_2002"
                  position={[-1.48, -180.204, -87.071]}
                  rotation={[-1.571, 1.571, 0]}>
                  <group
                    name="1009_couro_2002"
                    position={[0, -40.307, -0.017]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
                    <mesh
                      name="defaultMaterial004"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial004.geometry}
                      material={materials['1009.002']}
                    />
                    <mesh
                      name="defaultMaterial035"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial035.geometry}
                      material={materials['1009.002']}
                      position={[0.123, 0, 0]}
                    />
                  </group>
                  <group name="1010_tecido_2002" position={[0, -2.971, 0.017]}>
                    <mesh
                      name="defaultMaterial012"
                      castShadow
                      receiveShadow
                      geometry={nodes.defaultMaterial012.geometry}
                      material={materials['1010.002']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        name="Sketchfab_model006"
        position={[0.18, -36.519, -5.699]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.079}>
        <group
          name="Collada_visual_scene_group006"
          position={[-35.269, -44.498, -24.153]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.139}
        />
      </group>
      <group name="esquerda006" position={[-238.762, -203.258, -34.573]}>
        <group
          name="1005_haste_2006"
          position={[-69.139, 146.507, -34.384]}
          rotation={[Math.PI / 2, -1.094, Math.PI / 2]}
        />
      </group>
      <group
        name="Sketchfab_model007"
        position={[49.889, -36.519, -5.699]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.079}>
        <group
          name="Collada_visual_scene_group007"
          position={[52.499, -44.498, -24.153]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.139}
        />
      </group>
      <group
        name="1005_haste_2007"
        position={[-81.546, 170.037, -34.868]}
        rotation={[Math.PI / 2, -1.094, Math.PI / 2]}
        scale={1.139}
      />
      <group
        name="Sketchfab_model008"
        position={[63.939, -38.832, -14.903]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.079}>
        <group
          name="Collada_visual_scene_group008"
          position={[77.306, -28.248, -28.237]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.139}
        />
      </group>
      <group
        name="Sketchfab_model010"
        position={[0.18, -36.519, -5.699]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.079}>
        <group
          name="Collada_visual_scene_group010"
          position={[-35.269, -44.498, -24.153]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.139}
        />
      </group>
      <group name="esquerda009" position={[-238.762, -203.258, -34.573]}>
        <group
          name="1005_haste_2009"
          position={[-69.139, 146.507, -34.384]}
          rotation={[Math.PI / 2, -1.094, Math.PI / 2]}>
          <group
            name="1005_conex��o_2004"
            position={[139.411, -172.695, -0.668]}
            rotation={[-0.477, 1.571, 0]}
          />
        </group>
      </group>
      <group
        name="Sketchfab_model011"
        position={[14.356, -31.297, -2.671]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.079}>
        <group
          name="Collada_visual_scene_group011"
          position={[-10.238, -49.845, -14.934]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.139}
        />
      </group>
      <group
        name="Collada_visual_scene_group012"
        position={[-2.8, 3.173, 4.294]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.139}
      />
      <group
        name="1005_haste_2011"
        position={[-81.546, 170.037, -34.868]}
        rotation={[Math.PI / 2, -1.094, Math.PI / 2]}
        scale={1.139}
      />
      <group
        name="Collada_visual_scene_group013"
        position={[-2.8, 3.173, 4.294]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.139}
      />
    </group>
  </group>
  )
}

useGLTF.preload('/headphone3D.glb')
  