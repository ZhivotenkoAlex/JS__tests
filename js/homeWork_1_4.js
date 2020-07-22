// Использование if else и арифметических операторов
// Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

// Переменная credits хранит количество средств - 23580 кредитов.

// Единица товара (дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

// Переменная orderPieces принимает значения null (отказ от покупок) и целое положительное число (количество единиц товара).

// Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// ‛Вы купили ${} дроидов, на счету осталось ${} кредитов‛
// const ACCESS_DENIED = 'Недостаточно средств на счету!'
// Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
// Используйте вспомогательную переменную balanceСredit, которая принимает разницу между credits и totalPrice.
// А также используйте if else для выбора значений переменной message.

let orderPieces = 10;
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid; // Write code in this line
let balanceСredit = credits - totalPrice; // Write code in this line
let message;

if (orderPieces === null) {
    message = CANCELED_BY_USER;
} else if (balanceСredit < 0) {
    message = ACCESS_DENIED;
} else { message = `Вы купили ${orderPieces} дроидов, на счету осталось ${ balanceСredit } кредитов`; }

console.log(message);