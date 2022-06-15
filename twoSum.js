// Printing the indices of the numbers

function twoSum(array, target) {
    let map = new Map();
    for(let i =0; i<array.length; i++) {
        if(map.has(target-array[i])) {
            return [map.get(target-array[i]), i]
        } else {
            map.set(array[i], i);
        }
    }
}
//When there is a unique pair
console.log(twoSum([2,8,3,1,6,0], 5)) //[0,2]

function twoSumAll(array, target) {
    let map = new Map();
    let result = [];
    for(let i =0; i<array.length; i++) {
        if(map.has(target-array[i])) {
            result.push([map.get(target-array[i]), i]);
        } else {
            map.set(array[i], i);
        }
    }
    return result;
}
console.log(twoSumAll([3,1,2,4,0,5], 5)) //[[0,2],[1,3],[4,5]]