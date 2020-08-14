// Даны три стороны треугольника, вывести на экран: существует ли такой треугольник 
// и его тип (равносторонний, равнобедренный, прямоугольный, разносторонний).



const getTriangleType = function(figure) {
    'use strict';
    let message = "1";
    const values = Object.values(figure);
    console.log(values);
    if (values[0] > values[1] + values[2] || values[1] > values[0] + values[2] || values[2] > values[0] + values[1]) {
        message = `Треугольник со сторонами ${values[0]}, ${values[1]} и ${values[2]} не существует`;
    } else if (values[0] === values[1] && values[1] === values[2]) {
        message = `Треугольник со сторонами ${values[0]}, ${values[1]} и ${values[2]} является равносторонним`;
    } else if (values[0] === values[1] || values[0] === values[2] || values[1] === values[2]) {
        message = `Треугольник со сторонами ${values[0]}, ${values[1]} и ${values[2]} является равнобедренным`;
    } else if (values[0] !== values[1] && values[1] !== values[2]) {
        message = `Треугольник со сторонами ${values[0]}, ${values[1]} и ${values[2]} является разносторонним`;
    }

    if (values[0] ** 2 === values[1] ** 2 + values[2] ** 2 || values[1] ** 2 === values[0] ** 2 + values[2] ** 2 || values[2] ** 2 === values[1] ** 2 + values[0] ** 2) {
        message += ' и прямоугольным';
    }

    return message;
}



const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 5,
}


console.log(getTriangleType(triangle));

const triangle2 = {
    sideA: 2,
    sideB: 3,
    sideC: 3,
}


console.log(getTriangleType(triangle2));

const triangle3 = {
    sideA: 2,
    sideB: 3,
    sideC: 100,
}


console.log(getTriangleType(triangle3));
const triangle4 = {
    sideA: 2,
    sideB: 3,
    sideC: 4,
}


console.log(getTriangleType(triangle4));

console.log(getTriangleType(triangle3));
const triangle5 = {
    sideA: 5,
    sideB: 5,
    sideC: 5,
}


console.log(getTriangleType(triangle5));