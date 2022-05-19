import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  );
}
