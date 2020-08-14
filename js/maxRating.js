// Найти автора с максимальным рейтингом из следующего объекта


const getMaxRating = function(list) {
    const entries = Object.entries(authors);
    let maxrating = 0;
    let nameOfLider = "";
    for (const [name, rating] of entries) {
        // const [name, rating] = entry;
        if (maxrating < rating) {
            maxrating = rating;
            nameOfLider = name;
        }
    }

    const message = `Лидер рейтинга автор ${nameOfLider} с рейтингом ${maxrating} баллов`;
    return message;
}

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
    apple: 10,
    mango: 12,
    rose: 2
};

console.log(getMaxRating(authors));