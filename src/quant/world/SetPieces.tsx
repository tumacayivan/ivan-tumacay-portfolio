import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { story } from "../story";
import { C, rng } from "./textures";

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const tmp = new THREE.Object3D();
const col = new THREE.Color();

/* ================================================================== */
/* ACT I — THE SIGNAL. Electronics first: clean sine waves on a        */
/* circuit floor. Scroll through the act and the front wave stops      */
/* being a sine and starts being a price.                              */
/* ================================================================== */

export const Signal = ({ z = -20 }: { z?: number }) => {
  const N = 220;
  const waves = useMemo(
    () =>
      [0, 1, 2, 3, 4].map((i) => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 3), 3));
        const mat = new THREE.LineBasicMaterial({
          color: i === 0 ? C.bull : C.ice,
          transparent: true,
          opacity: i === 0 ? 1 : 0.55 - i * 0.08,
          toneMapped: false,
        });
        return { line: new THREE.Line(geo, mat), k: 0.6 + i * 0.35, w: 1.2 + i * 0.4, a: 0.7 - i * 0.08, dz: 4 - i * 2.2 };
      }),
    [],
  );
  // a fixed random walk the front wave morphs into
  const walk = useMemo(() => {
    const r = rng(11);
    let v = 0;
    return Array.from({ length: N }, () => (v += (r() - 0.5) * 0.18));
  }, []);
  const chips = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    const r = rng(5);
    const m = chips.current!;
    for (let i = 0; i < m.count; i++) {
      tmp.position.set((r() - 0.5) * 22, -0.42, (r() - 0.5) * 16);
      tmp.rotation.set(0, Math.floor(r() * 4) * (Math.PI / 2), 0);
      const s = 0.3 + r() * 0.7;
      tmp.scale.set(s, 0.12, s * 0.5);
      tmp.updateMatrix();
      m.setMatrixAt(i, tmp.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const morph = smooth(1.3, 2.0, story.p);
    waves.forEach((wv, i) => {
      const pos = wv.line.geometry.attributes.position as THREE.BufferAttribute;
      for (let j = 0; j < N; j++) {
        const x = -9 + (j / (N - 1)) * 18;
        let y = Math.sin(x * wv.k + t * wv.w) * wv.a;
        if (i === 0) y = y * (1 - morph) + (walk[j] - walk[N >> 1]) * morph * 1.4;
        pos.setXYZ(j, x, 1 + y, wv.dz);
      }
      pos.needsUpdate = true;
    });
  });

  return (
    <group position={[0, 0, z]}>
      <gridHelper args={[28, 28, "#1c6b8a", "#0c2a38"]} position={[0, -0.5, 0]} />
      <instancedMesh ref={chips} args={[undefined, undefined, 70]}>
        <boxGeometry />
        <meshStandardMaterial color="#0d151d" metalness={0.7} roughness={0.35} emissive="#0a3a4a" emissiveIntensity={0.4} />
      </instancedMesh>
      {waves.map((wv, i) => (
        <primitive key={i} object={wv.line} />
      ))}
      <pointLight position={[0, 3, 2]} color={C.ice} intensity={6} distance={18} />
    </group>
  );
};

/* ================================================================== */
/* ACT II — THE STACK. Enterprise floors as a city of servers rising   */
/* out of the dark, with payments running the streets.                */
/* ================================================================== */

