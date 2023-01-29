export function randomElementFromArray(arr) {
  return arr[(arr.length * Math.random()) | 0];
}

export function roundAccurate(number, decimals) {
  return Number(Math.round(number + "e" + decimals) + "e-" + decimals);
}
