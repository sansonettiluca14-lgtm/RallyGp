import { getWear } from "./tyres.js";

let lap = 1;
let hasPitted = false;
let safetyCar = false;

export function updateRaceControl() {
  if (getWear() <= 0) {
    alert("DNF – Tyres destroyed");
  }
}

export function pitStop() {
  hasPitted = true;
}
