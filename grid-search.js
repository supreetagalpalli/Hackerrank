function gridSearch(G, P) {
  let gRowLen = G.length;
  let pRowLen = P.length;
  let gColLen = G[0].length;
  let pColLen = P[0].length;
  let count = 0;
  let flag;
  for (let i = 0; i < gRowLen - pRowLen + 1; i++) {
    count = 0;
    for (let j = 0; j < gColLen - pColLen + 1; j++) {
      flag = false;
      for (let k = 0; k < pRowLen; k++) {
        for (let l = 0; l < pColLen; l++) {
          if (G[i + k].charAt(j + l) != P[k].charAt(l)) {
            flag = true;
            break;
          }
        }
        if (flag) break;
      }
      if (!flag) return 'YES';
    }
  }
  return 'NO';
}
gridSearch(
  [
    '400453592126560',
    '114213133098692',
    '474386082879648',
    '522356951189169',
    '887109450487496',
    '252802633388782',
    '502771484966748',
    '075975207693780',
    '511799789562806',
    '404007454272504',
    '549043809916080',
    '962410809534811',
    '445893523733475',
    '768705303214174',
    '650629270887160',
  ],
  ['99', '99']
);
