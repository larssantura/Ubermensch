import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Planet from "/public/models/Planet";

const Header = () => {
  return (
    <Canvas id="canvas" camera={{ fov: 20, position: [1, 1, 6] }}>
      <Suspense fallback={null}>
        <Stars
          radius={1}
          depth={60}
          count={20000}
          factor={1}
          saturation={0}
          fade={1}
          speed={10000}
        />
        <fog attach="fog" color="black" near={6} far={6.5} />
        {/* <pointLight
            position={[-10, 100, -20]}
            intensity={0.3}
            specular={0}
            color="red"
          /> */}
        {/* <pointLight
            position={[-80, -100, -20]}
            intensity={1.5}
            specular={0}
            color="#0088a9"
          /> */}
        {/* <ambientLight color="blue" intensity={2} /> */}
        <pointLight
          castShadow={true}
          receiveShadow={true}
          position={[500, 0, 10]}
          color="white"
          intensity={3}
        />
        {/* <directionalLight intensity={0.5} position={[-10, 10, 5]} /> */}
        <Planet />
        {/* <CameraHelper /> */}
      </Suspense>
    </Canvas>
  );
};

export default Header;
