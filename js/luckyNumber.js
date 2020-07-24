// Пользователь вводит 6-ти значное	 число, определить является ли число счастливым (сумма первых 3-х цифр равна сумме вторых 3-х цифр).

let number = prompt("Введите шестизначное число");

let leftHalf = Number(number.slice(0, 1)) + Number(number.slice(1, 2)) + Number(number.slice(2, 3));
let rightHalf = Number(number.slice(3, 4)) + Number(number.slice(4, 5)) + Number(number.slice(5));
if (number.length != 6) {
    console.log('Вы ввели не шестизначное число');
}
leftHalf === rightHalf ? console.log('Вы ввели счастливое число') : console.log('Вы ввели обычное число');

// Done