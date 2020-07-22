// Write a program and ask the user to enter the width and height of an image. Then tell if the image is landscape or portrait.

const width = prompt("Введите ширину изображения");
const heigth = prompt("Введите длину изображения");
width > heigth ? console.log("У изображения альбомная ориентация") : console.log("У изображения портретная ориентация");