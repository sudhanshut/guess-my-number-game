'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20 + 1);

let highscore = 0;

const displayMessage = function(msg){
    document.querySelector('.message').textContent = msg;
}
const scoreMsg = function(para){
    document.querySelector('.score').textContent = para;
}

 document.querySelector('.check').addEventListener('click', function(){
 const guess =  Number(document.querySelector('.guess').value);
 if(!guess){
  displayMessage('⛔No Number ');
 }else if (guess ===  secretNumber){
    displayMessage ( '🥳 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width= '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highscore){
        highscore = score;
    document.querySelector('.highscore').textContent = highscore;
 }
 }else if(guess !== secretNumber){
    if(score > 1 ){
        displayMessage ( guess > secretNumber ? '👌 Too high' :'❤️ Too low') ;
        score--;
        scoreMsg( score)
    }else{
        displayMessage ( 'You lost the game');
        scoreMsg(0);
        document.querySelector('body').style.backgroundColor = 'red';
    }
}
})


document.querySelector('.again').addEventListener('click' , function(){
    const secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage ('Start guessing...');
    scoreMsg(20);
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width= '15rem';
    document.querySelector('.guess').value= '';
});

