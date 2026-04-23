// 1) Calculate Difference
function calculateDifference(a, b) {
    return a - b;
}
console.log("1. Difference:", calculateDifference(20, 8));


// 2) Is Odd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("2. Is 7 Odd?:", isOdd(7));


// 3) Find Min
function findMin(arr) {
    return Math.min(...arr);
}
console.log("3. Smallest Number:", findMin([15, 2, 34, 8, 1]));


// 4) Filter Even Numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("4. Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));


// 5) Sort Array Descending
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}
console.log("5. Descending Order:", sortArrayDescending([5, 2, 9, 1, 7]));


// 6) Lowercase First Letter
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("6. Lowercased String:", lowercaseFirstLetter("Hello"));


// 7) Find Average
function findAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
console.log("7. Average:", findAverage([10, 20, 30, 40]));


// 8) Is Leap Year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("8. Is 2024 Leap Year?:", isLeapYear(2024));