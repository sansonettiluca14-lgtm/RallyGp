import { initRenderer, scene, renderer } from "./renderer.js";
import { initCamera, camera, updateCamera } from "./camera.js";
import { initGame, updateGame } from "./game.js";

initRenderer();
initCamera();
initGame();

function loop() {
  requestAnimationFrame(loop);
  updateGame();
  updateCamera();
  renderer.render(scene, camera);
}

loop();
