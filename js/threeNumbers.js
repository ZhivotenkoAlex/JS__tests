// Ввести 3 числа
//   Вывести: Максимальное и Минимальное число и их позиции (под каким порядковым номеров они были введены).



const a = Number(prompt("Введите первое число"));
const b = Number(prompt("Введите второе число"));
const c = Number(prompt("Введите третье число"));

console.log("Максимальное число - " + Math.max(a, b, c) + ". Минимальное число - " + Math.min(a, b, c));


switch (Math.min(a, b, c)) {
    case a:
        console.log("Минимальное число было введено первым");
        break;
    case b:
        console.log("Минимальное число было введено вторым");
        break;
    default:
        console.log("Минимальное число было введено третьим")

}

switch (Math.max(a, b, c)) {
    case a:
        console.log("Максимальное число было введено первым");
        break;
    case b:
        console.log("Максимальное число было введено вторым");
        break;
    default:
        console.log("Максимальное число было введено третьим")

}



// done