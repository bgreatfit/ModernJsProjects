//Number Guesser
let winningNum = 3,
    min = 1,
    max = 10;

const game =  document.querySelector('#game'),
      guessInput = document.querySelector('#guess-input'),  
      guessValue = document.querySelector('#guess-value'),  
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'), 
      guessBtn = document.querySelector('#guess-btn'),   
      message = document.querySelector('.message')
      
      minNum.textContent = min;
      maxNum.textContent = max;   
guessBtn.addEventListener('click',function(e){
    //validate
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
       setMessage(`Please Enter a Number Between ${min} and ${max}`,'red');
       
    }
      
    //if won
    if(guess === winningNum){
       guessInput.disabled = true;
       setMessage(`${winningNum} is correct. You Win`,'green');
    }

    


}) 

//setMessage
function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color
    guessInput.style.borderColor = color;
}