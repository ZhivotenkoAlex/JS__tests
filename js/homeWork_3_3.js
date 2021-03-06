// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного 
// (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// const findBestEmployee = function(employees) {
//     'use strict';
//     // Write code under this line
//     if (Object.keys(employees).length === 0) {
//         return '';
//     }
//     let employ = Object.keys(employees);
//     let taskValue = Object.values(employees);
//     let maxTasks = taskValue[0];
//     let lider = "";
//     let count = 0;
//     for (let i = 0; i < taskValue.length; i += 1) {
//         if (maxTasks < taskValue[i]) {
//             maxTasks = taskValue[i];
//             count = i;
//         }

//     }
//     lider += employ[count];
//     return lider;
// };

const findBestEmployee = function(employees) {
    'use strict';
    // Write code under this line
    let lider = '';
    let maxTasks = 0;
    const keys = Object.keys(employees);
    for (const key of keys) {
        if (maxTasks < employees[key]) {
            maxTasks = employees[key];
            lider = key;

        }
    }
    return lider;
};


// Объекты и ожидаемый результат
const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}
console.log(findBestEmployee(sellers));
// 'lux'