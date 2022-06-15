function add(a) {
    return function(b) {
        return b ? add(a+b) : a;
    }
}
console.log(add(5)(2)(3)()); //10
console.log(add(5)(2)(4)(5)()); //16