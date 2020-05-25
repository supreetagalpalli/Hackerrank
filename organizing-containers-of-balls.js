function organizingContainers(container) {
  let containerList = [];
  let typesList = [];
  for (let i = 0; i < container.length; i++) {
    let total = 0;
    let type = 0;
    for (let j = 0; j < container[i].length; j++) {
      total += container[i][j];
      type += container[j][i];
    }
    containerList.push(total);
    typesList.push(type);
  }
  let sortedContainerList = containerList.sort((a, b) => b - a);
  let sortedTypesList = typesList.sort((a, b) => b - a);
  for (let i = 0; i < sortedContainerList.length; i++) {
    if (sortedContainerList[i] !== sortedTypesList[i]) return 'Impossible';
  }
  return 'Possible';
}

console.log(
  organizingContainers([
    [0, 2, 1],
    [1, 1, 1],
    [2, 0, 0],
  ])
);
