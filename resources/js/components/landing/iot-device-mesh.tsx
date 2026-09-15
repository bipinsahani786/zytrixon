import { Line, Sphere, Box, Cylinder, Ring } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/components/landing/theme-provider';

interface IoTDeviceMeshProps {
    mouseX: number;
    mouseY: number;
}

export default function IoTDeviceMesh({ mouseX, mouseY }: IoTDeviceMeshProps) {
    const groupRef = useRef<THREE.Group>(null);
    const targetRotation = useRef({ x: 0, y: 0 });
    const tempP1 = useMemo(() => new THREE.Vector3(), []);
    const tempP2 = useMemo(() => new THREE.Vector3(), []);
    const tempP3 = useMemo(() => new THREE.Vector3(), []);
    const { theme } = useTheme();
    const isLight = theme === 'light';

    // Core colors based on theme
    const lineColor = isLight ? '#222222' : '#ffffff';
    const highlightColor = isLight ? '#000000' : '#ffffff';
    const pcbColor = isLight ? '#ffffff' : '#0a0a0a';
    const chipColor = isLight ? '#eaeaea' : '#111111';

    // Complex angled traces
    const circuitLines = useMemo(() => {
        const lines: {
            points: [number, number, number][];
            opacity: number;
            animated?: boolean;
        }[] = [];

        // Helper to add angled paths
        const addPath = (
            startX: number,
            startY: number,
            midX: number,
            midY: number,
            endX: number,
            endY: number,
            opacity: number,
            animated = false,
        ) => {
            lines.push({
                points: [
                    [startX, startY, 0.03],
                    [midX, midY, 0.03],
                    [endX, endY, 0.03],
                ],
                opacity,
                animated,
            });
        };

        // Main data bus (CPU to memory)
        addPath(-0.5, 0.5, -0.8, 0.8, -1.2, 0.8, 0.5, true);
        addPath(-0.5, 0.4, -0.9, 0.7, -1.2, 0.7, 0.4, true);
        addPath(-0.5, 0.3, -1.0, 0.6, -1.2, 0.6, 0.3);

        // CPU to comms
        addPath(0.5, 0.5, 0.8, 0.8, 1.2, 0.8, 0.4, true);
        addPath(0.5, 0.3, 1.0, 0.3, 1.4, 0.6, 0.3);

        // Lower bus
        addPath(-0.5, -0.5, -0.8, -0.8, -1.2, -0.8, 0.4, true);
        addPath(0.5, -0.5, 0.8, -0.8, 1.2, -0.8, 0.4);

        // Edge traces
        lines.push({
            points: [
                [-1.8, 1.2, 0.03],
                [-1.8, -1.2, 0.03],
                [1.8, -1.2, 0.03],
                [1.8, 1.2, 0.03],
            ],
            opacity: 0.2,
        });

        return lines;
    }, []);

    // Complex chips
    const chips = useMemo(() => {
        return [
            // Main CPU
            {
                pos: [0, 0, 0.05],
                size: [0.8, 0.8, 0.06],
                color: chipColor,
                type: 'cpu',
            },
            // Memory ICs
            {
                pos: [-1.2, 0.7, 0.05],
                size: [0.4, 0.6, 0.06],
                color: chipColor,
                type: 'ram',
            },
            {
                pos: [-1.2, -0.7, 0.05],
                size: [0.4, 0.6, 0.06],
                color: chipColor,
                type: 'ram',
            },
            // Comms / Radio
            {
                pos: [1.2, 0.7, 0.05],
                size: [0.5, 0.5, 0.06],
                color: chipColor,
                type: 'radio',
            },
            // Power management
            {
                pos: [1.2, -0.7, 0.05],
                size: [0.3, 0.3, 0.08],
                color: chipColor,
                type: 'pmu',
            },
        ];
    }, [chipColor]);

    // Resistors and capacitors
    const components = useMemo(() => {
        const comps = [];

        for (let i = 0; i < 20; i++) {
            comps.push({
                pos: [
                    (Math.random() - 0.5) * 3.4,
                    (Math.random() - 0.5) * 2.4,
                    0.04,
                ],
                rot: [0, 0, Math.random() > 0.5 ? 0 : Math.PI / 2],
                isCapacitor: Math.random() > 0.5,
            });
        }

        return comps;
    }, []);

    // Data packets for animation
    const packets = useMemo(() => {
        return circuitLines
            .filter((l) => l.animated)
            .map((line) => {
                return { points: line.points, progress: Math.random() };
            });
    }, [circuitLines]);

    const ballRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial>(null);
    const ringsRef = useRef<THREE.Group>(null);
    const packetsRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (!groupRef.current) {
            return;
        }

        // Smooth parallax based on mouse
        targetRotation.current.x = mouseY * 0.2;
        targetRotation.current.y = mouseX * 0.2;

        groupRef.current.rotation.x +=
            (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
        groupRef.current.rotation.y +=
            (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;

        // Base continuous rotation
        groupRef.current.rotation.z += delta * 0.02;

        // Animate central glowing core
        if (ballRef.current) {
            ballRef.current.position.z =
                0.12 + Math.sin(state.clock.elapsedTime * 3) * 0.03;
        }

        if (materialRef.current) {
            materialRef.current.emissiveIntensity = isLight
                ? 0.8
                : 2 + Math.sin(state.clock.elapsedTime * 6) * 1;
        }

        // Animate rings around CPU
        if (ringsRef.current) {
            ringsRef.current.children.forEach((ring, i) => {
                ring.rotation.z -= delta * (0.5 + i * 0.2);
                (ring as any).material.opacity =
                    0.3 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2;
            });
        }

        // Animate data packets
        if (packetsRef.current) {
            packetsRef.current.children.forEach((packet, i) => {
                const data = packets[i];
                data.progress += delta * 0.5;

                if (data.progress > 1) {
                    data.progress = 0;
                }

                // Simple interpolation along the 3 points (A -> B -> C)
                // Simple interpolation along the 3 points without object allocation
                tempP1.set(...data.points[0]);
                tempP2.set(...data.points[1]);
                tempP3.set(...data.points[2]);

                if (data.progress < 0.5) {
                    const t = data.progress * 2;
                    packet.position.copy(tempP1).lerp(tempP2, t);
                } else {
                    const t = (data.progress - 0.5) * 2;
                    packet.position.copy(tempP2).lerp(tempP3, t);
                }
            });
        }
    });

    return (
        <group ref={groupRef}>
            {/* Multi-layer PCB */}
            <mesh position={[0, 0, -0.05]}>
                <boxGeometry args={[4.2, 3.0, 0.02]} />
                <meshStandardMaterial
                    color={isLight ? '#e0e0e0' : '#050505'}
                    roughness={0.9}
                    metalness={0.1}
                />
            </mesh>
            <mesh>
                <boxGeometry args={[4.0, 2.8, 0.04]} />
                <meshStandardMaterial
                    color={pcbColor}
                    roughness={0.7}
                    metalness={0.6}
                />
            </mesh>

            {/* PCB Edge Details */}
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(4.0, 2.8, 0.04)]} />
                <lineBasicMaterial
                    color={highlightColor}
                    transparent
                    opacity={0.3}
                />
            </lineSegments>

            {/* Traces */}
            {circuitLines.map((line, i) => (
                <Line
                    key={`trace-${i}`}
                    points={line.points}
                    color={lineColor}
                    transparent
                    opacity={line.opacity}
                    lineWidth={1.5}
                />
            ))}

            {/* Moving Data Packets */}
            <group ref={packetsRef}>
                {packets.map((_, i) => (
                    <mesh key={`packet-${i}`}>
                        <sphereGeometry args={[0.03, 8, 8]} />
                        <meshBasicMaterial color={highlightColor} />
                    </mesh>
                ))}
            </group>

            {/* Microchips & Processors */}
            {chips.map((chip, i) => (
                <group
                    key={`chip-${i}`}
                    position={chip.pos as [number, number, number]}
                >
                    <mesh>
                        <boxGeometry
                            args={chip.size as [number, number, number]}
                        />
                        <meshStandardMaterial
                            color={chip.color}
                            roughness={0.4}
                            metalness={0.8}
                        />
                    </mesh>
                    <lineSegments>
                        <edgesGeometry
                            args={[
                                new THREE.BoxGeometry(
                                    ...(chip.size as [number, number, number]),
                                ),
                            ]}
                        />
                        <lineBasicMaterial
                            color={highlightColor}
                            transparent
                            opacity={0.4}
                        />
                    </lineSegments>
                    {/* Chip Pins */}
                    {chip.type === 'cpu' && (
                        <group position={[0, 0, -0.02]}>
                            {Array.from({ length: 16 }).map((_, j) => (
                                <mesh
                                    key={`pin-t-${j}`}
                                    position={[-0.35 + j * 0.046, 0.42, 0]}
                                >
                                    <boxGeometry args={[0.02, 0.06, 0.02]} />
                                    <meshStandardMaterial
                                        color="#c0c0c0"
                                        metalness={1}
                                    />
                                </mesh>
                            ))}
                            {Array.from({ length: 16 }).map((_, j) => (
                                <mesh
                                    key={`pin-b-${j}`}
                                    position={[-0.35 + j * 0.046, -0.42, 0]}
                                >
                                    <boxGeometry args={[0.02, 0.06, 0.02]} />
                                    <meshStandardMaterial
                                        color="#c0c0c0"
                                        metalness={1}
                                    />
                                </mesh>
                            ))}
                        </group>
                    )}
                </group>
            ))}

            {/* Small SMD Components (Resistors/Capacitors) */}
            {components.map((comp, i) => (
                <group
                    key={`smd-${i}`}
                    position={comp.pos as [number, number, number]}
                    rotation={comp.rot as [number, number, number]}
                >
                    <mesh>
                        <boxGeometry
                            args={
                                comp.isCapacitor
                                    ? [0.06, 0.04, 0.04]
                                    : [0.08, 0.03, 0.02]
                            }
                        />
                        <meshStandardMaterial
                            color={
                                comp.isCapacitor
                                    ? isLight
                                        ? '#a0a0a0'
                                        : '#444'
                                    : isLight
                                      ? '#111'
                                      : '#222'
                            }
                            roughness={0.5}
                        />
                    </mesh>
                    {/* Solder pads */}
                    <mesh position={[-0.04, 0, -0.01]}>
                        <boxGeometry args={[0.02, 0.05, 0.01]} />
                        <meshStandardMaterial
                            color="silver"
                            metalness={1}
                            roughness={0.2}
                        />
                    </mesh>
                    <mesh position={[0.04, 0, -0.01]}>
                        <boxGeometry args={[0.02, 0.05, 0.01]} />
                        <meshStandardMaterial
                            color="silver"
                            metalness={1}
                            roughness={0.2}
                        />
                    </mesh>
                </group>
            ))}

            {/* Central CPU Core Glow & Rings */}
            <group position={[0, 0, 0.08]}>
                <mesh ref={ballRef}>
                    <sphereGeometry args={[0.12, 32, 32]} />
                    <meshStandardMaterial
                        ref={materialRef}
                        color={isLight ? '#333' : '#ffffff'}
                        emissive={isLight ? '#111' : '#ffffff'}
                        emissiveIntensity={isLight ? 0.5 : 2}
                        transparent
                        opacity={isLight ? 0.8 : 0.9}
                    />
                </mesh>
                <group ref={ringsRef}>
                    <Ring args={[0.2, 0.22, 32]} position={[0, 0, -0.02]}>
                        <meshBasicMaterial
                            color={highlightColor}
                            transparent
                            opacity={0.3}
                            side={THREE.DoubleSide}
                        />
                    </Ring>
                    <Ring args={[0.28, 0.29, 48]} position={[0, 0, -0.04]}>
                        <meshBasicMaterial
                            color={highlightColor}
                            transparent
                            opacity={0.15}
                            side={THREE.DoubleSide}
                        />
                    </Ring>
                </group>
            </group>

            {/* Radio Antenna Details */}
            <group position={[1.4, 0.7, 0.06]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
                    <meshStandardMaterial
                        color={isLight ? '#555' : '#888'}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>
                {/* Sine wave decoration for antenna */}
                <Line
                    points={
                        Array.from({ length: 20 }).map((_, i) => [
                            0.1 + Math.sin(i * 0.5) * 0.05,
                            -0.2 + i * 0.02,
                            0,
                        ]) as [number, number, number][]
                    }
                    color={highlightColor}
                    lineWidth={1}
                    transparent
                    opacity={0.4}
                />
            </group>
        </group>
    );
}
