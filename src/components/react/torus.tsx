import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Donut({ position, hovered }) {
    const meshRef = useRef();
    useFrame((state, delta) => {
        meshRef.current.rotation.x -= delta;
        meshRef.current.rotation.y -= delta + Math.sin(delta);
        let target = position[1];
        if (hovered) {
            target = -1;
        }
        meshRef.current.position.y = THREE.MathUtils.lerp(
            meshRef.current.position.y,
            target,
            0.05
        );
    });
    return (
        <mesh position={position} ref={meshRef}>
            <sphereGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial color={"pink"} />
        </mesh>
    );
}
