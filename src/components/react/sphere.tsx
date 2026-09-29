import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

import type { PointLight as PointLightType } from "three";

type SphereProps = {
    light: React.RefObject<PointLightType | null>;
    position?: [number, number, number];
    colour?: string;
    rotation?: [number, number, number];
    /** Uniform scale factor; also drives the spring mass. */
    scale?: number;
    setHovered?: Function;
    hovered: boolean;
};

export default function Sphere({
    light,
    position,
    colour = "#1f1f1f",
    rotation = [0, 0, 0],
    scale = 1,
    hovered,
    setHovered = () => {}
}: SphereProps) {
    const sphere = useRef<THREE.Mesh>(null);

    // Change cursor on hovered state
    useEffect(() => {
        document.body.style.cursor = hovered
            ? "none"
            : `url('data:image/svg+xml;base64,${btoa(
                  '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E0FFE9"/></svg>'
              )}'), auto`;
    }, [hovered]);

    // Make the bubble float and follow the mouse
    // This is frame-based animation, useFrame subscribes the component to the render-loop
    useFrame((state) => {
        if (light.current) {
            light.current.position.x = state.pointer.x * 20;
            light.current.position.y = state.pointer.y * 20;
        }
        if (sphere.current) {
            sphere.current.position.x = THREE.MathUtils.lerp(
                sphere.current.position.x,
                hovered ? state.pointer.x : state.pointer.x / 2,
                0.5
            );
            sphere.current.position.y = THREE.MathUtils.lerp(
                sphere.current.position.y,
                Math.sin(state.clock.elapsedTime / 1.5) / 6 +
                    (hovered ? state.pointer.y / 3 : state.pointer.y / 5),
                0.5
            );
        }
    });

    const [{ coat, color, env }] = useSpring(
        {
            coat: hovered ? 0.2 : 0.1,
            env: hovered ? 1 : 0.4,
            color: hovered ? "#5162ff" : colour
        },
        [hovered]
    );

    return (
        <a.mesh
            ref={sphere}
            position={position}
            rotation={rotation}
            scale={scale}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <sphereGeometry args={[1, 64, 64]} />
            <AnimatedMaterial
                distort={0.5}
                color={color}
                envMapIntensity={env}
                clearcoat={0.8}
                clearcoatRoughness={coat}
                metalness={0.1}
            />
        </a.mesh>
    );
}
