// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

// Weekday Month Day, time e.g., Friday May 2, 7pm

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
    const shortDate = longDate.split(" ").slice(0, 3).join(" ");
    return shortDate;
}
// принимает строку, разбивает ее на массив и выдает новый массив только с тремя первыми элементами

console.log(shortenToDate("Friday May 2, 9am"));
console.log(shortenToDate("Tuesday January 29, 10pm"));
console.log(shortenToDate("Monday December 25, 10pm"));