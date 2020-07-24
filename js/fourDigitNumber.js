// Пользователь вводит 4-х-значное число, поменять местами 1 с 2 и 3 с 4 цифры. Если число не 4-х значное - вывести сообщение.


let number = prompt("Введите четырехзначное число ");
// let newNumber;

let newNumber;

console.log(number);
// let newNumber = number.slice(1, 2) + number.slice(0, 1) + number.slice(3) + number.slice(2, 3);

if (number.length > 4) {
    console.log('Вы ввели не четырехзначное число');
} else {
    newNumber = number.slice(1, 2) + number.slice(0, 1) + number.slice(3) + number.slice(2, 3);
    console.log(newNumber);
}
// number.length < 5 ? console.log(newNumber) : console.log('Вы ввели не четырехзначное счисло');

// done