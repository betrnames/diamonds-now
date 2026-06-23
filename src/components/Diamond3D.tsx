import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import type * as THREE from 'three'
import { BufferGeometry, Float32BufferAttribute, Color } from 'three'

function createDiamondGeometry(): BufferGeometry {
  const geo = new BufferGeometry()
  const crownHeight = 0.4
  const pavilionDepth = 0.75
  const girdleRadius = 1.0
  const tableRadius = 0.45
  const facets = 16
  const vertices: number[] = []
  const tableCenter = [0, crownHeight, 0]
  const culet = [0, -pavilionDepth, 0]
  const girdlePoints: number[][] = []
  const tablePoints: number[][] = []
  const midCrown: number[][] = []

  for (let i = 0; i < facets; i++) {
    const a = (i / facets) * Math.PI * 2
    const ma = ((i + 0.5) / facets) * Math.PI * 2
    girdlePoints.push([Math.cos(a) * girdleRadius, 0, Math.sin(a) * girdleRadius])
    tablePoints.push([Math.cos(a) * tableRadius, crownHeight, Math.sin(a) * tableRadius])
    midCrown.push([Math.cos(ma) * girdleRadius * 0.8, crownHeight * 0.55, Math.sin(ma) * girdleRadius * 0.8])
  }

  function tri(a: number[], b: number[], c: number[]) { vertices.push(...a, ...b, ...c) }

  for (let i = 0; i < facets; i++) {
    const n = (i + 1) % facets
    tri(girdlePoints[i], midCrown[i], girdlePoints[n])
    tri(midCrown[i], tablePoints[n], girdlePoints[n])
    tri(midCrown[i], tablePoints[i], tablePoints[n])
    tri(tableCenter as number[], tablePoints[n], tablePoints[i])
    tri(girdlePoints[i], culet as number[], girdlePoints[n])
  }

  geo.setAttribute('position', new Float32BufferAttribute(vertices, 3))
  geo.computeVertexNormals()
  return geo
}

function GlowingDiamond({ scale, position, rotationY, emissiveColor }: {
  scale: number
  position: [number, number, number]
  rotationY: number
  emissiveColor: string
}) {
  const ref = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const geometry = useMemo(() => createDiamondGeometry(), [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = rotationY + Math.sin(state.clock.elapsedTime * 0.08) * 0.015
    }
    if (glowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.2 + rotationY) * 0.08
      glowRef.current.scale.setScalar(scale * 1.2 * pulse)
      const mat = glowRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.12 + Math.sin(state.clock.elapsedTime * 1.8 + rotationY) * 0.05
    }
  })

  return (
    <group position={position}>
      <mesh ref={glowRef} geometry={geometry} scale={scale * 1.2}>
        <meshBasicMaterial color={emissiveColor} transparent opacity={0.12} side={2} depthWrite={false} />
      </mesh>

      <mesh ref={ref} geometry={geometry} scale={scale}>
        <meshPhysicalMaterial
          color="#8ab4e8"
          metalness={0.6}
          roughness={0.05}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          iridescence={0.7}
          iridescenceIOR={2.2}
          iridescenceThicknessRange={[200, 400]}
          emissive={new Color(emissiveColor)}
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  )
}

export default function Diamond3D() {
  return (
    <>
      <Environment preset="apartment" background={false} environmentIntensity={1.8} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 3]} intensity={1.5} color="#bfdbfe" />
      <directionalLight position={[-4, 5, -3]} intensity={1} color="#c4b5fd" />
      <pointLight position={[2, 4, 2]} intensity={1.5} color="#ffffff" distance={15} />
      <pointLight position={[-2, 3, -2]} intensity={1} color="#93c5fd" distance={12} />

      <GlowingDiamond scale={0.9} position={[0, 0.1, 0]} rotationY={0.3} emissiveColor="#93c5fd" />
      <GlowingDiamond scale={0.45} position={[-1.6, -0.8, -0.5]} rotationY={1.2} emissiveColor="#c4b5fd" />
      <GlowingDiamond scale={0.4} position={[1.5, -0.6, -0.3]} rotationY={2.5} emissiveColor="#fbcfe8" />

      <Sparkles count={80} scale={6} size={2} speed={0.3} opacity={0.5} color="#93c5fd" />
      <Sparkles count={40} scale={5} size={1.5} speed={0.2} opacity={0.3} color="#c4b5fd" />
    </>
  )
}
