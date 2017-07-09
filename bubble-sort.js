const bubbleSort = (arr) => {

  let swapped = true;

  while(swapped){

    swapped = false;

    for (let i = 0; i < arr.length; i++) {

      let nextVal = arr[i+1];

      if(arr[i] > nextVal) {

        arr[i+1] = arr[i];
        arr[i] = nextVal;

        swapped = true;
      };
    };
  };

  return arr;
}

let test1 = [3, 1, 5, 2, 7, 8];
let test2 = [8, 7, 5, 3, 2, 1];
let test3 = [1, 8];
let test4 = [-6, -12, 15, 0, 3, -8];

console.log(bubbleSort(test1));
console.log(bubbleSort(test2));
console.log(bubbleSort(test3));
console.log(bubbleSort(test4));