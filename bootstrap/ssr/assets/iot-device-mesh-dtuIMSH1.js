import { o as useTheme } from "./footer-V39x-tr3.js";
import { useMemo, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useFrame } from "@react-three/fiber";
import { Line, Ring } from "@react-three/drei";
import * as THREE from "three";
//#region resources/js/components/landing/iot-device-mesh.tsx
function IoTDeviceMesh({ mouseX, mouseY }) {
	const groupRef = useRef(null);
	const targetRotation = useRef({
		x: 0,
		y: 0
	});
	const tempP1 = useMemo(() => new THREE.Vector3(), []);
	const tempP2 = useMemo(() => new THREE.Vector3(), []);
	const tempP3 = useMemo(() => new THREE.Vector3(), []);
	const { theme } = useTheme();
	const isLight = theme === "light";
	const lineColor = isLight ? "#222222" : "#ffffff";
	const highlightColor = isLight ? "#000000" : "#ffffff";
	const pcbColor = isLight ? "#ffffff" : "#0a0a0a";
	const chipColor = isLight ? "#eaeaea" : "#111111";
	const circuitLines = useMemo(() => {
		const lines = [];
		const addPath = (startX, startY, midX, midY, endX, endY, opacity, animated = false) => {
			lines.push({
				points: [
					[
						startX,
						startY,
						.03
					],
					[
						midX,
						midY,
						.03
					],
					[
						endX,
						endY,
						.03
					]
				],
				opacity,
				animated
			});
		};
		addPath(-.5, .5, -.8, .8, -1.2, .8, .5, true);
		addPath(-.5, .4, -.9, .7, -1.2, .7, .4, true);
		addPath(-.5, .3, -1, .6, -1.2, .6, .3);
		addPath(.5, .5, .8, .8, 1.2, .8, .4, true);
		addPath(.5, .3, 1, .3, 1.4, .6, .3);
		addPath(-.5, -.5, -.8, -.8, -1.2, -.8, .4, true);
		addPath(.5, -.5, .8, -.8, 1.2, -.8, .4);
		lines.push({
			points: [
				[
					-1.8,
					1.2,
					.03
				],
				[
					-1.8,
					-1.2,
					.03
				],
				[
					1.8,
					-1.2,
					.03
				],
				[
					1.8,
					1.2,
					.03
				]
			],
			opacity: .2
		});
		return lines;
	}, []);
	const chips = useMemo(() => {
		return [
			{
				pos: [
					0,
					0,
					.05
				],
				size: [
					.8,
					.8,
					.06
				],
				color: chipColor,
				type: "cpu"
			},
			{
				pos: [
					-1.2,
					.7,
					.05
				],
				size: [
					.4,
					.6,
					.06
				],
				color: chipColor,
				type: "ram"
			},
			{
				pos: [
					-1.2,
					-.7,
					.05
				],
				size: [
					.4,
					.6,
					.06
				],
				color: chipColor,
				type: "ram"
			},
			{
				pos: [
					1.2,
					.7,
					.05
				],
				size: [
					.5,
					.5,
					.06
				],
				color: chipColor,
				type: "radio"
			},
			{
				pos: [
					1.2,
					-.7,
					.05
				],
				size: [
					.3,
					.3,
					.08
				],
				color: chipColor,
				type: "pmu"
			}
		];
	}, [chipColor]);
	const components = useMemo(() => {
		const comps = [];
		for (let i = 0; i < 20; i++) comps.push({
			pos: [
				(Math.random() - .5) * 3.4,
				(Math.random() - .5) * 2.4,
				.04
			],
			rot: [
				0,
				0,
				Math.random() > .5 ? 0 : Math.PI / 2
			],
			isCapacitor: Math.random() > .5
		});
		return comps;
	}, []);
	const packets = useMemo(() => {
		return circuitLines.filter((l) => l.animated).map((line) => {
			return {
				points: line.points,
				progress: Math.random()
			};
		});
	}, [circuitLines]);
	const ballRef = useRef(null);
	const materialRef = useRef(null);
	const ringsRef = useRef(null);
	const packetsRef = useRef(null);
	useFrame((state, delta) => {
		if (!groupRef.current) return;
		targetRotation.current.x = mouseY * .2;
		targetRotation.current.y = mouseX * .2;
		groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * .05;
		groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * .05;
		groupRef.current.rotation.z += delta * .02;
		if (ballRef.current) ballRef.current.position.z = .12 + Math.sin(state.clock.elapsedTime * 3) * .03;
		if (materialRef.current) materialRef.current.emissiveIntensity = isLight ? .8 : 2 + Math.sin(state.clock.elapsedTime * 6) * 1;
		if (ringsRef.current) ringsRef.current.children.forEach((ring, i) => {
			ring.rotation.z -= delta * (.5 + i * .2);
			ring.material.opacity = .3 + Math.sin(state.clock.elapsedTime * 2 + i) * .2;
		});
		if (packetsRef.current) packetsRef.current.children.forEach((packet, i) => {
			const data = packets[i];
			data.progress += delta * .5;
			if (data.progress > 1) data.progress = 0;
			tempP1.set(...data.points[0]);
			tempP2.set(...data.points[1]);
			tempP3.set(...data.points[2]);
			if (data.progress < .5) {
				const t = data.progress * 2;
				packet.position.copy(tempP1).lerp(tempP2, t);
			} else {
				const t = (data.progress - .5) * 2;
				packet.position.copy(tempP2).lerp(tempP3, t);
			}
		});
	});
	return /* @__PURE__ */ jsxs("group", {
		ref: groupRef,
		children: [
			/* @__PURE__ */ jsxs("mesh", {
				position: [
					0,
					0,
					-.05
				],
				children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
					4.2,
					3,
					.02
				] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
					color: isLight ? "#e0e0e0" : "#050505",
					roughness: .9,
					metalness: .1
				})]
			}),
			/* @__PURE__ */ jsxs("mesh", { children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
				4,
				2.8,
				.04
			] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color: pcbColor,
				roughness: .7,
				metalness: .6
			})] }),
			/* @__PURE__ */ jsxs("lineSegments", { children: [/* @__PURE__ */ jsx("edgesGeometry", { args: [new THREE.BoxGeometry(4, 2.8, .04)] }), /* @__PURE__ */ jsx("lineBasicMaterial", {
				color: highlightColor,
				transparent: true,
				opacity: .3
			})] }),
			circuitLines.map((line, i) => /* @__PURE__ */ jsx(Line, {
				points: line.points,
				color: lineColor,
				transparent: true,
				opacity: line.opacity,
				lineWidth: 1.5
			}, `trace-${i}`)),
			/* @__PURE__ */ jsx("group", {
				ref: packetsRef,
				children: packets.map((_, i) => /* @__PURE__ */ jsxs("mesh", { children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
					.03,
					8,
					8
				] }), /* @__PURE__ */ jsx("meshBasicMaterial", { color: highlightColor })] }, `packet-${i}`))
			}),
			chips.map((chip, i) => /* @__PURE__ */ jsxs("group", {
				position: chip.pos,
				children: [
					/* @__PURE__ */ jsxs("mesh", { children: [/* @__PURE__ */ jsx("boxGeometry", { args: chip.size }), /* @__PURE__ */ jsx("meshStandardMaterial", {
						color: chip.color,
						roughness: .4,
						metalness: .8
					})] }),
					/* @__PURE__ */ jsxs("lineSegments", { children: [/* @__PURE__ */ jsx("edgesGeometry", { args: [new THREE.BoxGeometry(...chip.size)] }), /* @__PURE__ */ jsx("lineBasicMaterial", {
						color: highlightColor,
						transparent: true,
						opacity: .4
					})] }),
					chip.type === "cpu" && /* @__PURE__ */ jsxs("group", {
						position: [
							0,
							0,
							-.02
						],
						children: [Array.from({ length: 16 }).map((_, j) => /* @__PURE__ */ jsxs("mesh", {
							position: [
								-.35 + j * .046,
								.42,
								0
							],
							children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
								.02,
								.06,
								.02
							] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
								color: "#c0c0c0",
								metalness: 1
							})]
						}, `pin-t-${j}`)), Array.from({ length: 16 }).map((_, j) => /* @__PURE__ */ jsxs("mesh", {
							position: [
								-.35 + j * .046,
								-.42,
								0
							],
							children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
								.02,
								.06,
								.02
							] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
								color: "#c0c0c0",
								metalness: 1
							})]
						}, `pin-b-${j}`))]
					})
				]
			}, `chip-${i}`)),
			components.map((comp, i) => /* @__PURE__ */ jsxs("group", {
				position: comp.pos,
				rotation: comp.rot,
				children: [
					/* @__PURE__ */ jsxs("mesh", { children: [/* @__PURE__ */ jsx("boxGeometry", { args: comp.isCapacitor ? [
						.06,
						.04,
						.04
					] : [
						.08,
						.03,
						.02
					] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
						color: comp.isCapacitor ? isLight ? "#a0a0a0" : "#444" : isLight ? "#111" : "#222",
						roughness: .5
					})] }),
					/* @__PURE__ */ jsxs("mesh", {
						position: [
							-.04,
							0,
							-.01
						],
						children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
							.02,
							.05,
							.01
						] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
							color: "silver",
							metalness: 1,
							roughness: .2
						})]
					}),
					/* @__PURE__ */ jsxs("mesh", {
						position: [
							.04,
							0,
							-.01
						],
						children: [/* @__PURE__ */ jsx("boxGeometry", { args: [
							.02,
							.05,
							.01
						] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
							color: "silver",
							metalness: 1,
							roughness: .2
						})]
					})
				]
			}, `smd-${i}`)),
			/* @__PURE__ */ jsxs("group", {
				position: [
					0,
					0,
					.08
				],
				children: [/* @__PURE__ */ jsxs("mesh", {
					ref: ballRef,
					children: [/* @__PURE__ */ jsx("sphereGeometry", { args: [
						.12,
						32,
						32
					] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
						ref: materialRef,
						color: isLight ? "#333" : "#ffffff",
						emissive: isLight ? "#111" : "#ffffff",
						emissiveIntensity: isLight ? .5 : 2,
						transparent: true,
						opacity: isLight ? .8 : .9
					})]
				}), /* @__PURE__ */ jsxs("group", {
					ref: ringsRef,
					children: [/* @__PURE__ */ jsx(Ring, {
						args: [
							.2,
							.22,
							32
						],
						position: [
							0,
							0,
							-.02
						],
						children: /* @__PURE__ */ jsx("meshBasicMaterial", {
							color: highlightColor,
							transparent: true,
							opacity: .3,
							side: THREE.DoubleSide
						})
					}), /* @__PURE__ */ jsx(Ring, {
						args: [
							.28,
							.29,
							48
						],
						position: [
							0,
							0,
							-.04
						],
						children: /* @__PURE__ */ jsx("meshBasicMaterial", {
							color: highlightColor,
							transparent: true,
							opacity: .15,
							side: THREE.DoubleSide
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("group", {
				position: [
					1.4,
					.7,
					.06
				],
				children: [/* @__PURE__ */ jsxs("mesh", {
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ jsx("cylinderGeometry", { args: [
						.02,
						.02,
						.4,
						8
					] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
						color: isLight ? "#555" : "#888",
						metalness: .9,
						roughness: .1
					})]
				}), /* @__PURE__ */ jsx(Line, {
					points: Array.from({ length: 20 }).map((_, i) => [
						.1 + Math.sin(i * .5) * .05,
						-.2 + i * .02,
						0
					]),
					color: highlightColor,
					lineWidth: 1,
					transparent: true,
					opacity: .4
				})]
			})
		]
	});
}
//#endregion
export { IoTDeviceMesh as default };

//# sourceMappingURL=iot-device-mesh-dtuIMSH1.js.map