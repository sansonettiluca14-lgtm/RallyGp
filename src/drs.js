export let drsActive = false;

document.addEventListener("keydown", e => {
  if (e.key === "d") drsActive = true;
});
document.addEventListener("keyup", e => {
  if (e.key === "d") drsActive = false;
});
