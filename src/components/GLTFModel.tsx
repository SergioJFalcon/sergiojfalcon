import { Show, createSignal, onMount } from 'solid-js';
import { useLoader } from 'solid-three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Define a component to load the glTF file
const GLTFModel = (props) => {
  // Create a signal to hold the loaded model
  const [model, setModel] = createSignal(null);

  // Load the glTF model when the component mounts
  onMount(() => {
    const loader = new GLTFLoader();
    loader.load(props.url, (gltf) => {
      setModel(gltf.scene);
    });
  });

  // Render the loaded model if available
  return (
    <Show when={model()}>
      <primitive object={model()} {...props} />
    </Show>
  );
};

export default GLTFModel;
