import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"


export default function Experience() {
    const torusRef = useRef<THREE.Mesh>(null)

    useFrame(() =>
    {
        torusRef.current!.rotation.y += 0.01
    })

    return <>
        <mesh ref={torusRef} rotation-y={ Math.PI * 0.25 } scale={ 1.5 }>
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh>
    </>
}