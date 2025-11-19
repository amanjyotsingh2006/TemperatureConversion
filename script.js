let n = document.getElementById('number1');
let submit1 = document.getElementById('submit');
let result1 = document.getElementById('result');
let cf1 = document.getElementById('cf');
let fc1 = document.getElementById('fc');

function submit() {
    // console.log(n.value);
    let value = parseFloat(n.value);
    if (cf1.checked) {
        result1.value = `${(value * 9 / 5) + 32} F`;
    }
    else if (fc1.checked) {
        result1.value = `${(value - 32) * 5 / 9} C`;
    }
    else{
        result1.value = "Select a conversion type";
    }
    // result1.value = n.value;
}

submit1.addEventListener('click', submit);