export const Stack = ({ z = -38, lite = false }: { z?: number; lite?: boolean }) => {
  const towers = useMemo(() => {
    const r = rng(21);
    const out: { x: number; z: number; h: number; c: string }[] = [];
    const n = lite ? 9 : 11;
    for (let i = 0; i < 13; i++)
      for (let j = 0; j < n; j++) {
        const x = (i - 6) * 1.6;
        if (Math.abs(x) < 1.2) continue;
        const h = 0.6 + Math.pow(r(), 1.8) * 6 * (1 - Math.abs(x) / 14);
        out.push({ x, z: (j - (n - 1) / 2) * 1.6, h, c: r() < 0.7 ? C.ice : r() < 0.6 ? C.bull : C.amber });
      }
    return out;
  }, [lite]);
  const body = useRef<THREE.InstancedMesh>(null);
  const caps = useRef<THREE.InstancedMesh>(null);
  const packets = useMemo(() => {
    const r = rng(9);
    const n = lite ? 80 : 180;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    const seeds = Array.from({ length: n }, () => ({
      lane: Math.floor(r() * 12),
      axis: r() < 0.5 ? 0 : 1,
      off: r() * 30,
      v: 1.5 + r() * 3,
      y: 0.05 + r() * 0.1,
    }));
    return { geo, seeds };
  }, [lite]);
  const lastRise = useRef(-1);

  useEffect(() => {
    caps.current!.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(towers.length * 3), 3);
    towers.forEach((t, i) => caps.current!.setColorAt(i, col.set(t.c)));
  }, [towers]);

  useFrame(({ clock }) => {
    const rise = smooth(1.35, 2.35, story.p);
    if (Math.abs(rise - lastRise.current) > 0.001) {
      lastRise.current = rise;
      towers.forEach((t, i) => {
        const h = Math.max(0.001, t.h * rise);
        tmp.rotation.set(0, 0, 0);
        tmp.position.set(t.x, h / 2 - 0.5, t.z);
        tmp.scale.set(1, h, 1);
        tmp.updateMatrix();
        body.current!.setMatrixAt(i, tmp.matrix);
        tmp.position.set(t.x, h - 0.5 + 0.02, t.z);
        tmp.scale.set(1.02, 0.04, 1.02);
        tmp.updateMatrix();
        caps.current!.setMatrixAt(i, tmp.matrix);
      });
      body.current!.instanceMatrix.needsUpdate = true;
      caps.current!.instanceMatrix.needsUpdate = true;
    }
    const pos = packets.geo.attributes.position as THREE.BufferAttribute;
    const t = clock.elapsedTime;
    packets.seeds.forEach((s, i) => {
      const run = (((s.off + t * s.v) % 30) + 30) % 30 - 15;
      const lane = (s.lane - 5.5) * 1.6;
      if (s.axis === 0) pos.setXYZ(i, run * 0.7, s.y - 0.45, lane * 0.7);
      else pos.setXYZ(i, lane * 0.85 + 0.8, s.y - 0.45, run * 0.6);
    });
    pos.needsUpdate = true;
  });

  return (
    <group position={[0, 0, z]}>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.5, 0]}>
        <planeGeometry args={[30, 24]} />
        <meshStandardMaterial color="#05080c" metalness={0.8} roughness={0.25} />
      </mesh>
      <instancedMesh ref={body} args={[undefined, undefined, towers.length]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#0b1119" metalness={0.75} roughness={0.3} emissive="#06121c" />
      </instancedMesh>
      <instancedMesh ref={caps} args={[undefined, undefined, towers.length]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
      <points geometry={packets.geo}>
        <pointsMaterial color={C.amber} size={0.09} sizeAttenuation transparent opacity={0.95} toneMapped={false} />
      </points>
      <pointLight position={[0, 9, 0]} color={C.ice} intensity={10} distance={26} />
      <pointLight position={[-6, 2, 6]} color={C.amber} intensity={4} distance={14} />
    </group>
  );
};

/* ================================================================== */
/* ACT III — AFTER HOURS. A skyline made of candles. It prints itself  */
/* bar by bar as the camera flies low between the lanes.               */
/* ================================================================== */

