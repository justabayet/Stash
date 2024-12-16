import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import { Perf } from 'r3f-perf'
import Experience from './App/Experience'
import { KeyboardControls } from '@react-three/drei'
import { Leva } from 'leva'
import Hub from './Hub'
import { Route, Routes } from 'react-router-dom'
import Mirrors from './Pages/Mirrors'
import WIP from './Pages/WIP'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/mirrors" element={<Mirrors />} />
      <Route path="/wip" element={<WIP />} />
    </Routes>
    // <KeyboardControls map={[
    //   { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    //   { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    //   { name: 'previous', keys: ['ArrowLeft', 'KeyA'] },
    //   { name: 'next', keys: ['ArrowRight', 'KeyD'] },
    // ]}>
    //   <Canvas
    //     camera={{
    //       fov: 45,
    //       near: 0.1,
    //       far: 200,
    //       position: [-15, 8, 0]
    //     }} >

    //     <Experience />

    //     <OrbitControls zoomSpeed={1} target={[0, 3, 0]} />

    //     {/* <Perf position="top-left" /> */}
    //   </Canvas>

    //   <Leva collapsed />
    // </KeyboardControls>
  )
}

export default App
