"use client";

import { Float, PresentationControls, RoundedBox, Html } from "@react-three/drei";

export default function Scene() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <PresentationControls
                global
                rotation={[0, -0.3, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
                <group position={[0, 0, 0]}>
                    {/* Phone Body - Using lower smoothness for LOD/Performance */}
                    <RoundedBox args={[2.5, 5, 0.2]} radius={0.2} smoothness={2}>
                        <meshStandardMaterial color="#2D2D2D" roughness={0.1} metalness={0.8} />
                    </RoundedBox>
                    {/* Screen Bezels */}
                    <RoundedBox args={[2.3, 4.8, 0.21]} radius={0.15} position={[0, 0, 0.01]} smoothness={2}>
                        <meshStandardMaterial color="#000000" />
                    </RoundedBox>
                    {/* Iframe Screen using Drei Html - Scaled specifically for the [2.3, 4.8] box */}
                    <Html
                        transform
                        distanceFactor={1.4}
                        position={[0, 0, 0.12]}
                        style={{
                            width: "385px",
                            height: "800px",
                            borderRadius: "24px",
                            overflow: "hidden",
                            backgroundColor: "#111",
                            pointerEvents: "auto",
                            opacity: 1,
                        }}
                    >
                        <iframe
                            src="https://hochu-drugogo.vercel.app"
                            style={{ width: "100%", height: "100%", border: "none" }}
                            title="Gastro OS Demo"
                        />
                    </Html>
                </group>
            </PresentationControls>
        </Float>
    );
}