export const Candles = ({ z = -66, lite = false }: { z?: number; lite?: boolean }) => {
  const LANES = lite ? [-3.25, -1.25, 1.25, 3.25, 5.25] : [-7.25, -5.25, -3.25, -1.25, 1.25, 3.25, 5.25, 7.25];
  const PER = lite ? 28 : 40;
  const data = useMemo(() => {
    const r = rng(33);
    return LANES.map((x, li) => {
      let p = 0;
      const drift = (li % 3) * 0.01 - 0.005;
      return Array.from({ length: PER }, (_, i) => {
        const o = p;
        const c = o + (r() - 0.49 + drift) * 0.55;
        const h = Math.max(o, c) + r() * 0.22;
        const l = Math.min(o, c) - r() * 0.22;
        p = c;
        return { x, z: 12 - i * 0.62, o, c, h, l };
      });
    }).flat();
  }, [lite]); // eslint-disable-line react-hooks/exhaustive-deps
  const bodies = useRef<THREE.InstancedMesh>(null);
  const wicks = useRef<THREE.InstancedMesh>(null);
  const last = useRef(-1);

  useEffect(() => {
    const cb = new Float32Array(data.length * 3);
    bodies.current!.instanceColor = new THREE.InstancedBufferAttribute(cb, 3);
    wicks.current!.instanceColor = new THREE.InstancedBufferAttribute(cb.slice(), 3);
    data.forEach((d, i) => {
      col.set(d.c >= d.o ? C.bull : C.bear);
      bodies.current!.setColorAt(i, col);
      wicks.current!.setColorAt(i, col);
    });
  }, [data]);

  useFrame(() => {
    const reveal = smooth(2.45, 3.6, story.p);
    if (Math.abs(reveal - last.current) < 0.0005) return;
    last.current = reveal;
    const Y = (v: number) => 1.3 + v * 0.9;
    data.forEach((d, i) => {
      const k = i % PER;
      const s = smooth(k / PER - 0.05, k / PER + 0.08, reveal);
      const top = Y(Math.max(d.o, d.c));
      const bot = Y(Math.min(d.o, d.c));
      const bh = Math.max(0.03, top - bot) * s + 0.0001;
      tmp.position.set(d.x, bot + bh / 2, d.z);
      tmp.scale.set(0.34, bh, 0.34);
      tmp.updateMatrix();
      bodies.current!.setMatrixAt(i, tmp.matrix);
      const wh = (Y(d.h) - Y(d.l)) * s + 0.0001;
      tmp.position.set(d.x, Y(d.l) + wh / 2, d.z);
      tmp.scale.set(0.04, wh, 0.04);
      tmp.updateMatrix();
      wicks.current!.setMatrixAt(i, tmp.matrix);
    });
    bodies.current!.instanceMatrix.needsUpdate = true;
    wicks.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <group position={[0, 0, z]}>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.6, 0]}>
        <planeGeometry args={[24, 30]} />
        <meshStandardMaterial color="#04070a" metalness={0.9} roughness={0.2} />
      </mesh>
      <instancedMesh ref={bodies} args={[undefined, undefined, data.length]}>
        <boxGeometry />
        <meshBasicMaterial toneMapped={false} transparent opacity={0.92} />
      </instancedMesh>
      <instancedMesh ref={wicks} args={[undefined, undefined, data.length]}>
        <boxGeometry />
        <meshBasicMaterial toneMapped={false} transparent opacity={0.6} />
      </instancedMesh>
    </group>
  );
};

/* ================================================================== */
/* ACT IV — THE MODEL. A neural network you can fly around. Signals    */
/* propagate forward through it, edge by edge.                         */
/* ================================================================== */

