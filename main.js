const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne ='X'; const playerTwo = 'O';
let playerTurn = playerOne;
cells.forEach(cell => {cell.addEventListener("click", (e) =>{
    console.log("test")
})
    
});