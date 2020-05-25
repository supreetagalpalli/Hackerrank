function powerSum(X, N, num = 1) {
  let expVal = X - Math.pow(num, N);
  if (expVal < 0) return 0;
  else if (expVal === 0) return 1;
  else return powerSum(expVal, N, num + 1) + powerSum(X, N, num + 1);
}

console.log(powerSum(10, 2));
