
import { FaceLandmarker, KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import Experience from './Experience'

function Scene(): JSX.Element {
  return (
    <KeyboardControls map={[
      { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
      { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
      { name: 'previous', keys: ['ArrowLeft', 'KeyA'] },
      { name: 'next', keys: ['ArrowRight', 'KeyD'] },
      { name: 'log_pos', keys: ['Space'] },
      { name: 'log_separator', keys: ['KeyB'] },
    ]}>

      <FaceLandmarker>
        <Canvas
          camera={{
            fov: 90,
            near: 0.001,
            far: 200,
            position: [0, 0, 1]
          }} >

          <color attach="background" args={['black']} />

          <Experience />

          {/* <axesHelper /> */}

          {/* <Experience /> */}

          {/* <OrbitControls zoomSpeed={1} target={[0, 3, 0]} /> */}

          {/* <Perf position="top-left" /> */}
        </Canvas>

        <Leva collapsed />
      </FaceLandmarker>
    </KeyboardControls>
  )
}

export default Scene
