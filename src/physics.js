import { keys } from "./input.js";
import { car } from "./game.js";
import { tyreGrip } from "./tyres.js";
import { drsActive } from "./drs.js";

let speed = 0;
let angle = 0;

export function updatePhysics() {
  if (!car) return;

  if (keys["ArrowUp"]) speed += 0.03 * tyreGrip();
  if (keys["ArrowDown"]) speed -= 0.05;
  speed *= 0.985;

  const maxSpeed = drsActive ? 3.2 : 2.6;
  speed = Math.max(0, Math.min(speed, maxSpeed));

  if (keys["ArrowLeft"]) angle += 0.03;
  if (keys["ArrowRight"]) angle -= 0.03;

  car.rotation.y = angle;
  car.position.x += Math.sin(angle) * speed;
  car.position.z -= Math.cos(angle) * speed;
}
