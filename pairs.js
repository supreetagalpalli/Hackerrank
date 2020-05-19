function pairs(k, arr) {
  let s = new Set(arr);
  let cnt = 0;
  s.forEach(function (elem) {
    if (s.has(elem + k)) cnt++;
  });
  return cnt;
}
console.log(2, [1, 5, 3, 4, 2]);
