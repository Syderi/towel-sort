
// You should implement your task here.

let result = [];

module.exports = function towelSort (matrix) {
  console.log(10, matrix);
  if (!matrix) {
    return result;
  };

  matrix.forEach((element, index) => {
    if (index === 0) {
      result = [...element];
      console.log(15, result);

    }
    else if (index % 2) {
      result = [...result, ...(element.reverse())];
      console.log(20, result);
    } else {
      result = [...result, ...element];
      console.log(25, result);
    }
  });

  console.log(30, result);
  return result;
}

