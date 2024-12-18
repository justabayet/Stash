import { FaceControls, useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { ElementRef, useEffect, useRef } from 'react'
import { Color, Group, Vector3 } from 'three'
import Frame from './Frame'

const center = new Vector3(0, 0, -1)

const NB_FRAMES = 10
const frames = new Array(NB_FRAMES).fill(0)

function Experience(): JSX.Element {
  const [sub] = useKeyboardControls()

  useEffect(() => {
    return sub(
      (state) => state.log_pos,
      (pressed) => {
        if (pressed) {
          const target = faceControlsRef.current?.computeTarget()
          // console.log(target?.rotation, target?.position.multiplyScalar(5))
          console.log(target?.position.toArray())
        }
      }
    )
  }, [sub])

  useEffect(() => {
    return sub(
      (state) => state.log_separator,
      (pressed) => {
        if (pressed) {
          console.log('log_separator', pressed)
        }
      }
    )
  }, [sub])

  const faceControlsRef = useRef<ElementRef<typeof FaceControls>>(null)
  const fixedFrameRef = useRef<Group>(null)

  useFrame(({ camera }) => {
    const target = faceControlsRef.current?.computeTarget()
    // console.log(target?.rotation, target?.position)
    // console.log(fixedFrameRef.current)
    if (target) {
      camera.position.copy(target.position).setZ(1)
      camera.lookAt(center)

      if (fixedFrameRef.current) {
        console.log(camera.rotation)
        // fixedFrameRef.current.rotation.copy(target.rotation)
        fixedFrameRef.current.lookAt(camera.position)
        // fixedFrameRef.current.setRotationFromEuler(camera.rotation)
        fixedFrameRef.current.position.setX(target.position.x)
      }

    }
  })
  return (
    <>
      <FaceControls ref={faceControlsRef} manualUpdate />

      <mesh scale={0.1} position={[0, 0, 0.5]}>
        <boxGeometry />
        <meshBasicMaterial color={'blue'} />
      </mesh >

      {
        frames.map((_, index) => {
          const indexOffset = index
          return <Frame
            position-z={indexOffset * -1}
            key={indexOffset}
            color={indexOffset < 0 ? 'red' : new Color().setScalar((1.0 - (indexOffset / NB_FRAMES)) ** 3)
            } />
        })
      }
    </>
  )
}

export default Experience
