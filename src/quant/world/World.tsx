import * as THREE from "three";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette, Noise, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { LAST_P, story, itbExhibits, deskBuilds, rangeBuilds } from "../story";
import { C, makeScreen, rng } from "./textures";
import Bedroom from "./Bedroom";
import { Candles, Desk, Machine, Network, Range, Signal, Stack } from "./SetPieces";

/* ------------------------------------------------------------------ */
/* The shot list. One key every half act: x.0 is a transition, x.5 is  */
/* the frame the act's copy is read against.                           */
/* ------------------------------------------------------------------ */

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const KEYS: [THREE.Vector3, THREE.Vector3][] = [
  [V(1.8, 1.6, 2.6), V(-0.2, 1.1, -1.2)], // 0.0  wide on the desk, 3am
  [V(0.45, 1.32, 0.9), V(0, 1.18, -1.5)], // 0.5  push in on the centre screen
  [V(0, 1.2, -4), V(0, 1.1, -12)], //         1.0  through the glass
  [V(3.2, 2.4, -12), V(0, 0.9, -20)], //      1.5  the signal
  [V(1.5, 3.5, -25), V(0, 1, -36)], //        2.0
  [V(-7, 12, -26), V(0, 0, -38)], //         2.5  over the stack
  [V(2.25, 3.4, -48), V(0, 1.4, -62)], //     3.0
  [V(2.25, 3.9, -51), V(-0.5, 1.2, -68)], //  3.5  over the candle skyline
  [V(2.5, 2.4, -77), V(0, 1.5, -90)], //      4.0
  [V(8.5, 2.8, -85), V(0, 1.5, -92)], //      4.5  beside the network
  [V(4, 3.6, -101), V(0, 1.6, -114)], //      5.0
  [V(0, 1.9, -106), V(0, 1.6, -116)], //      5.5  facing the core
  [V(-3, 5.5, -124), V(0, 2, -140)], //       6.0  over the core
  [V(-6.5, 3.6, -133), V(0, 2, -142)], //     6.5  the desk
  [V(-1.5, 2.4, -146), V(0, 2, -158)], //     7.0
  [V(0, 2, -152), V(0, 2, -165)], //          7.5  into the helix
  [V(-5.5, 2.6, -181.5), V(0, 1.2, -177)], // 8.0  swing round the set
  [V(-1.3, 1.5, -179.8), V(0.2, 1.15, -176.8)], // 8.5  dawn, behind the empty chair
];
const posCurve = new THREE.CatmullRomCurve3(KEYS.map((k) => k[0]), false, "centripetal");
const lookCurve = new THREE.CatmullRomCurve3(KEYS.map((k) => k[1]), false, "centripetal");

const NIGHT = new THREE.Color(C.void);
const DAWN = new THREE.Color("#1d1419");
const SCREEN_A = -1.5; // centre monitor, night
const SCREEN_B = -176.5; // centre monitor, dawn (room is turned around)

const Rig = ({ reduced, roomA, roomB }: { reduced: boolean; roomA: React.RefObject<THREE.Group>; roomB: React.RefObject<THREE.Group> }) => {
  const { camera, scene } = useThree();
  const bg = useMemo(() => new THREE.Color(), []);
  const look = useMemo(() => new THREE.Vector3(), []);
  const pos = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }, dt) => {
    const k = 1 - Math.exp(-dt * (reduced ? 8 : 2.6));
    story.p += (story.target - story.p) * k;
    const t = THREE.MathUtils.clamp(story.p / LAST_P, 0, 1);
    posCurve.getPoint(t, pos);
    lookCurve.getPoint(t, look);
    if (!reduced) {
      const s = clock.elapsedTime;
      pos.x += Math.sin(s * 0.31) * 0.06 + story.mx * 0.25;
      pos.y += Math.sin(s * 0.47) * 0.04 + story.my * 0.12;
    }
    camera.position.copy(pos);
    camera.lookAt(look);

    // Flash white-green as the lens passes through the first monitor
    story.flash = Math.max(0, 1 - Math.abs(pos.z - SCREEN_A) / 0.7);

    // Night lifts into dawn over the last act
    const dawn = THREE.MathUtils.smoothstep(story.p, 7.6, 8.4);
    bg.lerpColors(NIGHT, DAWN, dawn);
    if (scene.fog) (scene.fog as THREE.FogExp2).color.copy(bg);
    (scene.background as THREE.Color | null)?.copy(bg);

    if (roomA.current) roomA.current.visible = pos.z > SCREEN_A - 1.2 || story.p < 1;
    if (roomB.current) roomB.current.visible = story.p > 7.55;
  });
  return null;
};

