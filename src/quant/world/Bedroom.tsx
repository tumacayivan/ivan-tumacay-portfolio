import * as THREE from "three";
import { useMemo } from "react";
import { makeWindow } from "./textures";

type Props = {
  screens: THREE.Texture[];
  dawn?: boolean;
} & JSX.IntrinsicElements["group"];

const Monitor = ({ tex, w = 0.92, h = 0.52, ...rest }: { tex: THREE.Texture; w?: number; h?: number } & JSX.IntrinsicElements["group"]) => (
  <group {...rest}>
    <mesh>
      <boxGeometry args={[w + 0.05, h + 0.05, 0.035]} />
      <meshStandardMaterial color="#07090c" roughness={0.4} metalness={0.6} />
    </mesh>
    <mesh position={[0, 0, 0.019]}>
      <planeGeometry args={[w, h]} />
      <meshBasicMaterial map={tex} toneMapped={false} />
    </mesh>
  </group>
);

const Box = ({ args, color = "#121418", rough = 0.85, metal = 0.1, ...rest }: { args: [number, number, number]; color?: string; rough?: number; metal?: number } & Omit<JSX.IntrinsicElements["mesh"], "args">) => (
  <mesh {...rest}>
    <boxGeometry args={args} />
    <meshStandardMaterial color={color} roughness={rough} metalness={metal} />
  </mesh>
);

/**
 * The bedroom desk. Built once, used twice: at night for the cold open, and
 * again at dawn for the final cut (the camera comes out of the same screen).
 */
