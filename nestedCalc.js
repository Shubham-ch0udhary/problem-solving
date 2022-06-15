class calculators {
    constructor() {
        this.result = 0;
    }
    add(a) {
        this.result +=  a;
        return this;
    }
    sub(b) {
        this.result -= b;
        return this;
    }
    mul(c) {
        this.result *= c;
        return this;
    }
    divide(d) {
        this.result /= d;
        return this;
    }
}
const calc = new calculators();
console.log(calc.add(2).add(4).sub(1).mul(5).divide(5).result); //5