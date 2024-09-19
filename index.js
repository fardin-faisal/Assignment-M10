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
  const num = parseInt(document.getElementById('oddNum').value);
  document.getElementById('oddResult').innerText = isOdd(num) ? "The number is odd" : "The number is not odd";
}