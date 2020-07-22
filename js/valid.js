// Write a program and ask the user to enter a number. The number should be between 1 to 10. If the user enters a valid number, display "Valid" 
// on the console. Otherwise, display "Invalid". (This logic is used a lot in applications where values entered into input boxes need to be validated.)

let number = prompt("Введите число от 1 до 10")
number >= 1 && number <= 10 ? console.log("Вы ввели правильное число") : console.log("Вы ввели неверное число");