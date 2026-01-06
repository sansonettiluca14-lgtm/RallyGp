let hud;

export function initHUD() {
  hud = document.createElement("div");
  hud.style.position = "absolute";
  hud.style.top = "10px";
  hud.style.left = "10px";
  hud.style.color = "white";
  hud.style.fontFamily = "Arial";
  document.body.appendChild(hud);
}

export function updateHUD() {
  hud.innerHTML = `
    <div>RALLY F1 3D</div>
    <div>DRS: Hold D</div>
  `;
}
