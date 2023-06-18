'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number'; // change text
// document.querySelector('.number').textContent = 73;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23 ;

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20 + 1);

let highscore = 0;

 document.querySelector('.check').addEventListener('click', function(){
 const guess =  Number(document.querySelector('.guess').value);
 console.log(typeof guess , guess);
 if(!guess){
    document.querySelector('.message').textContent = '⛔No Number ';
 }else if (guess ===  secretNumber){
    document.querySelector('.message').textContent = '🥳 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width= '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highscore){
        highscore = score;
    document.querySelector('.highscore').textContent = highscore;
 }
 }else if(guess !== secretNumber){
    if(score > 1 ){
        document.querySelector('.message').textContent = guess > secretNumber ? '👌 Too high' :'❤️ Too low' ;
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
    }
}
})


document.querySelector('.again').addEventListener('click' , function(){
    const secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width= '15rem';
    document.querySelector('.guess').value= '';
});

