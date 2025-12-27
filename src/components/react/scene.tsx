import { Canvas, useFrame } from "@react-three/fiber";
import {
    Environment,
    OrbitControls,
    PerspectiveCamera
} from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import Sphere from "./sphere";
import { Suspense, useRef, useState } from "react";
import Box from "./box";
import { LineDashedMaterial } from "three";
import Line from "./line";

const Scene = () => {
    // This spring controls the background and the svg fill (text color)
    const [{ background, fill }, set] = useSpring(
        { background: "#f0f0f0", fill: "#202020" },
        []
    );

    // Springs for color and overall looks, this is state-driven animation
    // React-spring is physics based and turns static props into animated values
    // const [{ wobble, coat, color, ambient, env }] = useSpring(
    //     {
    //         wobble: 1,
    //         coat: 1,
    //         ambient: 0.5,
    //         env: 1,
    //         color: "#202020",
    //         config: (n) =>
    //             n === "wobble" && { mass: 2, tension: 1000, friction: 10 }
    //     },
    //     []
    // );

    const light = useRef();

    return (
        // <a.main style={{ background }}>
        <div style={{ background }}>
        <Suspense fallback={null}>
            <Sphere light={light} />
            <Box
                position={[0, 0, -10]}
            />
            <Sphere
                scale={0.3}
                light={light}
                position={[-15, 0, -15]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                colour={"#FFFCEC"}
            />
            <Line scale={[5, 6, 5]} rotation={[Math.PI / 2, 0, 0]} />
            <Line scale={[7, 8, 7]} rotation={[-Math.PI / 2, 0, Math.PI / 3]} />
            <Environment preset="city" />
            <PerspectiveCamera makeDefault position={[4, 0, 4]} fov={75} />
            <ambientLight intensity={1} color="#E0FFE9" />
            <pointLight
                ref={light}
                position-z={-15}
                intensity={2}
                decay={0}
                color="#5162ff"
            />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                // maxPolarAngle={Math.PI / 2}
                // minPolarAngle={Math.PI / 2}
            />
        </Suspense>
        </div>
        // </a.main>
    );
};

export default () => (
    <Canvas>
        <Scene />
    </Canvas>
);
