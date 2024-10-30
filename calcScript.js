function number(value) {
    document.getElementById('result').value += value;
    
}
function allClear() {
    document.getElementById('result').value = "";
}
function deleteOperator() {
    let currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}
function equalOperator() {
    let result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    }
    catch (error) {
        alert("Invalid Expression");
    }

}