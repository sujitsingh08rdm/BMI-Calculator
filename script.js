let height = document.querySelector('.height');
let weight = document.querySelector('.weight');
let bmi = document.querySelector('.bmi');
let calculate = document.querySelector('.calculate');
let reload = document.querySelector('.reload');

calculate.addEventListener('click', function () {
  let meter = height.value * 0.3048;
  let squareMeter = meter * meter;
  let bmiCal = (weight.value / squareMeter).toFixed(2);
  console.log(bmiCal);

  bmi.innerHTML = 'Your BMI is : ' + bmiCal;

  if (bmiCal < 18) {
    document.querySelector('.category').innerHTML = 'You are underweight';
  } else if (bmiCal >= 18 && bmiCal < 24) {
    document.querySelector('.category').innerHTML = 'You are Normal weight';
  } else if (bmiCal >= 24 && bmiCal < 30) {
    document.querySelector('.category').innerHTML = 'You are Above weight';
  } else if (bmiCal >= 30) {
    document.querySelector('.category').innerHTML = 'You are Obese';
  }

  reload.addEventListener('click', function () {});
});
