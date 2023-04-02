const uniquePaths = function (height, width) {
  if (height === 1 || width === 1) return 1;

  let graph = [];
  for (let i = 0; i < height; i++) {
    graph.push(Array(width).fill(0));
  }
  const endH = height - 1;
  const endW = width - 1;
  graph[0][0] = 1;

  const helper = (currentH, currentW) => {
    graph[currentH][currentW] +=
      (graph[currentH - 1] && graph[currentH - 1][currentW]
        ? graph[currentH - 1] && graph[currentH - 1][currentW]
        : 0) +
      (graph[currentH][currentW - 1] ? graph[currentH][currentW - 1] : 0);
    if (currentH >= endH && currentW >= endW) {
      return;
    }
    if (currentH === endH) {
      currentH = 0;
      currentW++;

      helper(currentH, currentW);
    } else {
      currentH++;

      helper(currentH, currentW);
    }
  };

  helper(1, 0);
  return graph[endH][endW];
};
