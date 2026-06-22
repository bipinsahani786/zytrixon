import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface IoTDeviceMeshProps {
    mouseX: number;
    mouseY: number;
}

export default function IoTDeviceMesh({ mouseX, mouseY }: IoTDeviceMeshProps) {
    const groupRef = useRef<THREE.Group>(null);
    const targetRotation = useRef({ x: 0, y: 0 });

    // Create circuit board geometry
    const circuitLines = useMemo(() => {
        const points: THREE.Vector3[][] = [];

        // Horizontal traces
        for (let i = -2; i <= 2; i++) {
            const y = i * 0.5;
            const line = [
                new THREE.Vector3(-1.8, y, 0.02),
                new THREE.Vector3(1.8, y, 0.02),
            ];
            points.push(line);
        }

        // Vertical traces
        for (let i = -3; i <= 3; i++) {
            const x = i * 0.6;
            const line = [
                new THREE.Vector3(x, -1.2, 0.02),
                new THREE.Vector3(x, 1.2, 0.02),
            ];
            points.push(line);
        }

        // Diagonal traces for visual interest
        points.push([
            new THREE.Vector3(-1.5, -0.8, 0.02),
            new THREE.Vector3(-0.5, 0.2, 0.02),
        ]);
        points.push([
            new THREE.Vector3(0.5, -0.2, 0.02),
            new THREE.Vector3(1.5, 0.8, 0.02),
        ]);

        return points;
    }, []);

    // Create chip positions
    const chipPositions = useMemo(() => {
        return [
            { pos: [0, 0, 0.05] as const, size: [0.6, 0.6, 0.08] as const },
            { pos: [-1.2, 0.7, 0.04] as const, size: [0.35, 0.25, 0.06] as const },
            { pos: [1.2, -0.5, 0.04] as const, size: [0.3, 0.3, 0.06] as const },
            { pos: [-0.8, -0.8, 0.04] as const, size: [0.25, 0.4, 0.06] as const },
            { pos: [0.9, 0.6, 0.04] as const, size: [0.4, 0.2, 0.06] as const },
        ];
    }, []);

    // Create node positions (connection points)
    const nodePositions = useMemo(() => {
        const nodes: [number, number, number][] = [];
        for (let i = 0; i < 15; i++) {
            nodes.push([
                (Math.random() - 0.5) * 3.2,
                (Math.random() - 0.5) * 2.2,
                0.03,
            ]);
        }
        return nodes;
    }, []);

    useFrame((_, delta) => {
        if (!groupRef.current) return;

        // Mouse parallax tilt — subtle, not full rotation
        targetRotation.current.x = mouseY * 0.15;
        targetRotation.current.y = mouseX * 0.15;

        groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
        groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;

        // Slow auto-rotation
        groupRef.current.rotation.z += delta * 0.05;
    });

    return (
        <group ref={groupRef}>
            {/* Main PCB board */}
            <mesh>
                <boxGeometry args={[4, 2.8, 0.04]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    roughness={0.8}
                    metalness={0.3}
                />
            </mesh>

            {/* PCB edge highlight */}
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(4, 2.8, 0.04)]} />
                <lineBasicMaterial color="#00F5D4" transparent opacity={0.4} />
            </lineSegments>

            {/* Circuit traces */}
            {circuitLines.map((points, i) => (
                <line key={`trace-${i}`}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                            count={points.length}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial
                        color="#00F5D4"
                        transparent
                        opacity={0.15 + (i % 3) * 0.08}
                    />
                </line>
            ))}

            {/* IC Chips */}
            {chipPositions.map((chip, i) => (
                <group key={`chip-${i}`} position={chip.pos as unknown as THREE.Vector3Tuple}>
                    <mesh>
                        <boxGeometry args={[...chip.size]} />
                        <meshStandardMaterial
                            color={i === 0 ? '#111' : '#0d0d0d'}
                            roughness={0.6}
                            metalness={0.5}
                        />
                    </mesh>
                    <lineSegments>
                        <edgesGeometry args={[new THREE.BoxGeometry(...chip.size)]} />
                        <lineBasicMaterial color="#00F5D4" transparent opacity={i === 0 ? 0.6 : 0.25} />
                    </lineSegments>
                </group>
            ))}

            {/* Connection nodes (small spheres) */}
            {nodePositions.map((pos, i) => (
                <mesh key={`node-${i}`} position={pos}>
                    <sphereGeometry args={[0.04, 8, 8]} />
                    <meshStandardMaterial
                        color="#00F5D4"
                        emissive="#00F5D4"
                        emissiveIntensity={0.6}
                    />
                </mesh>
            ))}

            {/* Central LED glow */}
            <mesh position={[0, 0, 0.12]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial
                    color="#00F5D4"
                    emissive="#00F5D4"
                    emissiveIntensity={2}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Antenna element */}
            <mesh position={[1.8, 1.2, 0.2]}>
                <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
                <meshStandardMaterial
                    color="#333"
                    roughness={0.4}
                    metalness={0.8}
                />
            </mesh>
            <mesh position={[1.8, 1.45, 0.2]}>
                <sphereGeometry args={[0.04, 8, 8]} />
                <meshStandardMaterial
                    color="#00F5D4"
                    emissive="#00F5D4"
                    emissiveIntensity={1.5}
                />
            </mesh>
        </group>
    );
}
