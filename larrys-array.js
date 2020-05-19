function larrysArray(A) {
  let len = A.length;
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (A[i] > A[j]) {
        cnt = cnt + 1;
      }
    }
  }
  if (cnt % 2 == 0) return 'YES';
  else return 'NO';
}

console.log(larrysArray([1, 2, 3, 5, 4]));
