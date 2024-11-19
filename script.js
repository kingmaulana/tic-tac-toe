
//Array Store Input From User
let input1 = ["", "", ""];
let input2 = ["", "", ""];
let input3 = ["", "", ""];

let scoreX = 0;
let scoreO = 0;

const scorePl1 = document.querySelector('.pl-1>span');
const scorePl2 = document.querySelector('.pl-2>span');

// Conditional to Check input user
function checkGame() {

    for(let i = 0; i < input1.length; i++) {
        // Horizontal
        if(input1[i] === input1[i + 1] && input1[i + 1] == input1[i + 2] && input1[i] !== '') {
            if(playerOne.turn === false) {
                scoreX++;
                scorePl1.innerText = scoreX;
                resetGame();
            } else {
                scoreO++;
                scorePl2.innerText = scoreO;
                resetGame();
            }
            // console.log('WIN Horizontal 1');
        } 
        if(input2[i] === input2[i + 1] && input2[i + 1] == input2[i + 2] && input2[i] !== '') {
            if(playerOne.turn === false) {
                scoreX++;
                scorePl1.innerText = scoreX;
                resetGame();
            } else {
                scoreO++;
                scorePl2.innerText = scoreO;
                resetGame();
            }
            // console.log('WIN Horizontal 2');
        } 
        if(input3[i] === input3[i + 1] && input3[i + 1] == input3[i + 2] && input3[i] !== '') {
            if(playerOne.turn === false) {
                scoreX++;
                scorePl1.innerText = scoreX;
                resetGame();
            } else {
                scoreO++;
                scorePl2.innerText = scoreO;
                resetGame();
            }
            // console.log('WIN Horizontal 3');
        } 

    }

    for(let i = 0; i < input1.length; i++) {
        if(input1[0] === input2[0] && input2[0] === input3[0] && input3[0] && input1[0] && input2[0]) {
            if(playerOne.turn === false) {
                scoreX++;
                scorePl1.innerText = scoreX;
                resetGame();
            } else {
                scoreO++;
                scorePl2.innerText = scoreO;
                resetGame();
            }
            // console.log("OK Vertical 1");
            break;
        }
        if(input1[1] === input2[1] && input2[1] === input3[1] && input3[1] && input1[1] && input2[1]) {
            if(playerOne.turn === false) {
                scoreX++;
                scorePl1.innerText = scoreX;
                resetGame();
            } else {
                scoreO++;
                scorePl2.innerText = scoreO;
                resetGame();
            }
            // console.log("OK Vertical 2");
            break;
        }
        if(input1[2] === input2[2] && input2[2] === input3[2] && input3[2] && input1[2] && input2[2]) {
            if(playerOne.turn === false) {
                scoreX++;
                scorePl1.innerText = scoreX;
                resetGame();
            } else {
                scoreO++;
                scorePl2.innerText = scoreO;
                resetGame();
            }
            // console.log("OK Vertical 3");
            break;
        }
    }

    for(let i = 0; i < input1.length; i++) {
        if(input1[0] === input2[1] && input2[1] === input3[2] && input1[0] && input2[1] && input3[2]) {
            if(playerOne.turn === false) {
                scoreX++;
                scorePl1.innerText = scoreX;
                resetGame();
            } else {
                scoreO++;
                scorePl2.innerText = scoreO;
                resetGame();
            }
            // console.log("OK Cross 1");
            break;
        }
        if(input1[2] === input2[1] && input2[1] === input3[0] && input3[0] && input1[2] && input2[1]) {
            if(playerOne.turn === false) {
                scoreX++;
                scorePl1.innerText = scoreX;
                resetGame();
            } else {
                scoreO++;
                scorePl2.innerText = scoreO;
                resetGame();
            }
            // console.log("OK Cross 2");
            break;
        }
    }

    if(input1[0] && input1[1] && input1[2] && input2[0] && input2[1] && input2[2] && input3[0] && input3[1] && input3[2]) {
        console.log('DRAW');
        resetGame();
    }
}


const row1 = document.querySelector('#row-1');
const row2 = document.querySelector('#row-2');
const row3 = document.querySelector('#row-3');
const td = document.querySelectorAll('td');

//each time user click a bon insidde gameboard
const boardBox = document.querySelectorAll("td");
boardBox.forEach(box => {
    box.addEventListener("click", (item) => {
        for(let i = 0; i < td.length; i++) {
            if(item.target.id === td[i].id) {
                if(!(td[i].innerText === 'X' || td[i].innerText === 'O')) {
                    if(td[i].parentNode.id === row1.id) {
                            if(playerOne.turn === true) {
                                input1[item.target.id] = 'X';
                                playerOne.turn = false;
                                playerTwo.turn = true;
                                td[i].innerText = 'X';
                            } else if(playerTwo.turn === true) {
                                input1[item.target.id] = 'O';
                                playerOne.turn = true;
                                playerTwo.turn = false;
                                td[i].innerText = 'O';
                            }
                    } else if(td[i].parentNode.id === row2.id) {
                        if(playerOne.turn === true) {
                            input2[item.target.id-3] = 'X';
                            playerOne.turn = false;
                            playerTwo.turn = true;
                            td[i].innerText = 'X';
                        } else if(playerTwo.turn === true) {
                            input2[item.target.id-3] = 'O';
                            playerOne.turn = true;
                            playerTwo.turn = false;
                            td[i].innerText = 'O';
                        }
                    } else if(td[i].parentNode.id === 'row-3') {
                        if(playerOne.turn === true) {
                            input3[item.target.id-6] = 'X';
                            playerOne.turn = false;
                            playerTwo.turn = true;
                            td[i].innerText = 'X';
                        } else if(playerTwo.turn === true) {
                            input3[item.target.id-6] = 'O';
                            playerOne.turn = true;
                            playerTwo.turn = false;
                            td[i].innerText = 'O';
                        }
                    } 
                }          
                break;
            }
        }
        // console.log(input1);
        // console.log(input2);
        // console.log(input3);
        checkGame();
        checkWinner();
    });
});

//console.log(row1);

//make a trun for each user
function Player(turn) {
    this.turn = turn;
}
// create player object
let playerOne = new Player(true);
let playerTwo = new Player(false);


// remove all the item inside box when one of the player win or draw
function resetGame() {
    for(item of td) {
        item.innerText = '';
    };
    input1 = ["", "", ""];
    input2 = ["", "", ""];
    input3 = ["", "", ""];
}

function resetScore() {
    scoreO = 0;
    scoreX = 0;
    scorePl1.innerText = scoreX;
    scorePl2.innerText = scoreO;
}
// if button reset was clicked
const buttonReset = document.querySelector('.btn-reset');
buttonReset.addEventListener('click', () => {    
    resetGame();
    resetScore();
});


// who first reach 3 point score will declare as a winner an reset
function checkWinner() {
    if(scoreX === 3) {
        showWinner('PLAYER ONE');
        resetGame();
        resetScore();
    } else if(scoreO === 3) {
        showWinner('PLAYER TWO');
        resetGame();
        resetScore();
    }
}

function showWinner(player) {
    const h1Winner = document.querySelector('.result');
    h1Winner.innerText = `The Winner Is ${player}`;
}