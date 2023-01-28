export function randomElementFromArray(arr) {
  return arr[(arr.length * Math.random()) | 0];
}
