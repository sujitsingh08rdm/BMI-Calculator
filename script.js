let height = document.getElementById('height');
let weight = document.getElementById('weight');
let calculate = document.getElementById('calculate');
let reload = document.getElementById('reload');
let bmiOutput = document.getElementById('bmi-output');
let descOutput = document.getElementById('desc-output');

calculate.addEventListener('click', function () {
  if (height.value == '' && weight.value == '') {
    alert('Please enter inputs');
  } else if (weight.value == '') {
    alert('Please enter inputs');
  } else if (height.value == '') {
    alert('Please enter inputs');
  } else {
    let bmi = (weight.value / (height.value * height.value)) * 10000;
    bmiOutput.innerHTML = bmi.toFixed(2);

    if (bmi < 18) {
      descOutput.innerHTML = 'You are underweight';
    } else if (bmi >= 18 && bmi < 24) {
      descOutput.innerHTML = 'You are Normal weight';
    } else if (bmi >= 24 && bmi < 30) {
      descOutput.innerHTML = 'You are Above weight';
    } else if (bmi >= 30) {
      descOutput.innerHTML = 'You are Obese';
    }
  }
});

reload.addEventListener('click', function () {
  location.reload();
});
