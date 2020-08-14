// const printMessage = function(message) {
//     console.log(message);
// };

// const higherOrderFunction = function(callback) {
//     const string = 'HOCs are awesome';
//     callback(string);
// };

// higherOrderFunction(printMessage);

// const repeatLog = function(n) {
//     for (let i = 0; i < n; i += 1) {
//         console.log(i + 1);
//     }
// }
// repeatLog(10)

// const printValue = function(value) {
//     console.log(value);
// }
// const prettyPrint = function(value) {
//     console.log('Logging value: ', value)
// }

// const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// }

// repeat(3, printValue);
// repeat(3, prettyPrint);

// const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// }
// const labels = [];
// repeat(5, value => {
//     labels.push(`Label ${value + 1}`)
// });

// console.log(labels);

// const tracks = [];

// repeat(10, count => tracks.push(`track-${count+1}`))

// console.log(tracks);

// const filter = function(array, test) {
//     const filteredElements = [];

//     for (const element of array) {
//         const passed = test(element);

//         if (passed) {
//             filteredElements.push(element);
//         }
//     }

//     return filteredElements;
// };

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);


// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);

// console.log(freshFruits);
// console.log(fruitsWithQuantity);


// const filter2 = function(array, test) {
//     const needToBuy = [];
//     for (const element of array) {
//         const passed = test(element);

//         if (passed) {
//             needToBuy.push(element);
//         }
//     }
//     return needToBuy;
// }


// const sklad = [
//     { name: 'pesok', quantity: 2000, isFresh: true },
//     { name: 'cement', quantity: 900, isFresh: false },
//     { name: 'scheben', quantity: 100, isFresh: true },
//     { name: 'graviy', quantity: 500, isFresh: true },
//     { name: 'kirpichRed', quantity: 500, isFresh: false },
//     { name: 'kirpichwhite', quantity: 1200, isFresh: true },
//     { name: 'kirpichDecor', quantity: 600, isFresh: true },
// ];

// const freshSklad = filter2(sklad, elementSklad => elementSklad.isFresh);

// console.log(freshSklad);

// const refreshSklad = filter2(sklad, elementSklad => elementSklad.quantity < 1000);

// console.log(refreshSklad);


function noSpace(x) {
    let message = [];
    for (let word of x) {
        if (word !== " ") {
            message.push(word);
        }

    }
    message = message.join('')
    return message;


}


// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B    8j8mBliB8gimjB8B8jlB'));
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'
//     '88Bifk8hB8BB8BBBB888chl8BhBfd');
// noSpace('8aaaaa dddd r     '
//     '8aaaaaddddr');