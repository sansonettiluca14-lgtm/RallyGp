import * as THREE from "three";
import { scene } from "./renderer.js";
import { handleInput } from "./input.js";
import { updatePhysics } from "./physics.js";
import { updateRaceControl } from "./raceControl.js";
import { initHUD, updateHUD } from "./hud.js";
import { createTrack } from "./tracks.js";

export let car;

export function initGame() {
  createTrack();

  const geo = new THREE.BoxGeometry(4, 2, 8);
  const mat = new THREE.MeshStandardMaterial({ color: 0xff3333 });
  car = new THREE.Mesh(geo, mat);
  car.position.set(0, 1, 80);
  car.castShadow = true;
  scene.add(car);

  initHUD();
}

export function updateGame() {
  handleInput();
  updatePhysics();
  updateRaceControl();
  updateHUD();
}
