
import { useGLTF } from 'solid-drei';
import { Component, Show, createSignal, onMount } from 'solid-js';
import * as THREE from 'three';
import shibaModel from './shiba/scene.gltf';

const Shiba: Component = () => {
  const [data] = useGLTF(shibaModel);
  const [hovered, setHovered] = createSignal(false)

  onMount(() => {
    console.log('Shiba mounted')
    console.log('data: ', data())
  });

  return (
    <Show when={data()}>
      <mesh
          ref={mesh as any}
          castShadow
          receiveShadow
          onPointerEnter={(e) => setHovered(true)}
          onPointerLeave={(e) => setHovered(false)}
          position={[1, 1, 10]}>
          <primitive object={data()?.scene} />
        <meshStandardMaterial side={THREE.BackSide} color={'#2c4f7c'} />
      </mesh>
    </Show>
  )
}

export default Shiba