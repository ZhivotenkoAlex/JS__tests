let a = 5;
let b = 6;
let c = 0;


// c = b;
// b = a;
// a = c;
// console.log("Первый способ " + a, b)

b = [a, a = b][0]
a = a + b;
b = a - b;
a = a - b;
console.log("Второй способ " + a, b)