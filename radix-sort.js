const createBuckets = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push([]);
  }
  return arr;
}

const findBiggestNum = (arr) => {
  let biggest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currentNum = arr[i];
    if(currentNum > biggest) {
      biggest = currentNum;
    };
  };

  return biggest;
}

const radixSort = (arr) => {
  let buckets = createBuckets();
  
  const loops = findBiggestNum(arr).toString().length;

  for (let i = 0; i < loops; i++) {
    for (let x = 0; x < arr.length; x++) {
      let num = arr[x].toString();
      let digit = parseInt(num[num.length - 1 - i]);
      
      buckets[digit].push(arr[x]);
    }
  }
};


let test1 = [134, 38, 27, 8, 111, 2, 24, 9, 174, 1, 23];
console.log(radixSort([100, 101, 102]));