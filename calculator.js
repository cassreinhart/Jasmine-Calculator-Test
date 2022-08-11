window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  let values = {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
  return values; 
}

function setupIntialValues() {
  // Get the inputs from the DOM.
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");
  
  amount.setAttribute('placeholder', '250000');
  years.setAttribute('placeholder', '30');
  rate.setAttribute('placeholder', '5%');

  // Put some default values in the inputs
  let values = {
    amount: 250000,
    years: 30,
    rate: .05
  }
  
  calculateMonthlyPayment(values); // Call a function to calculate the current monthly payment
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  calculateMonthlyPayment(values);
  updateMonthly();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate) / 12;
  let n = (values.years) * 12;
  let monthly;

  calc = (p * i) / (1 - Math.pow((1 + i), -n));
  monthly = calc.toFixed(2);
  monthly.toString();
  
  updateMonthly(monthly);
  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const container = document.querySelector('h3');

  container.innerText = 'Monthly Payment: ' + monthly;
}
