const graph = {
  you: ["alice", "bart", "cecylia"],
  alice: ["pati"],
  bart: ["janusz", "pati"],
  cecylia: ["tamara", "jarek"],
  janusz: [],
  pati: [],
  tamara: [],
  jarek: [],
};

// queue
// Array.push (adds at the end)
// Array.shift (gets first element)

// stack
// Array.push (adds at the end)
// Array.pop (removes the last element)

// visited: Set
// add
// has

function breadthFirstSearch(name) {
  const searchQueue = [];
  searchQueue.push(...graph[name]);
  const searched = new Set();

  while (searchQueue.length) {
    const person = searchQueue.shift();
    console.log(person);
    if (!searched.has(person)) {
      if (personMatches(person)) {
        console.log("found", person);
        return true;
      } else {
        searchQueue.push(...graph[person]);
        searched.add(person);
      }
    }
  }
  return false;
}

if (!String.prototype.at) {
  function at(index) {
    let n = index;
    if (index < 0) {
      // allow indexing from the end
      n = this.length + index;
    }
    if (n > this.length || n < 0) {
      // in case it's too big or still too small
      return undefined;
    }
    return this[n];
  }

  // String.prototype.at = at;
  Object.defineProperty(String.prototype, "at", {
    value: at,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
function personMatches(person) {
  return person.at(-1) === "i"; // will match "pati"
}

console.log(breadthFirstSearch("you")); // true
