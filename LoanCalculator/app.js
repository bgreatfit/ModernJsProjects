
/*
Loan Formula
Monthly paymebt = [r + r/((1+r)^ months - 1)] * principal loan amt
where r  decimal rate/12
r is interest

*/

const form = document.getElementById('loan-form').addEventListener('submit',function(e){
  //get elements and set display
  document.getElementById('results').style.display = 'none';
  
  document.getElementById('loading').style.display = 'block';
  
  setTimeout(calculateResults,'2000');

  
  e.preventDefault();
});

function calculateResults (){
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const  totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');


  const principal  = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayment = parseFloat(years.value) * 12;

  //calculate monthly payment
  const x = Math.pow(1 + calculateInterest,calculatePayment );
  const monthly = (principal * x * calculateInterest) / (x-1)
  
  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayment).toFixed(2);
    totalInterest.value = ((monthly * calculatePayment)- principal).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
        
  }else{
    const msg = 'Please check your number';
    showError(msg)
  }




}
function showError(msg){
  document.getElementById('loading').style.display = 'none';
  // create a div
  const errorDiv = document.createElement('div');
  //add class name
  errorDiv.className = 'alert alert-danger';
  
  //creat text node and append to error div
  const text = document.createTextNode(msg);
  errorDiv.appendChild(text);

  //get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  
  
  

  card.insertBefore(errorDiv, heading);
  //console.log(div);

  //remove error notification after 3secs
  setTimeout(clearError,'3000');


}
function clearError(){
  document.querySelector('.alert').remove();
}

