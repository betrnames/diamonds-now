import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import type * as THREE from 'three'
import { Color, MathUtils } from 'three'

function DiamondStone() {
  return (
    <group position={[0, 0.38, 0]}>
      {/* crown (top) */}
      <mesh position={[0, 0.06, 0]}>
        <coneGeometry args={[0.18, 0.12, 6]} />
        <meshPhysicalMaterial
          color="#f4f8ff"
          metalness={0}
          roughness={0}
          envMapIntensity={5}
          clearcoat={1}
          ior={2.42}
          iridescence={0.4}
          iridescenceIOR={2.42}
          iridescenceThicknessRange={[100, 400]}
          transmission={0.3}
          thickness={0.5}
          transparent
          opacity={0.95}
        />
      </mesh>
      {/* table (flat top) */}
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.01, 6]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0}
          roughness={0}
          envMapIntensity={6}
          clearcoat={1}
          ior={2.42}
          transmission={0.4}
          thickness={0.2}
          transparent
          opacity={0.97}
        />
      </mesh>
      {/* pavilion (bottom cone) */}
      <mesh position={[0, -0.08, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.18, 0.22, 6]} />
        <meshPhysicalMaterial
          color="#e8f0ff"
          metalness={0}
          roughness={0}
          envMapIntensity={5}
          clearcoat={1}
          ior={2.42}
          iridescence={0.35}
          iridescenceIOR={2.42}
          iridescenceThicknessRange={[100, 400]}
          transmission={0.2}
          thickness={0.8}
          transparent
          opacity={0.92}
        />
      </mesh>
    </group>
  )
}

function Prongs() {
  const positions: [number, number, number][] = [
    [0.12, 0.32, 0],
    [-0.12, 0.32, 0],
    [0, 0.32, 0.12],
    [0, 0.32, -0.12],
  ]

  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.008, 0.01, 0.16, 6]} />
          <meshPhysicalMaterial
            color="#d8dce0"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={3}
          />
        </mesh>
      ))}
    </>
  )
}

function Band() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.3, 0.035, 32, 64]} />
      <meshPhysicalMaterial
        color="#e0e4e8"
        metalness={0.95}
        roughness={0.08}
        envMapIntensity={3.5}
        clearcoat={0.7}
        clearcoatRoughness={0.02}
        reflectivity={0.96}
        emissive={new Color('#d4d8dc')}
        emissiveIntensity={0.02}
      />
    </mesh>
  )
}

export default function Ring3D() {
  const groupRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (!groupRef.current) return

    mouse.current.x = MathUtils.lerp(mouse.current.x, state.pointer.x * 0.1, 0.03)
    mouse.current.y = MathUtils.lerp(mouse.current.y, state.pointer.y * 0.08, 0.03)

    groupRef.current.rotation.x = -0.3 + mouse.current.y * 0.15
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2 + mouse.current.x * Math.PI * 0.25
  })

  return (
    <>
      <Environment preset="studio" background={false} environmentIntensity={2.5} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 8, 5]} intensity={2.5} color="#f8faff" />
      <directionalLight position={[-3, 6, -4]} intensity={1.5} color="#f0f4ff" />
      <pointLight position={[0, 6, 2]} intensity={2} color="#ffffff" distance={15} />

      <group ref={groupRef}>
        <Band />
        <Prongs />
        <DiamondStone />
      </group>
    </>
  )
}
