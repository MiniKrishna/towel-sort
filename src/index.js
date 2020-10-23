module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) return [];
  else {
      let result = [];
      let rowNum = 0;
      for (let i of matrix) {
          if (rowNum % 2 !== 0) i = i.reverse();
          rowNum++;
          result.push(i);
      }
      return result.join().split(",");
  }
};