export const Network = ({ z = -92, lite = false }: { z?: number; lite?: boolean }) => {
  const LAYERS = lite ? [5, 8, 10, 8, 3] : [6, 10, 14, 14, 10, 4];
  const net = useMemo(() => {
    const r = rng(77);
    const nodes: THREE.Vector3[][] = LAYERS.map((n, li) => {
      const x = -5 + (li / (LAYERS.length - 1)) * 10;
      const rad = 0.35 + n * 0.11;
      return Array.from({ length: n }, (_, j) => {
        const a = (j / n) * Math.PI * 2 + li * 0.4;
        return new THREE.Vector3(x, 1.5 + Math.sin(a) * rad, Math.cos(a) * rad + (r() - 0.5) * 0.2);
      });
    });
    const edges: [THREE.Vector3, THREE.Vector3, number, number][] = [];
    const out: number[][] = [];
    nodes.forEach((layer, li) => {
      if (li === nodes.length - 1) return;
      layer.forEach((a, ai) => {
        nodes[li + 1].forEach((b, bi) => {
          out[edges.length] = [li + 1, bi];
          edges.push([a, b, li, ai]);
        });
      });
    });
    const pos = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => pos.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6));
    const lines = new THREE.BufferGeometry();
    lines.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    // outgoing edges per node, for pulses to choose their next hop
    const fromNode = new Map<string, number[]>();
    edges.forEach(([, , li, ai], i) => {
      const k = `${li}:${ai}`;
      fromNode.set(k, [...(fromNode.get(k) ?? []), i]);
    });
    return { nodes, edges, lines, fromNode, out };
  }, [lite]); // eslint-disable-line react-hooks/exhaustive-deps

  const nodeMesh = useRef<THREE.InstancedMesh>(null);
  const flat = useMemo(() => net.nodes.flat(), [net]);
  const PULSES = lite ? 70 : 160;
  const pulses = useMemo(() => {
    const r = rng(4);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(PULSES * 3), 3));
    const st = Array.from({ length: PULSES }, () => ({ e: Math.floor(r() * net.edges.length), t: r(), v: 0.5 + r() * 0.9 }));
    return { geo, st, r };
  }, [net, PULSES]);
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    const m = nodeMesh.current!;
    m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(flat.length * 3), 3);
    flat.forEach((p, i) => {
      tmp.position.copy(p);
      tmp.scale.setScalar(0.09);
      tmp.updateMatrix();
      m.setMatrixAt(i, tmp.matrix);
      m.setColorAt(i, col.set(i % 5 === 0 ? C.amber : C.bull));
    });
    m.instanceMatrix.needsUpdate = true;
  }, [flat]);

  useFrame((_, dt) => {
    const pos = pulses.geo.attributes.position as THREE.BufferAttribute;
    pulses.st.forEach((s, i) => {
      s.t += dt * s.v;
      if (s.t >= 1) {
        const [nl, ni] = net.out[s.e];
        const next = net.fromNode.get(`${nl}:${ni}`);
        s.e = next ? next[Math.floor(pulses.r() * next.length)] : Math.floor(pulses.r() * net.fromNode.get("0:0")!.length);
        s.t = 0;
      }
      const [a, b] = net.edges[s.e];
      pos.setXYZ(i, a.x + (b.x - a.x) * s.t, a.y + (b.y - a.y) * s.t, a.z + (b.z - a.z) * s.t);
    });
    pos.needsUpdate = true;
    if (group.current) group.current.rotation.x = Math.sin(story.p * 0.8) * 0.15;
  });

  return (
    <group position={[0, 0, z]}>
      <group ref={group} position={[0, 1.5, 0]}>
        <group position={[0, -1.5, 0]}>
          <lineSegments geometry={net.lines}>
            <lineBasicMaterial color={C.ice} transparent opacity={0.12} toneMapped={false} />
          </lineSegments>
          <instancedMesh ref={nodeMesh} args={[undefined, undefined, flat.length]}>
            <sphereGeometry args={[1, 16, 12]} />
            <meshBasicMaterial toneMapped={false} />
          </instancedMesh>
          <points geometry={pulses.geo}>
            <pointsMaterial color="#e9fff6" size={0.08} transparent opacity={0.95} toneMapped={false} />
          </points>
        </group>
      </group>
      <pointLight position={[0, 2, 0]} color={C.bull} intensity={6} distance={16} />
    </group>
  );
};

/* ================================================================== */
/* ACT V — THE MACHINE. The trading bot as a reactor core, with the    */
/* real terminal screens orbiting it. Scrolling spins the gallery.     */
/* ================================================================== */

