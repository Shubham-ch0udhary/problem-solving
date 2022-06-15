let arr = [1,2,4,3];
let arr2 = [2,4,0,1,4];
const sum = (a, b) => {
 return a+b;
}
function findPivot(array, fn) {
  for(let i = 1; i< array.length;i++) {
    let leftArr = array.slice(0, i);
    let rightArr = array.slice(i+1, array.length);
    if(leftArr.reduce(fn, 0) === rightArr.reduce(fn, 0)) {
       return array[i]
    }
  }
  return -1;
}

console.log(findPivot(arr, sum)) //4
console.log(findPivot(arr2, sum)) //-1