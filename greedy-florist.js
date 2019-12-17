function getMinCost(k, c) {
  let purchases = Array(k)
    .fill(0)
    .map(x => []);
  c.sort((a, b) => b - a);
  for (let i = 0; i < c.length; i++) {
    purchases[i % k].push(c[i]);
  }
  return purchases.reduce((total_cost, friend_cost) => {
    return (
      total_cost +
      friend_cost.reduce((total, cost, i) => {
        return total + (i + 1) * cost;
      }, 0)
    );
  }, 0);
}

console.log(getMinCost(3, [1, 3, 5, 7, 9]));
