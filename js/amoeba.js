// Одноклеточная амеба каждые 3 часа делится на 2 клетки. Определить, сколько амеб будет через 3, 6, 9, 12,..., 24 часа.

let total = 1;
const time = 24;
let i;

for (i = 1; i < time; i += 3) {
    total *= 2;

}

console.log(`Через ${time} часов будет ${total} амеб`)

// Done