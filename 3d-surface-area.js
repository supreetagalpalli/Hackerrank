function surfaceArea(A) {
  let area = 0;
  let row = A.length;
  let col = A[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      area += A[i][j] * 4 + 2;
      if (j >= 1) area -= Math.min(A[i][j - 1], A[i][j]) * 2;
      if (i >= 1) area -= Math.min(A[i - 1][j], A[i][j]) * 2;
    }
  }
  return area;
}
console.log(
  surfaceArea([
    [1, 3, 4],
    [2, 2, 3],
    [1, 2, 4],
  ])
);
