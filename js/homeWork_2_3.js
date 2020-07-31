// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
    // Write code under this line

    let items = string.split(' ');
    let longestWord = items[0];

    for (const item of items) {
        if (longestWord.length < item.length) {
            longestWord = item;
        }
    }
    return `${longestWord}`;
}



console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'