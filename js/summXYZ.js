// Если сумма трех x,y,z различных числел больше 100, то наименьшее из этих чисел - заменить полусуммой двух других, 
// иначе - меньшее из x и y заменить суммой оставшихся.


let x = Number(prompt("Введите первое число"));
let y = Number(prompt("Введите второе число"));
let z = Number(prompt("Введите третье число"));
let minXYZ = Math.min(x, y, z);
let minXY = Math.min(x, y, z);
if (x + y + z > 100) {
    switch (minXYZ) {
        case x:
            x = (y + z) * 0.5;
            console.log("Значение х изменено");
            break;
        case y:
            y = (x + z) * 0.5;
            console.log("Значение у изменено");
            break;
        default:
            z = (y + x) * 0.5;
            console.log("Значение z изменено");

    }
} else {
    switch (minXY) {
        case x:
            x = y + z;
            console.log("Значение х изменено");
            break;
        default:
            y = z + x;
            console.log("Значение у изменено");

    }

}

console.log(x, y, z)

// done