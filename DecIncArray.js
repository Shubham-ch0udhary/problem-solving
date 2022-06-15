//input  [1,4,5,8,3,2,6,9,7,10]
// output [10,1,9,2,8,3,7,4,6,5]
let array = [1,4,5,8,3,2,6,9,7,10,11];

let sortedArr = array.sort((a,b) => a-b);
function getAlternateArr(sortedArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = array.length-1;

    while(leftIndex <= rightIndex) {
        if(leftIndex !== rightIndex) {
            result.push(sortedArr[rightIndex]);
            rightIndex--;
        }
        result.push(sortedArr[leftIndex]);
        leftIndex++;
    }
    return [...result];
}

console.log(getAlternateArr(sortedArr)); //[11, 1, 10, 2, 9, 3, 8,  4, 7, 5,6]
  