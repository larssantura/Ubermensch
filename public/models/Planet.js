import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/planet.glb");
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() / 8;
  });

  return (
    <>
      {/* <OrbitControls />; */}
      <group
        ref={group}
        {...props}
        dispose={null}
        position={[-1.3, -0.1, 0]}
        scale={0.9}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["Material.002"]}
          position={[0.04, -0.05, 0.03]}
          rotation={[Math.PI, -1.46, Math.PI]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/planet.glb");
