import { onCleanup, onMount } from 'solid-js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import shibaModel from '../assets/shiba/scene.gltf';
import bouldersModel from '../assets/models/boulders.glb'
const ThreeScene = () => {
  let mountRef;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(shibaModel, function(gltf) {
      scene.add(gltf.scene);
      animate();
    }, undefined, function(error) {
      console.error(error);
    });

    loader.load(bouldersModel, function(gltf) {
      scene.add(gltf.scene);
      animate();
    }, undefined, function(error) {
      console.error(error);
    });

    const controls = new OrbitControls( camera, renderer.domElement );
    camera.position.z = 5;

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set( 0, 1, 2 );
    controls.update();
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();
      renderer.render(scene, camera);
    }


    // Cleanup
    onCleanup(() => {
      mountRef.removeChild(renderer.domElement);
    });
  });

  return <div ref={mountRef}></div>;
}

export default ThreeScene;
