// Binary search ONLY works with arrays that have already been sorted
// continously cut array in half

const binarySearch = (arr, query) => {
  if (!arr.length) {return false};
  
  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint + 1, arr.length);
  
  let midVal = arr[midpoint];

  if (query === midVal) {
    return true;
  }
  else if (query > midVal) {
    return binarySearch(right, query);
  } 
  else {
    return binarySearch(left, query);
  };

}

let test1 = [1, 2, 3, 4, 5, 6, 7, 8];
let test2 = [];

console.log(binarySearch(test1, 7));
console.log(binarySearch(test2, 13));