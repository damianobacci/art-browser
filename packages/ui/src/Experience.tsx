import { useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "@react-three/drei"


export default function Experience() {
    const torusRef = useRef<THREE.Mesh>(null)


    return <>
        <OrbitControls makeDefault/>
        <mesh ref={torusRef} rotation-y={ Math.PI * 0.25 } scale={ 1.5 }>
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh>
    </>
}