import { GroupProps, MeshProps } from '@react-three/fiber'

function Point(props: MeshProps): JSX.Element {
  return (
    <mesh scale={0.01} {...props}>
      <boxGeometry></boxGeometry>
    </mesh>
  )
}


function Frame(props: GroupProps): JSX.Element {
  return (
    <group {...props}>
      <Point position={[0.1, 0, 0]} />
      <Point position={[0.1, 0.1, 0]} />
      <Point position={[0.1, -0.1, 0]} />
      <Point position={[0, 0.1, 0]} />
      <Point position={[0, -0.1, 0]} />
      <Point position={[-0.1, 0, 0]} />
      <Point position={[-0.1, 0.1, 0]} />
      <Point position={[-0.1, -0.1, 0]} />
    </group>
  )
}

export default Frame