export const Machine = ({ z = -116, images }: { z?: number; images: string[] }) => {
  const maps = useTexture(images);
  useEffect(() => maps.forEach((m) => (m.colorSpace = THREE.SRGBColorSpace)), [maps]);
  const ring = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);
  const R = 4.4;

  useFrame(({ clock }, dt) => {
    const t = clock.elapsedTime;
    if (ring.current) ring.current.rotation.y = t * 0.06 + (story.p - 5) * 2.6;
    shell.current!.rotation.set(t * 0.2, t * 0.3, 0);
    core.current!.rotation.y += dt * 0.8;
    core.current!.scale.setScalar(0.62 + Math.sin(t * 3) * 0.04);
    r1.current!.rotation.set(t * 0.5, 0, t * 0.2);
    r2.current!.rotation.set(0, t * 0.4, t * 0.6);
    r3.current!.rotation.set(t * 0.3, t * 0.7, 0);
  });

  return (
    <group position={[0, 1.6, z]}>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color={C.ice} wireframe transparent opacity={0.5} toneMapped={false} />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#1a0f00" emissive={C.amber} emissiveIntensity={2.2} flatShading toneMapped={false} />
      </mesh>
      {[
        [r1, 1.9, C.bull],
        [r2, 2.3, C.ice],
        [r3, 2.7, C.bull],
      ].map(([ref, rad, c], i) => (
        <mesh key={i} ref={ref as React.RefObject<THREE.Mesh>}>
          <torusGeometry args={[rad as number, 0.012, 8, 120]} />
          <meshBasicMaterial color={c as string} toneMapped={false} transparent opacity={0.8} />
        </mesh>
      ))}
      <group ref={ring}>
        {maps.map((m, i) => {
          const a = (i / maps.length) * Math.PI * 2;
          return (
            <group key={i} position={[Math.sin(a) * R, Math.sin(i * 1.7) * 0.5, Math.cos(a) * R]} rotation-y={a}>
              <mesh>
                <planeGeometry args={[2.5, 1.2]} />
                <meshBasicMaterial map={m} toneMapped={false} side={THREE.DoubleSide} transparent opacity={0.92} />
              </mesh>
              <lineSegments>
                <edgesGeometry args={[new THREE.PlaneGeometry(2.56, 1.26)]} />
                <lineBasicMaterial color={C.bull} toneMapped={false} />
              </lineSegments>
            </group>
          );
        })}
      </group>
      <pointLight color={C.amber} intensity={10} distance={14} />
    </group>
  );
};

/* ================================================================== */
/* ACT VI — THE DESK. A swarm of agents orbiting one mind, over an     */
/* equity ridge, with the live trading builds standing around it.     */
/* ================================================================== */

