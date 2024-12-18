import { GroupProps, MeshProps } from '@react-three/fiber'
import { forwardRef } from 'react'
import { ColorRepresentation, Group } from 'three'

const STEP = 1

function Point({ color, ...props }: MeshProps & { color?: ColorRepresentation }): JSX.Element {
  return (
    <mesh scale={0.1} {...props}>
      <boxGeometry />
      <meshBasicMaterial color={color} />
    </mesh >
  )
}

type FrameProps = {
  color?: ColorRepresentation
} & GroupProps

const Frame = forwardRef<Group, FrameProps>(function Frame({ color, ...props }, ref): JSX.Element {
  return (
    <group {...props} ref={ref}>
      <Point position={[STEP, 0, 0]} color={color} />
      <Point position={[STEP, STEP, 0]} color={color} />
      <Point position={[STEP, -STEP, 0]} color={color} />
      <Point position={[0, STEP, 0]} color={color} />
      <Point position={[0, -STEP, 0]} color={color} />
      <Point position={[-STEP, 0, 0]} color={color} />
      <Point position={[-STEP, STEP, 0]} color={color} />
      <Point position={[-STEP, -STEP, 0]} color={color} />
    </group>
  )
})

export default Frame
