import { createSignal } from 'solid-js';
import { useFrame, useThree } from 'solid-three';
import { Mesh } from 'three'

const Boulders = () => {
  let mesh: Mesh | undefined
  const [hovered, setHovered] = createSignal(false)
  
  useFrame(() => (mesh!.rotation.y += 0.01))
  useThree((state) => {
      console.log(state.camera)
  })


  return (
    <mesh
        ref={mesh as any}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        position={[2, 2, 1]}
        castShadow
        receiveShadow>
        <shapeGeometry />
        <meshStandardMaterial color={hovered() ? 'orange' : 'yellow]'} />
    </mesh>
  )
};

export default Boulders;
