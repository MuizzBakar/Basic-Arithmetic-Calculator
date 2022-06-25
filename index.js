let num1 = parseFloat(prompt("Input the first number: "));
let opr = prompt("Input the operator (+, -, /, *, %) ");
let num2 = parseFloat(prompt("Input the second number: "));

let result;

if (opr == "+") {

    result = num1 + num2;

} else if (opr == "-") {

    result = num1 - num2;

} else if (opr == "/") {

    result = num1 / num2;

} else if (opr == "*") {

    result = num1 * num2;

} else if (opr == "%") {

    result = num1 % num2;

}

alert(result);
