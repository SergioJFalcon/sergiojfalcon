"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { PresentationControls } from '@react-three/drei';

function MeshComponent() {
  const fileUrl = "/shiba/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  // useFrame(() => {
  //   mesh.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shiba() {
  return (
    <MeshComponent />
    // <div className='flex justify-center items-center h-screen'>
    //   <Canvas className='h-2xl w-2xl' flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
    //     {/* <OrbitControls /> */}
    //     <ambientLight />
    //     <pointLight position={[10, 10, 10]} />
    //     <PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
    //     <MeshComponent />
    //     </PresentationControls>
    //   </Canvas>
    // </div>
  );
}

// import { createSignal, onMount, Component } from 'solid-js';
// import { useFrame, useThree } from 'solid-three'
// import { Loader, Mesh } from 'three'
// import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import ShibaModel from '../../assets/shiba/scene.gltf';

// const MeshComponent = () => {
//   const fileUrl = "/shiba/scene.gltf";
//   const loader = new GLTFLoader();

//   // Load the GLTF model
//   loader.load(fileUrl, (gltf) => {
//     // Handle the loaded model
//     console.log(gltf.scene)
//   });

// }

// const Shiba: Component = () => {
//   let mesh: Mesh | undefined
//   const [model, setModel] = createSignal<GLTF>();

//   useFrame(() => (mesh!.rotation.y += 0.01))
//   useThree((state) => {
//       console.log(state.camera)
//   })


//   // Load the GLTF model when the component mounts
//   onMount(() => {
//     const loader = new GLTFLoader();
//     loader.load(ShibaModel, (gltf) => {
//       setModel(gltf);
//     });
//   });

//   return (
//     <mesh ref={mesh as any}>
//       {model() && <primitive object={model()} />}
//     </mesh>
//   );
// };