export const Desk = ({ z = -142, images, lite = false }: { z?: number; images: string[]; lite?: boolean }) => {
  const maps = useTexture(images);
  useEffect(() => maps.forEach((m) => (m.colorSpace = THREE.SRGBColorSpace)), [maps]);
  const N = lite ? 260 : 640;
  const swarm = useMemo(() => {
    const r = rng(42);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    const colors = new Float32Array(N * 3);
    const agents = Array.from({ length: N }, (_, i) => {
      const flock = i % 3;
      col.set([C.bull, C.ice, C.amber][flock]);
      colors.set([col.r, col.g, col.b], i * 3);
      return { flock, rad: 1.4 + r() * 2.6, ph: r() * Math.PI * 2, sp: 0.25 + r() * 0.5, wob: r() * 0.5 };
    });
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return { geo, agents };
  }, [N]);
  const ridge = useMemo(() => {
    const g = new THREE.PlaneGeometry(34, 16, lite ? 70 : 140, lite ? 24 : 48);
    const r = rng(2);
    const p = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const y = p.getY(i);
      const trend = (x + 17) * 0.09;
      const ridgeShape = Math.exp(-(y * y) / 18);
      p.setZ(i, (trend + Math.sin(x * 1.3) * 0.25 + (r() - 0.5) * 0.18) * ridgeShape);
    }
    g.computeVertexNormals();
    return g;
  }, [lite]);
  const tilts = [new THREE.Euler(0.4, 0, 0.2), new THREE.Euler(-0.5, 0.6, 0), new THREE.Euler(1.2, 0, -0.4)];
  const q = useMemo(() => tilts.map((e) => new THREE.Quaternion().setFromEuler(e)), []); // eslint-disable-line react-hooks/exhaustive-deps
  const v = new THREE.Vector3();
  const panelRefs = useRef<(THREE.Group | null)[]>([]);

  useEffect(() => {
    const cam = new THREE.Vector3(-6.5, 3.6, -133 - z);
    panelRefs.current.forEach((g) => g?.lookAt(cam.x, cam.y, cam.z));
  }, [z]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const pos = swarm.geo.attributes.position as THREE.BufferAttribute;
    swarm.agents.forEach((a, i) => {
      const ang = a.ph + t * a.sp;
      v.set(Math.cos(ang) * a.rad, Math.sin(ang * 3 + a.ph) * a.wob, Math.sin(ang) * a.rad).applyQuaternion(q[a.flock]);
      pos.setXYZ(i, v.x, v.y + 2, v.z);
    });
    pos.needsUpdate = true;
  });

  return (
    <group position={[0, 0, z]}>
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.55, 32, 24]} />
        <meshBasicMaterial color="#d8fff0" toneMapped={false} />
      </mesh>
      <points geometry={swarm.geo}>
        <pointsMaterial vertexColors size={0.07} transparent opacity={0.95} toneMapped={false} />
      </points>
      <mesh geometry={ridge} rotation-x={-Math.PI / 2} position={[0, -1.2, 0]}>
        <meshBasicMaterial color={C.bull} wireframe transparent opacity={0.18} toneMapped={false} />
      </mesh>
      {maps.map((m, i) => {
        const a = THREE.MathUtils.degToRad(-60 + (i / (maps.length - 1)) * 100);
        return (
          <group key={i} ref={(g) => (panelRefs.current[i] = g)} position={[Math.cos(a) * 7.2, 2 + (i % 2) * 0.9 - 0.4, Math.sin(a) * 7.2]}>
            <mesh>
              <planeGeometry args={[2.6, 1.25]} />
              <meshBasicMaterial map={m} toneMapped={false} transparent opacity={0.9} />
            </mesh>
            <lineSegments>
              <edgesGeometry args={[new THREE.PlaneGeometry(2.66, 1.31)]} />
              <lineBasicMaterial color={C.amber} toneMapped={false} />
            </lineSegments>
          </group>
        );
      })}
      <pointLight position={[0, 2, 0]} color={C.bull} intensity={8} distance={16} />
    </group>
  );
};

/* ================================================================== */
/* ACT VII — THE RANGE. Every other site he shipped, hung in a helix   */
/* the camera flies straight through.                                  */
/* ================================================================== */

export const Range = ({ z = -152, images }: { z?: number; images: string[] }) => {
  const maps = useTexture(images);
  useEffect(() => maps.forEach((m) => (m.colorSpace = THREE.SRGBColorSpace)), [maps]);
  const helix = useRef<THREE.Group>(null);
  useFrame(() => {
    if (helix.current) helix.current.rotation.z = (story.p - 7) * 0.35;
  });
  return (
    <group position={[0, 2, z]}>
      <group ref={helix}>
        {maps.map((m, i) => {
          // A spiral staircase of screens, all facing the camera coming down the middle
          const a = i * 1.05;
          const R = 2.6;
          return (
            <group key={i} position={[Math.cos(a) * R, Math.sin(a) * R * 0.75, -i * 1.25]} rotation-y={-Math.cos(a) * 0.55} rotation-x={Math.sin(a) * 0.35}>
              <mesh>
                <planeGeometry args={[1.7, 0.82]} />
                <meshBasicMaterial map={m} toneMapped={false} side={THREE.DoubleSide} />
              </mesh>
              <lineSegments>
                <edgesGeometry args={[new THREE.PlaneGeometry(1.74, 0.86)]} />
                <lineBasicMaterial color={C.dawn} toneMapped={false} transparent opacity={0.7} />
              </lineSegments>
            </group>
          );
        })}
      </group>
      <pointLight position={[0, 0, -8]} color={C.dawn} intensity={6} distance={18} />
    </group>
  );
};
