const quickSort = (arr) => {
  if (arr.length === 0) {return arr};

  let pivot = arr[Math.floor(arr.length / 2)];

  let left = [];
  let right = [];

  arr.forEach((num) => {
    if (num !== pivot) {
      num > pivot
      ? right.push(num) 
      : left.push(num);
    };
  });

  return quickSort(left).concat(pivot).concat(quickSort(right));
};

let test1 = [2, 7, 5, 4, 1, 8];

console.log(quickSort(test1));