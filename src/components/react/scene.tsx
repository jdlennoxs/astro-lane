import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import Sphere from "./sphere";
import { Suspense, useRef, useState } from "react";
import type { PointLight as PointLightType } from "three";

const Scene = () => {
    const light = useRef<PointLightType>(null);

    const [hovered, setHovered] = useState(false);

    // NOTE: this returns Three.js objects ONLY. It renders inside R3F's scene
    // graph, so DOM elements (<div>, <span>, …) throw
    // "X is not part of the THREE namespace". Anything HTML belongs on the
    // Canvas wrapper in the default export below.
    return (
        <>
            <Suspense fallback={null}>
                {/* drei's preset="*" fetches its HDR from rawcdn.githack.com, which
                    now returns 403 for every file — suspend-react rejects inside
                    <Suspense> and the whole scene stays unmounted (blank canvas,
                    no error). Use an explicit, working URL instead. To go fully
                    offline, download an .hdr into public/ and use
                    files="/hdri/your.hdr". */}
                <Environment files="https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/hdri/dikhololo_night_1k.hdr" />
                <Sphere
                    light={light}
                    hovered={hovered}
                    setHovered={setHovered}
                />

                <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={80} />
                <ambientLight intensity={1} color="#E0FFE9" />
                <pointLight
                    ref={light}
                    position-z={5}
                    intensity={4}
                    decay={0}
                    color="#5162ff"
                />
            </Suspense>
        </>
    );
};

export default () => (
    // The Canvas fills its parent, so the parent must have a resolved height —
    // a percentage height against an auto-height ancestor resolves to 0 and
    // the scene renders invisibly.
    //
    // The dark gradient band behind the hero is NOT here: it has to be a direct
    // child of <body> to escape <main>'s max-w-7xl + px-*. See Layout.astro.
    <div className="relative h-[40vh] w-full mb-20">
        <Canvas>
            <Scene />
        </Canvas>
    </div>
);
