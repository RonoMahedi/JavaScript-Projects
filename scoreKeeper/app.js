const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const reset = document.querySelector('.reset');
const input = document.querySelector('input');
const player1Display = document.querySelector('.player1Display');
const player2Display = document.querySelector('.player2Display');

// player1.removeEventListener("click",handler,false);
// player2.removeEventListener("click",handler,false);

const h1 = document.querySelector('h1');
const winner=document.querySelector('.winner');
let p1S=0;
let p2S=0;
let winingS=10;
let gameOver =false;

winner.innerHTML=winingS;


player1.addEventListener('click',function (){

  if(!gameOver){
    p1S++
    if(p1S === winingS){
      player1Display.classList.add("green");
        gameOver=true;
    }
  }
  player1Display.innerHTML=p1S;
})

player2.addEventListener('click',function handler(){
  if(!gameOver){
    p2S++
    if(p2S === winingS){
      player2Display.classList.add("green");
        gameOver=true;
    }
  }
  player2Display.innerHTML=p2S;
})

reset.addEventListener('click',function(){
  p1S = 0;
  p2S = 0;
  player1Display.innerHTML =p1S;
  player2Display.innerHTML =p2S;
  player1Display.classList.remove('green');
  player2Display.classList.remove('green');
  gameOver=false;
})
input.addEventListener("change",function(){
  winingS.innerHTML = input.value;
  winner.innerHTML = input.value;
  console.log(input.value);
})
