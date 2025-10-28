
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

function Spinner() {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.04;
      meshRef.current.rotation.y += 0.04;
    }
  });
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#6c63ff" />
    </mesh>
  );
}

const Loading3DSpinner = () => (
  <div style={{ width: 120, height: 120, margin: 'auto' }}>
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.7} />
      <Spinner />
    </Canvas>
  </div>
);

export default Loading3DSpinner;
