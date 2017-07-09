const selectionSort = (arr) => {
  if (arr.length === 1) return arr;
  for (let x = 0; x < arr.length; x++) {
    for (let y = x+1; y < arr.length; y++) {
      let nextVal = arr[y]

      if (nextVal < arr[x]){
        arr[y] = arr[x];
        arr[x] = nextVal; 
      }

    };
  };

  return arr;
};

let test1 = [2, 7, 1, 8, 5];
let test2 = [10, 7, 1, 8, 5];
let test3 = [10, 10, 1];
let test4 = [-3, 10, -1, 0];
let test5 = [10];
console.log(selectionSort(test1));
console.log(selectionSort(test2));
console.log(selectionSort(test3));
console.log(selectionSort(test4));
console.log(selectionSort(test5));