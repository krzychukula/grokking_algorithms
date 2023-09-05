const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    meta: 1,
  },
  b: {
    a: 3,
    meta: 5,
  },
  meta: {},
};
const infinity = Number.POSITIVE_INFINITY;

function findSmallest(graph) {
  const costs = {
    ...graph.start,
    meta: infinity,
  };
  const parents = {
    meta: null,
    ...Object.keys(graph.start)
      .map((n) => ({
        [n]: "start",
      }))
      .reduce((acc, v) => {
        return {
          ...acc,
          ...v,
        };
      }, {}),
  };
  const processed = [];
  console.log(costs);
  console.log(parents);

  let node = findLowestCostNode(costs, processed);
  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (const n of Object.keys(neighbors)) {
      console.log("for", "node", node, "n", n);
      const newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        // new shortest path
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }
  const path = [];
  parent = "meta";
  while (parent) {
    path.push(parent);
    parent = parents[parent];
  }
  return {
    cost: costs.meta,
    path: path.reverse(),
  };

  return parents;
}

function findLowestCostNode(costs, processed) {
  let lowestCost = infinity;
  let lowestCostNode = null;

  for (const node of Object.keys(costs)) {
    const cost = costs[node];
    console.log(processed);
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  console.log("lowest cost", lowestCostNode);
  return lowestCostNode;
}

console.log(findSmallest(graph));
/* 
{ 
    cost: 6,
    path: [ 'start', 'b', 'a', 'meta' ]
}
*/
