import { FaceControls, useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { ElementRef, useEffect, useRef } from 'react'
import { Mesh } from 'three'
import Frame from './Frame'


function Experience(): JSX.Element {
  const [sub] = useKeyboardControls()

  useEffect(() => {
    return sub(
      (state) => state.log_pos,
      (pressed) => {
        if (pressed) {
          const target = faceControlsRef.current?.computeTarget()
          // console.log(target?.rotation, target?.position.multiplyScalar(5))
          console.log(target?.position.multiplyScalar(5).toArray())
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
  // const faceLandmarker = useFaceLandmarker()

  // const { controls } = useThree()

  // useFrame(() => {
  //   console.log({ controls, faceLandmarker })
  // })
  const faceControlsRef = useRef<ElementRef<typeof FaceControls>>(null)
  const meshTarget = useRef<Mesh>(null)

  useFrame(() => {
    const target = faceControlsRef.current?.computeTarget()
    // console.log(target?.rotation, target?.position)
    if (target) {
      // console.log(target.position)
      meshTarget.current?.position.copy(target.position).multiplyScalar(5)
    }
  })
  return (
    <>
      <FaceControls ref={faceControlsRef} />
      {/* <mesh ref={meshTarget}>
        <boxGeometry></boxGeometry>
      </mesh> */}
      <Frame position-z={-0.1} />
      <Frame />
      <Frame position-z={0.1} />
      <Frame position-z={0.2} />
      <Frame position-z={0.3} />
      <Frame position-z={0.4} />
      <Frame position-z={0.5} />
    </>
  )
}

export default Experience
