import * as THREE from "three";
import { Suspense, useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
    PerspectiveCamera,
    Environment,
    MeshDistortMaterial,
    ContactShadows
} from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function Sphere({
    light,
    position,
    colour = "#1f1f1f",
    rotation = [0, 0, 0],
    scale = [1, 1, 1]
}) {
    const sphere = useRef();
    // const light = useRef();
    const [mode, setMode] = useState(false);
    const [down, setDown] = useState(false);
    const [hovered, setHovered] = useState(false);

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
        light.current.position.x = state.mouse.x * 20;
        light.current.position.y = state.mouse.y * 20;
        if (sphere.current) {
            sphere.current.position.x = THREE.MathUtils.lerp(
                sphere.current.position.x,
                hovered ? state.mouse.x / 2 : 0,
                0.2
            );
            sphere.current.position.y = THREE.MathUtils.lerp(
                sphere.current.position.y,
                Math.sin(state.clock.elapsedTime / 1.5) / 6 +
                    (hovered ? state.mouse.y / 2 : 0),
                0.2
            );
        }
    });

    // Springs for color and overall looks, this is state-driven animation
    // React-spring is physics based and turns static props into animated values
    // const [{ wobble, coat, color, ambient, env }] = useSpring(
    //     {
    //         wobble: 1,
    //         coat: 0.05,
    //         ambient: 0.05,
    //         env: 0.5,
    //         color: "#202020",
    //         config: (n) =>
    //             n === "wobble" &&
    //             hovered && { mass: 2, tension: 1000, friction: 10 }
    //     },
    //     []
    // );

    const [{ wobble, coat, color, ambient, env }] = useSpring(
        {
            wobble: hovered ? 1.4 : 1,
            coat: hovered ? 0.2 : 0.1,
            ambient: !hovered ? 1 : 0.5,
            env: !hovered ? 0.4 : 1,
            color: !hovered ? colour : "##5162ff",
            config: (n) =>
                n === "wobble" &&
                hovered && { mass: scale * 2, tension: 50, friction: 5 }
        },
        [mode, hovered, down]
    );

    return (
        <a.mesh
            ref={sphere}
            position={position}
            rotation={rotation}
            scale={scale}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerDown={() => setDown(true)}
            onPointerUp={() => {
                setDown(false);
            }}
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
