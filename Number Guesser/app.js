//Number Guesser
let 
    min = 1,
    max = 10,  
    guessesLeft = 3;
    winningNum = getRandomNumber(min,max);


const game =  document.querySelector('#game'),
      guessInput = document.querySelector('#guess-input'),  
      guessValue = document.querySelector('#guess-value'),  
  minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'), 
      guessBtn = document.querySelector('#guess-btn'),   
      message = document.querySelector('.message')
      minNum.textContent = min;
      maxNum.textContent = max; 
game.addEventListener('mousedown',function(e){
    if(e.target.className == 'play-again'){
        location.reload();
    }
    

});
guessBtn.addEventListener('click',function(e){
    //validate
    let guess = parseInt(guessInput.value);
   
    if(isNaN(guess) || guess < min || guess > max){
       setMessage(`Please Enter a Number Between ${min} and ${max}`,'red');
       
    }
    else{
    //if won
    if(guess === winningNum){
       gameOver(`${winningNum} is correct. You Win`,true);
    }else{
        //wrong number
        guessesLeft -=1;
        if(guessesLeft === 0){

           
           
            gameOver(`Sorry, You lost ${winningNum} is the guess`,false); 
      
        }else{

            // Game continues - answer wrong

           // Change border color
            guessInput.style.borderColor = 'red';
      
            // Clear Input
            guessInput.value = '';
      
            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
   
        }
    }
}


    


}) 
//get random number
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}
//display game Over
function gameOver(msg,won){
   let color;
   won === true? color = 'green' : color = 'red';
   guessInput.disabled = true;
   guessInput.style.borderColor = color;
   setMessage(msg,color);
   guessBtn.value = 'Play again';
   guessBtn.className += 'play-again';

}

//setMessage
function setMessage(msg,color){
    message.textContent = msg;
     
   message.style.color = color;
}