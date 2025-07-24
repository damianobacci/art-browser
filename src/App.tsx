import { Canvas } from '@react-three/fiber'
import Uploader from './Uploader'
import Experience from './Experience'


import './App.css'

function App() {

  return (
    <>
    <Uploader/>
    <Canvas>
       <Experience/>
    </Canvas>
    </>
  )
}

export default App
