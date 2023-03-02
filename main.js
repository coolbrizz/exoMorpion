const cells = document.querySelectorAll('[data-cell]');
const cellule = document.querySelectorAll('cell');
const gameStatus = document.getElementById('gameStatus');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X'; const playerTwo = 'O';
let playerTurn = playerOne;

cells.forEach(cell => {
    cell.addEventListener("click", (e) => {
        function turnPlayerOne() {
            cell.innerHTML = `${playerOne}`;
            console.log(playerTurn)
            gameStatus.innerHTML = "Joueur 2 , à vous de jouez ! "
            playerTurn = playerTwo;
        };
        function turnPlayerTwo() {
            cell.innerHTML = `${playerTwo}`;
            console.log(playerTurn)
            gameStatus.innerHTML = "Joueur 1 , à vous de jouez ! "
            playerTurn = playerOne;
        };

        if (playerTurn == playerOne) {
            turnPlayerOne();
        } else {
            turnPlayerTwo();
        }
    })
});