const Bedroom = ({ screens, dawn = false, ...group }: Props) => {
  const windowTex = useMemo(() => makeWindow(dawn), [dawn]);
  const [s0, s1, s2, s3] = screens;

  return (
    <group {...group}>
      {/* Room shell — single-sided, so the camera can leave through the back */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0.6]}>
        <planeGeometry args={[7, 6.4]} />
        <meshStandardMaterial color={dawn ? "#2a211c" : "#14110f"} roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.6, -2]}>
        <planeGeometry args={[7, 3.2]} />
        <meshStandardMaterial color={dawn ? "#2c2a33" : "#0b0f16"} roughness={1} />
      </mesh>
      <mesh position={[-3.2, 1.6, 0.6]} rotation-y={Math.PI / 2}>
        <planeGeometry args={[6.4, 3.2]} />
        <meshStandardMaterial color={dawn ? "#2a2830" : "#0a0d14"} roughness={1} />
      </mesh>

      {/* Window */}
      <group position={[-3.18, 1.65, 0.1]} rotation-y={Math.PI / 2}>
        <mesh>
          <planeGeometry args={[1.8, 1.3]} />
          <meshBasicMaterial map={windowTex} toneMapped={false} />
        </mesh>
        {[
          [0, 0.68, 1.9, 0.06],
          [0, -0.68, 1.9, 0.06],
          [-0.93, 0, 0.06, 1.42],
          [0.93, 0, 0.06, 1.42],
          [0, 0, 0.04, 1.3],
        ].map(([x, y, w, h], i) => (
          <mesh key={i} position={[x, y, 0.02]}>
            <boxGeometry args={[w, h, 0.05]} />
            <meshStandardMaterial color="#1a1c22" roughness={0.6} />
          </mesh>
        ))}
      </group>

      {/* Desk */}
      <Box args={[2.7, 0.05, 0.85]} position={[0, 0.75, -1.38]} color="#1b1714" rough={0.6} />
      {[
        [-1.28, -1.72],
        [1.28, -1.72],
        [-1.28, -1.02],
        [1.28, -1.02],
      ].map(([x, z], i) => (
        <Box key={i} args={[0.05, 0.75, 0.05]} position={[x, 0.375, z]} color="#0d0e10" metal={0.6} rough={0.4} />
      ))}

      {/* Screens: the centre one is the doorway into the film */}
      <Monitor tex={s0} position={[0, 1.18, -1.5]} />
      <Monitor tex={s1} position={[-1.0, 1.18, -1.36]} rotation-y={0.4} />
      <Monitor tex={s2} position={[1.0, 1.18, -1.36]} rotation-y={-0.4} />
      <Monitor tex={s3} position={[0, 1.76, -1.58]} rotation-x={0.12} w={0.8} h={0.45} />
      <Box args={[0.04, 0.4, 0.04]} position={[0, 0.95, -1.56]} color="#0b0c0e" metal={0.7} />
      <Box args={[0.3, 0.015, 0.2]} position={[0, 0.78, -1.52]} color="#0b0c0e" metal={0.7} />

      {/* Keyboard, mouse, mug, notebook */}
      <Box args={[0.48, 0.02, 0.15]} position={[0, 0.785, -1.08]} color="#0e1013" />
      <mesh position={[0, 0.797, -1.08]}>
        <planeGeometry args={[0.46, 0.13]} />
        <meshBasicMaterial color="#1a8f6a" transparent opacity={0.18} toneMapped={false} />
      </mesh>
      <Box args={[0.06, 0.025, 0.1]} position={[0.36, 0.785, -1.06]} color="#0e1013" />
      <mesh position={[-0.55, 0.83, -1.05]}>
        <cylinderGeometry args={[0.045, 0.04, 0.1, 20]} />
        <meshStandardMaterial color={dawn ? "#d9d2c5" : "#2b2e35"} roughness={0.5} />
      </mesh>
      <Box args={[0.28, 0.015, 0.2]} position={[-0.85, 0.785, -1.1]} rotation-y={0.25} color="#c9c1b0" rough={0.95} />

      {/* Desk lamp */}
      <Box args={[0.14, 0.02, 0.14]} position={[-1.15, 0.785, -1.6]} color="#0c0c0c" />
      <Box args={[0.02, 0.5, 0.02]} position={[-1.15, 1.03, -1.6]} color="#0c0c0c" metal={0.8} />
      <mesh position={[-1.08, 1.28, -1.5]} rotation-x={0.6}>
        <coneGeometry args={[0.1, 0.14, 24, 1, true]} />
        <meshStandardMaterial color="#121212" side={THREE.DoubleSide} />
      </mesh>
      <pointLight position={[-1.05, 1.18, -1.42]} color={dawn ? "#ffcf99" : "#ffa859"} intensity={dawn ? 0.6 : 2.4} distance={3} decay={2} />

      {/* PC with a lit seam */}
      <Box args={[0.22, 0.5, 0.48]} position={[1.1, 0.25 + 0.0, -1.38]} color="#0a0b0e" metal={0.5} rough={0.4} />
      <mesh position={[0.988, 0.25, -1.38]} rotation-y={-Math.PI / 2}>
        <planeGeometry args={[0.4, 0.012]} />
        <meshBasicMaterial color="#35f0a0" toneMapped={false} />
      </mesh>

      {/* Chair */}
      <group position={[-0.95, 0, -0.15]} rotation-y={0.7}>
      <Box args={[0.52, 0.08, 0.5]} position={[0, 0.5, 0]} color="#101114" />
      <Box args={[0.5, 0.72, 0.07]} position={[0, 0.94, 0.27]} rotation-x={-0.12} color="#101114" />
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.45, 10]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.3} />
      </mesh>
      </group>

      {/* The bed nobody's sleeping in */}
      <Box args={[1.5, 0.32, 2.1]} position={[2.35, 0.16, 0.35]} color="#121318" />
      <Box args={[1.42, 0.16, 2.0]} position={[2.35, 0.4, 0.35]} color={dawn ? "#bdb6ab" : "#23262e"} />
      <Box args={[1.44, 0.08, 1.2]} position={[2.35, 0.5, 0.75]} color={dawn ? "#5b6a7f" : "#141a26"} rough={1} />
      <Box args={[0.6, 0.12, 0.35]} position={[2.35, 0.54, -0.45]} color={dawn ? "#e6e0d6" : "#2c3039"} />

      {/* Light */}
      <pointLight position={[0, 1.25, -0.8]} color={dawn ? "#bdeeff" : "#4fe0b8"} intensity={dawn ? 2 : 4.5} distance={5} decay={2} />
      <pointLight position={[-2.6, 1.8, 0.2]} color={dawn ? "#ff9a5a" : "#5b7cff"} intensity={dawn ? 22 : 2.5} distance={dawn ? 10 : 7} decay={2} />
      <ambientLight intensity={dawn ? 0.55 : 0.12} />
      {dawn && <hemisphereLight args={["#ffb27a", "#2a1a22", 0.6]} />}
    </group>
  );
};

export default Bedroom;
