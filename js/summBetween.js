// Написать программу, которая находит сумму всех целых чисел от n до m включительно. 

let sum = 0;


for (let i = 5; i <= 6; i += 1) {
    sum += i;
}

console.log(sum)

// done
function getSum(a, b) {
    let sum = 0;
    if (a < b) {
        for (i = a; i <= b; i += 1) {
            sum += i;
        }
    } else {
        for (i = b; i <= a; i += 1) {
            sum += i;
        }
    }
    return sum;
}