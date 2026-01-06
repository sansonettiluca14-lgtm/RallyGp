import * as THREE from "three";

export const scene = new THREE.Scene();
export let renderer;

export function initRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  scene.background = new THREE.Color(0x87ceeb);

  const sun = new THREE.DirectionalLight(0xffffff, 1.2);
  sun.position.set(200, 300, 100);
  sun.castShadow = true;
  scene.add(sun);

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
}
