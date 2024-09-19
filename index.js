// 1. Calculate Difference
function calculateDifference(a, b) {
  return a - b;
}

function testCalculateDifference() {
  const num1 = parseFloat(document.getElementById("Num1").value);
  const num2 = parseFloat(document.getElementById("Num2").value);
  document.getElementById("diffResult").innerText =
    "Difference: " + calculateDifference(num1, num2);
}

// 2. Checking Odd Number
function isOdd(num) {
  return num % 2 !== 0;
}

function testIsOdd() {
  const num = parseInt(document.getElementById("oddNum").value);
  document.getElementById("oddResult").innerText = isOdd(num)
    ? "The number is odd"
    : "The number is not odd";
}

// 3. finds Min Number
function findMin(arr) {
  return Math.min(...arr); //'...' is the spread operator unpacks the array into separate values for Math.min() to process.
}

function testFindMin() {
  const arr = document.getElementById("minArray").value.split(",").map(Number);
  document.getElementById("minResult").innerText = "Minimum: " + findMin(arr);
}

// 4. filtering Even Numbers
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function testFilterEvenNumbers() {
  const arr = document.getElementById("evenArray").value.split(",").map(Number);
  document.getElementById("evenResult").innerText =
    "Even Numbers are: " + filterEvenNumbers(arr).join(", ");
}

// 5. sort Array in Descending order
function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}

function testSortArrayDescending() {
  const arr = document.getElementById("sortArray").value.split(",").map(Number);
  document.getElementById("sortResult").innerText =
    "Sorted Array In Descending Order: " + sortArrayDescending(arr).join(", ");
}

// 6. lowercase First Letter fo a String
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function testLowercaseFirstLetter() {
  const str = document.getElementById("lowerString").value;
  document.getElementById("lowerResult").innerText =
    "Modified String: " + lowercaseFirstLetter(str);
}

// 7. counting Vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
}

function testCountVowels() {
  const str = document.getElementById("vowelString").value;
  document.getElementById("vowelResult").innerText =
    "Total Vowel Count: " + countVowels(str);
}
