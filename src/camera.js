import * as THREE from "three";
import { car } from "./game.js";

export let camera;

export function initCamera() {
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
}

export function updateCamera() {
  if (!car) return;
  const target = new THREE.Vector3(
    car.position.x,
    car.position.y + 8,
    car.position.z + 15
  );
  camera.position.lerp(target, 0.1);
  camera.lookAt(car.position);
}
