const randomNumber = Math.floor(Math.random()*100+1);

const newPage = ()=>{
    let gameArea = document.body.querySelector('.game-area');
    gameArea.style.display = "none";
}

const startGame = ()=>{
   
    let gameArea = document.body.querySelector('.game-area');
    let menu = document.body.querySelector('.menu');
    menu.style.display = "none";
    let newGame = document.body.querySelector('.new-game');
    newGame.style.display = "none"
    gameArea.style.display = "block";
}

