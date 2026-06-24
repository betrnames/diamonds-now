import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import type * as THREE from 'three'
import { TorusGeometry, SphereGeometry, CylinderGeometry, Color, MathUtils } from 'three'

const R = 0.9
const tubeR = 0.032

function OvalDiamond() {
  const geo = useMemo(() => {
    const g = new SphereGeometry(0.28, 32, 20)
    g.scale(0.75, 0.55, 1)
    return g
  }, [])

  const pavilionGeo = useMemo(() => {
    const g = new CylinderGeometry(0.18, 0.01, 0.28, 16)
    g.scale(0.75, 1, 1)
    return g
  }, [])

  const tableGeo = useMemo(() => {
    const g = new CylinderGeometry(0.14, 0.14, 0.015, 16)
    g.scale(0.75, 1, 1)
    return g
  }, [])

  const y = tubeR + 0.22

  return (
    <group position={[0, y, R]}>
      <mesh geometry={geo} position={[0, 0.04, 0]}>
        <meshPhysicalMaterial
          color="#f4f8ff"
          metalness={0.02}
          roughness={0.005}
          envMapIntensity={5}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          ior={2.42}
          iridescence={0.4}
          iridescenceIOR={2.42}
          iridescenceThicknessRange={[100, 400]}
          transmission={0.25}
          thickness={0.6}
          emissive={new Color('#dce8ff')}
          emissiveIntensity={0.2}
          transparent
          opacity={0.93}
        />
      </mesh>

      <mesh geometry={pavilionGeo} position={[0, -0.14, 0]} rotation={[Math.PI, 0, 0]}>
        <meshPhysicalMaterial
          color="#e8f0ff"
          metalness={0.02}
          roughness={0.005}
          envMapIntensity={5}
          clearcoat={1}
          reflectivity={1}
          ior={2.42}
          iridescence={0.35}
          iridescenceIOR={2.42}
          iridescenceThicknessRange={[100, 400]}
          transmission={0.2}
          thickness={0.8}
          emissive={new Color('#c8d8f0')}
          emissiveIntensity={0.12}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh geometry={tableGeo} position={[0, 0.17, 0]}>
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.0}
          roughness={0.0}
          envMapIntensity={6}
          clearcoat={1}
          reflectivity={1}
          ior={2.42}
          transmission={0.35}
          thickness={0.2}
          transparent
          opacity={0.96}
        />
      </mesh>
    </group>
  )
}

function Prongs() {
  const geo = useMemo(() => new CylinderGeometry(0.008, 0.012, 0.22, 6), [])

  const positions = useMemo(() => {
    const y = tubeR + 0.12
    const offX = 0.14
    const offZ = 0.18
    return [
      [offX, y, R + offZ],
      [-offX, y, R + offZ],
      [offX, y, R - offZ],
      [-offX, y, R - offZ],
    ] as [number, number, number][]
  }, [])

  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} geometry={geo} position={pos}>
          <meshPhysicalMaterial
            color="#e0e4e8"
            metalness={0.96}
            roughness={0.08}
            envMapIntensity={3}
            clearcoat={0.5}
          />
        </mesh>
      ))}
    </>
  )
}

function AccentStones() {
  const geo = useMemo(() => {
    const g = new SphereGeometry(0.02, 10, 8)
    g.scale(1, 0.6, 1)
    return g
  }, [])

  const positions = useMemo(() => {
    const result: [number, number, number][] = []
    const angles = [0.12, 0.24, 0.42, 0.62, -0.12, -0.24, -0.42, -0.62]
    for (const angle of angles) {
      result.push([
        Math.sin(angle) * R,
        tubeR + 0.003,
        Math.cos(angle) * R,
      ])
    }
    return result
  }, [])

  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} geometry={geo} position={pos}>
          <meshPhysicalMaterial
            color="#f0f4ff"
            metalness={0.05}
            roughness={0.01}
            envMapIntensity={4}
            clearcoat={1}
            reflectivity={1}
            ior={2.42}
            iridescence={0.3}
            iridescenceIOR={2.0}
            iridescenceThicknessRange={[100, 300]}
            emissive={new Color('#c8d8f0')}
            emissiveIntensity={0.1}
            transparent
            opacity={0.92}
          />
        </mesh>
      ))}
    </>
  )
}

function Band() {
  const geo = useMemo(() => new TorusGeometry(R, tubeR, 32, 128), [])

  return (
    <mesh geometry={geo}>
      <meshPhysicalMaterial
        color="#e0e4e8"
        metalness={0.96}
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
  const ringRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  useFrame((state) => {
    if (!ringRef.current) return

    const pointer = state.pointer
    mouse.current.x = MathUtils.lerp(mouse.current.x, pointer.x * 0.15, 0.04)
    mouse.current.y = MathUtils.lerp(mouse.current.y, pointer.y * 0.1, 0.04)

    ringRef.current.rotation.x = -0.75 + mouse.current.y * 0.12
    ringRef.current.rotation.y = state.clock.elapsedTime * 0.15 + mouse.current.x * Math.PI * 0.3
    ringRef.current.rotation.z = 0.1
  })

  return (
    <>
      <Environment preset="studio" background={false} environmentIntensity={2.5} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 10, 5]} intensity={2.5} color="#f8faff" />
      <directionalLight position={[-3, 8, -4]} intensity={1.8} color="#f0f4ff" />
      <pointLight position={[0, 8, 3]} intensity={3} color="#ffffff" distance={15} />
      <pointLight position={[-2, 5, -1]} intensity={1.5} color="#e8f0ff" distance={12} />

      <group ref={ringRef} scale={viewport.width < 6 ? 0.8 : 1.1}>
        <Band />
        <AccentStones />
        <Prongs />
        <OvalDiamond />
      </group>

      <Sparkles count={15} scale={3} size={0.8} speed={0.08} opacity={0.15} color="#e0ecff" />
    </>
  )
}
