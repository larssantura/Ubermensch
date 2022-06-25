/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/planet2.glb");
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() / 3.5;
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[-1, 0, 0]}
      scale={0.8}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={1.13}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/planet2.glb");
