function encryption(s) {
  let sq = Math.sqrt(s.length);
  let row = Math.floor(sq);
  let col = Math.ceil(sq);
  let str = '';
  for (let i = 0; i < col; i++) {
    for (let j = i; j < s.length; j += col) {
      str = str.concat(s[j]);
    }
    str = str.concat(' ');
  }
  return str;
}
console.log(encryption('haveaniceday'));
