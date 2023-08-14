function binarySearch(list, item) {
  let low = 0;
  let high = list.length + 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

function assert(given, expected) {
  if (given !== expected) {
    throw new Error(`${given} should be ${expected}`);
  }
}

const myList = [1, 3, 5, 7, 9, 10];

assert(binarySearch(myList, 5), 2);
assert(binarySearch(myList, -1), null);

function getMaxGuessCount(len) {
  const log2 = Math.log2(len);
  const max = Math.ceil(log2);
  return `Max guess count for ${len} element array is ${max}`;
}

assert(
  getMaxGuessCount(myList.length),
  "Max guess count for 6 element array is 3"
);

assert(getMaxGuessCount(128), "Max guess count for 128 element array is 7");

assert(getMaxGuessCount(128 * 2), "Max guess count for 256 element array is 8");
