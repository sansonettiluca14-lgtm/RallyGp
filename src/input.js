export const input = {
  accelerate: false,
  brake: false,
  left: false,
  right: false
};

/* ---------- KEYBOARD ---------- */
document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" || e.key === "w") input.accelerate = true;
  if (e.key === "ArrowDown" || e.key === "s") input.brake = true;
  if (e.key === "ArrowLeft" || e.key === "a") input.left = true;
  if (e.key === "ArrowRight" || e.key === "d") input.right = true;
});

document.addEventListener("keyup", e => {
  if (e.key === "ArrowUp" || e.key === "w") input.accelerate = false;
  if (e.key === "ArrowDown" || e.key === "s") input.brake = false;
  if (e.key === "ArrowLeft" || e.key === "a") input.left = false;
  if (e.key === "ArrowRight" || e.key === "d") input.right = false;
function bindButton(id, action) {
  const btn = document.getElementById(id);

  btn.addEventListener("touchstart", () => input[action] = true);
  btn.addEventListener("touchend", () => input[action] = false);

  btn.addEventListener("mousedown", () => input[action] = true);
  btn.addEventListener("mouseup", () => input[action] = false);
}

bindButton("gas", "accelerate");
bindButton("brake", "brake");
bindButton("left", "left");
bindButton("right", "right");});
