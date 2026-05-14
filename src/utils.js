export function r(min, max) {
  return Math.random() * (max - min) + min;
}

export function ri(min, max) {
  return Math.floor(r(min, max + 1));
}

export function calculateGardenWorth(plots) {
  return plots.reduce((sum, plot) => sum + (plot ? plot.value : 0), 0);
}