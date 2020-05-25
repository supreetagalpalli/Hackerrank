function swap(arr, i, j) {
  let k = arr[i];
  let l = arr[j];
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  if (isSorted(arr)) {
    return true;
  } else {
    arr[i] = k;
    arr[j] = l;
    return false;
  }
}

function isSorted(arr) {
  let unSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      unSorted = false;
      break;
    }
  }
  return unSorted;
}

function reverse(arr, i, j) {
  let start = i;
  let end = j;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return isSorted(arr);
}

// Complete the almostSorted function below.
function almostSorted(arr) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      start = i;
      break;
    }
  }
  for (let j = arr.length - 1; j > 0; j--) {
    if (arr[j] < arr[j - 1]) {
      end = j;
      break;
    }
  }
  if (swap(arr, start, end)) {
    console.log('yes');
    console.log(`swap ${start + 1} ${end + 1}`);
    return;
  } else if (reverse(arr, start, end)) {
    console.log('yes');
    console.log(`reverse ${start + 1} ${end + 1}`);
    return;
  } else console.log('no');
}

almostSorted([1, 5, 4, 3, 2, 6]);
