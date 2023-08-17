function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];
    const less = arr.filter((v) => v < pivot);
    const more = arr.filter((v) => v > pivot);

    return [...quicksort(less), pivot, ...quicksort(more)];
  }
}
console.time("naive quicksort 1");
assert(quicksort([2, 1]), [1, 2]);
assert(quicksort([2, 1, 3, 5, 4]), [1, 2, 3, 4, 5]);
console.timeEnd("naive quicksort 1");
// naive quicksort 1: 0.294ms

function quicksortRandomPivot(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    // assuming middle is random enough :)
    const pivot = arr[Math.floor(arr.length / 2)];
    const less = arr.filter((v) => v < pivot);
    const more = arr.filter((v) => v > pivot);

    return [...quicksort(less), pivot, ...quicksort(more)];
  }
}

console.time("naive quicksortRandomPivot 1");
assert(quicksortRandomPivot([2, 1]), [1, 2]);
assert(quicksortRandomPivot([2, 1, 3, 5, 4]), [1, 2, 3, 4, 5]);
console.timeEnd("naive quicksortRandomPivot 1");
// naive quicksortRandomPivot 1: 0.191ms

function assert(given, expected) {
  if (given.toString() !== expected.toString()) {
    throw new Error(`${given} should be ${expected}`);
  } else {
    console.log(given.toString(), "is correct");
  }
}
