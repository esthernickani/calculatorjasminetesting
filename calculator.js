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
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount:5000, years:5, rate:2 }

  const amountUI = document.getElementById("loan-amount");
  const yearsUI = document.getElementById("loan-years");
  const rateUI = document.getElementById("loan-rate");

  amountUI.value = +values.amount;
  yearsUI.value = +values.years;
  rateUI.value = +values.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = values.rate/12;
  const n = values.years * 12;

  const monthlyPayment = (p * i)/(1 - Math.pow(1+i, -n));
  console.log(`monthlyPayment:${monthlyPayment}, p:${p}, i:${i}, n:${n}`)
  return monthlyPayment.toFixed(2);
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  paymentSpan = document.querySelector("#monthly-payment")

  paymentSpan.innerText = `$${monthly}`
}
