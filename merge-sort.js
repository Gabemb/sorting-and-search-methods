// puts the smaller in an output array
// once one array is empty, add the rest into output


// check out git book
// 'merge' helper function always recieves two sorted arrays
// compares the values of the 1st indices of each array
// 
const merge = (arr1, arr2) => {
  let sortedArr = [];

  // while loop continues to run until one of the arrays are empty
  while(arr1.length && arr2.length) {

    if(arr1[0] <= arr2[0]) {
      sortedArr.push(arr1.shift());
    };

    if(arr2[0] < arr1[0]) {
      sortedArr.push(arr2.shift());
    };

  };

  if(arr1.length) { sortedArr = sortedArr.concat(arr1) };
  if(arr2.length) { sortedArr = sortedArr.concat(arr2) };

  return sortedArr;
};

const mergeSort = (arr) => {
  if(arr.length === 1) { return arr }

  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint, arr.length);

  return merge( mergeSort(left), mergeSort(right) );
};

let test1 = [ 2, 7, 5, 8, 1, 4, 3];
let test2 = [ 50, 100, -4, 23, -18, 4, 3];
let test3 = [ 1, 0];
let test4 = [0];
let test5 = [ 1, 0, 3, -6, 1, 5, 4, 3, -6];

console.log(mergeSort(test1));
console.log(mergeSort(test2));
console.log(mergeSort(test3));
console.log(mergeSort(test4));
console.log(mergeSort(test5));
