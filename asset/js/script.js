const form = document.querySelector('form');

// This function is not working 
// function validateForm(){
//     if (height.value =='' || weight.value =='' ||)
//      {
//        alert("All fields are required!");
//        document.querySelector("btn").removeEventListener("click", bmi);
//     } else {
//         bmi();
//     }
// }

// This is validate Form function

function validateForm() {
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
  
    if (height === '' || isNaN(height) || height <= 0 || weight === '' || isNaN(weight) || weight <= 0) {
      alert("All fields are required and must be valid numbers!");
      document.querySelector("#btn").removeEventListener("click", bmi);
    } else {
      bmi();
    }
  }
  

  function bmi() {
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
  
    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
      const bmiValue = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
      results.innerHTML = `<span>${bmiValue}</span>`;
    }
  }
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
  });

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // BMI formula 

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

