let wear = 100;

export function degrade(amount) {
  wear -= amount;
  wear = Math.max(wear, 0);
}

export function tyreGrip() {
  if (wear > 60) return 1;
  if (wear > 40) return 0.9;
  if (wear > 25) return 0.8;
  return 0.65;
}

export function getWear() {
  return wear;
}
