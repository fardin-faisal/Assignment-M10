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