/** The price line: one unbroken thread from the first screen to the last. */
const Thread = () => {
  const { geo, curve, segs, radial } = useMemo(() => {
    const r = rng(1998);
    const pts: THREE.Vector3[] = [];
    let y = 0;
    const N = 72;
    for (let i = 0; i <= N; i++) {
      const f = i / N;
      const z = SCREEN_A - 0.05 + (SCREEN_B - SCREEN_A + 0.1) * f;
      y += (r() - 0.48) * 0.5;
      y = THREE.MathUtils.clamp(y, -0.7, 1.2);
      const env = Math.sin(f * Math.PI); // pinned to both screens
      pts.push(new THREE.Vector3(Math.sin(f * 23) * 0.5 * env, 1.18 + y * env, z));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const segs = 1600;
    const radial = 6;
    return { geo: new THREE.TubeGeometry(curve, segs, 0.014, radial, false), curve, segs, radial };
  }, []);
  const head = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.PointLight>(null);
  const len = SCREEN_A - SCREEN_B;

  useFrame(({ camera, clock }) => {
    const f = THREE.MathUtils.clamp((SCREEN_A - camera.position.z + 14) / len, 0, 1);
    geo.setDrawRange(0, Math.floor(f * segs) * radial * 6);
    const p = curve.getPointAt(Math.max(0.0005, f));
    head.current!.position.copy(p);
    head.current!.scale.setScalar(1 + Math.sin(clock.elapsedTime * 6) * 0.25);
    halo.current!.position.copy(p);
  });

  return (
    <group>
      <mesh geometry={geo}>
        <meshBasicMaterial color={C.bull} toneMapped={false} />
      </mesh>
      <mesh ref={head}>
        <sphereGeometry args={[0.05, 16, 12]} />
        <meshBasicMaterial color={C.amber} toneMapped={false} />
      </mesh>
      <pointLight ref={halo} color={C.amber} intensity={3} distance={5} />
    </group>
  );
};

const Scene = ({ lite, reduced }: { lite: boolean; reduced: boolean }) => {
  const screens = useMemo(
    () => [
      makeScreen("candles", 3, "XAUUSD · M5"),
      makeScreen("equity", 8, "ITB-001"),
      makeScreen("book", 5, "US30 · DOM"),
      makeScreen("candles", 12, "NAS100 · M1"),
    ],
    [],
  );
  useEffect(() => {
    const id = window.setInterval(() => screens.forEach((s) => s.tick()), 240);
    return () => window.clearInterval(id);
  }, [screens]);
  const tex = screens.map((s) => s.tex);
  const roomA = useRef<THREE.Group>(null);
  const roomB = useRef<THREE.Group>(null);

  return (
    <>
      <color attach="background" args={[C.void]} />
      <fogExp2 attach="fog" args={[C.void, 0.042]} />
      <Rig reduced={reduced} roomA={roomA} roomB={roomB} />
      <group ref={roomA}>
        <Bedroom screens={tex} />
      </group>
      <group ref={roomB} visible={false}>
        <Bedroom screens={tex} dawn position={[0, 0, -178]} rotation-y={Math.PI} />
      </group>
      <Thread />
      <Signal z={-20} />
      <Stack z={-38} lite={lite} />
      <Candles z={-66} lite={lite} />
      <Network z={-92} lite={lite} />
      <Suspense fallback={null}>
        <Machine z={-116} images={itbExhibits.map((e) => e.image)} />
      </Suspense>
      <Suspense fallback={null}>
        <Desk z={-142} lite={lite} images={deskBuilds.map((d) => d.image)} />
      </Suspense>
      <Suspense fallback={null}>
        <Range z={-152} images={rangeBuilds.map((d) => d.image)} />
      </Suspense>
      {!lite && (
        <EffectComposer multisampling={0}>
          <Bloom mipmapBlur intensity={1.05} luminanceThreshold={0.32} luminanceSmoothing={0.2} radius={0.72} />
          <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={new THREE.Vector2(0.0006, 0.0004)} radialModulation={false} modulationOffset={0} />
          <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.18} />
          <Vignette eskil={false} offset={0.22} darkness={0.85} />
        </EffectComposer>
      )}
    </>
  );
};

const World = () => {
  const lite = useMemo(
    () => typeof window !== "undefined" && (window.matchMedia("(max-width: 820px)").matches || window.matchMedia("(pointer: coarse)").matches),
    [],
  );
  const reduced = useMemo(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  return (
    <div aria-hidden className="q-world">
      <Canvas
        dpr={lite ? [1, 1.25] : [1, 1.75]}
        gl={{ antialias: !lite, powerPreference: "high-performance" }}
        camera={{ fov: lite ? 62 : 46, near: 0.05, far: 90, position: [1.8, 1.6, 2.6] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
        }}
      >
        <Scene lite={lite} reduced={reduced} />
      </Canvas>
    </div>
  );
};

export default World;
