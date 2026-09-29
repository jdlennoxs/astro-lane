import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box({ position, hovered }) {
    const meshRef = useRef();
    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta + Math.sin(delta);
        let target = position[1];
        if (hovered) {
            target = -2;
        }
        meshRef.current.position.y = THREE.MathUtils.lerp(
            meshRef.current.position.y,
            target,
            0.05
        );
    });
    return (
        <mesh position={position} ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial color={"turquoise"} />
        </mesh>
    );
}
