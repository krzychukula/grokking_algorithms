function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  arr.forEach((element, index) => {
    if (element < smallest) {
      smallest = element;
      smallestIndex = index;
    }
  });
  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];
  const count = arr.length;

  for (let index = 0; index < count; index++) {
    const smallestIndex = findSmallest(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }
  return newArr;
}

assert(selectionSort([2, 1]), [1, 2]);
assert(selectionSort([2, 1, 3, 5, 4]), [1, 2, 3, 4, 5]);

function assert(given, expected) {
  if (given.toString() !== expected.toString()) {
    throw new Error(`${given} should be ${expected}`);
  }
}
