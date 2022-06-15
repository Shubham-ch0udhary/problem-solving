function sum2(...num) {
    let addedVal = num.reduce((a,b) => a+b, 0);
    return function(...num2) {
        let addedVal2 = num2.reduce((a,b) => a+b, 0);
        return addedVal2 ? sum(addedVal+addedVal2) : addedVal;
    }
}

console.log(sum2(1,2,3)(2,3)(3)()) //14