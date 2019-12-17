function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let maxValue = Number.MAX_VALUE;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let maxMinDiff = arr[i + k - 1] - arr[i];
    if (maxMinDiff < maxValue) {
      maxValue = maxMinDiff;
    }
  }
  return maxValue;
}
console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]));
console.log(maxMin(2, [1, 2, 1, 2, 1]));
