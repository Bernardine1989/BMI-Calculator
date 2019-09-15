
document.getElementById("calculate").onclick = function() {
   calcBMI();
   document.getElementById("output").innerHTML = "<p style='color:#ff4893'>Your current BMI is " + Math.floor(calcBMI()) + "</p>";
}

function calcBMI(weight, height) {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    return weight / Math.pow(height, 2);
}