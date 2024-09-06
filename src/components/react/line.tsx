import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Line({ scale, rotation }) {
    const geometry = useMemo(() => {
        const vertices = [];
        const divisions = 50;

        for (let i = 0; i <= divisions; i++) {
            const v = (i / divisions) * (Math.PI * 2);
            const x = Math.sin(v);
            const y = Math.cos(v);
            vertices.push(x, y, 0);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );
        return geometry;
    }, []);
    const line = useRef();
    // useFrame(() => {
    //     line.current.rotation.z += 0.01;
    // });
    return (
        <line
            ref={line}
            onUpdate={(line) => line.computeLineDistances()}
            geometry={geometry}
            scale={scale}
            rotation={rotation}
        >
            <lineDashedMaterial
                color="#020202"
                dashSize={0.01}
                gapSize={0.03}
            />
        </line>
    );
}
