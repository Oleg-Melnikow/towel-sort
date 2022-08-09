// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        ? matrix.reduce((acc, cur, i) => {
              if (i % 2) {
                  return acc.concat(cur.reverse());
              } else {
                  return acc.concat(cur);
              }
          }, [])
        : [];
};
