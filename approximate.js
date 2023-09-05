const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {
  kone: new Set(["id", "nv", "ut"]),
  ktwo: new Set(["wa", "id", "mt"]),
  kthree: new Set(["or", "nv", "ca"]),
  kfour: new Set(["nv", "ut"]),
  kfive: new Set(["ca", "az"]),
};

function getMinimumStations(stations, statesNeededArg) {
  const finalStations = new Set();
  const statesNeeded = new Set(statesNeededArg);

  while (statesNeeded.size) {
    let bestStation = null;
    let statesCovered = new Set();

    for (const [station, statesForStation] of Object.entries(stations)) {
      const covered = new Set(
        [...statesNeeded].filter((x) => statesForStation.has(x))
      );
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }

    statesCovered.forEach((x) => {
      statesNeeded.delete(x);
    });
    finalStations.add(bestStation);
  }

  return finalStations;
}

console.log(getMinimumStations(stations, statesNeeded));
// Set(4) { 'kone', 'ktwo', 'kthree', 'kfive' }
