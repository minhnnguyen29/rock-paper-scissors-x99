// -------------- Global Variables ----------------
// player one 
let playerOneMoveOneType = ''; 
let playerOneMoveOneValue = '';
let playerOneMoveTwoType = ''; 
let playerOneMoveTwoValue = ''; 
let playerOneMoveThreeType = ''; 
let playerOneMoveThreeValue = ''; 

// player two 
let playerTwoMoveOneType = ''; 
let playerTwoMoveOneValue = '';
let playerTwoMoveTwoType = ''; 
let playerTwoMoveTwoValue = ''; 
let playerTwoMoveThreeType = ''; 
let playerTwoMoveThreeValue = ''; 


// -------------- Functions ---------------------

// set 3 moves for each player 
const setPlayerMoves = (player, 
                        moveOneType, moveOneValue, 
                        moveTwoType, moveTwoValue,
                        moveThreeType, moveThreeValue) => { 
    
    if (player === 'Player One'){

        playerOneMoveOneType = moveOneType; 
        playerOneMoveOneValue = moveOneValue; 
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue; 
        playerOneMoveThreeType = moveThreeType; 
        playerOneMoveThreeValue = moveThreeValue; 

    } else { // 'Player Two' 

        playerTwoMoveOneType = moveOneType; 
        playerTwoMoveOneValue = moveOneValue; 
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue; 
        playerTwoMoveThreeType = moveThreeType; 
        playerTwoMoveThreeValue = moveThreeValue; 

    }
}; 


// compare both player's move types & values for each round
const getRoundWinner = roundNum => {
    
    let typeWinner = ''; //store the winner of depending on type
    let valueWinner = ''; 

    switch(roundNum){
        case 1: 
            typeWinner = getTypeWinner(playerOneMoveOneType, playerTwoMoveOneType);
            
            if(typeWinner === 'Tie'){//if tie in type 
                valueWinner = getValueWinner(playerOneMoveOneValue, playerTwoMoveOneValue)
                return valueWinner; 
            }
            return typeWinner; 
        case 2: 
            typeWinner = getTypeWinner(playerOneMoveTwoType, playerTwoMoveTwoType);
            
            if(typeWinner === 'Tie'){//if tie in type 
                valueWinner = getValueWinner(playerOneMoveTwoValue, playerTwoMoveTwoValue)
                return valueWinner; 
            }
            return typeWinner; 

        default: //case 3
            typeWinner = getTypeWinner(playerOneMoveThreeType, playerTwoMoveThreeType);
            
            if(typeWinner === 'Tie'){//if tie in type 
                valueWinner = getValueWinner(playerOneMoveThreeValue, playerTwoMoveThreeValue)
                return valueWinner; 
            }
            return typeWinner; 


    }
}

// compare both player's move types & types for the whole game 
const getGameWinner = () => {

    let winnerRound1 = getRoundWinner(1);
    let winnerRound2 = getRoundWinner(2); 
    let winnerRound3 = getRoundWinner(3); 

    let playerOneScore = 0; 
    let playerTwoScore = 0; 

    if(winnerRound1 === 'Player One'){
        playerOneScore++; 
    } else if (winnerRound1 === 'Player Two'){
        playerTwoScore++;
    }

    if(winnerRound2 === 'Player Two'){
        playerTwoScore++; 
    } else if(winnerRound2 === 'Player One'){
        playerOneScore++; 
    }

    if(winnerRound3 === 'Player One'){
        playerOneScore++; 
    } else if(winnerRound3 === 'Player Two'){
        playerTwoScore++; 
    }



    // return winner 
    if (playerOneScore > playerTwoScore){
        return 'Player One'; 
    } else if (playerOneScore < playerTwoScore){
        return 'Player Two'; 
    } else {
        return 'Tie'; 
    }

}; 

// choose 3 random moves for player TWO 
const setComputerMoves = () => {
    
    const moves = ['rock', 'paper', 'scissors']; 
    const computerMoveOneType = moves[Math.floor(Math.random()*3)]; 
    const computerMoveTwoType = moves[Math.floor(Math.random()*3)];
    const computerMoveThreeType = moves[Math.floor(Math.random()*3)]; 


    const computerMoveOneValue = Math.floor(Math.random()*96) + 1; // value between 1 -> 97  (leave at least 2)
    const computerMoveTwoValue = Math.floor(Math.random())*(97 - computerMoveOneValue) + 1; // value between 1 -> (99 - computerMoveOneValue)
    const computerMoveThreeValue = 99 - computerMoveOneValue - computerMoveTwoValue; 
    
    // set these values to 'Player Two' using setPlayerMoves() (its role)
    setPlayerMoves('Player Two', computerMoveOneType, computerMoveOneValue, 
                    computerMoveTwoType, computerMoveTwoValue, 
                    computerMoveThreeType, computerMoveThreeValue); 


}; 

// ----------------- Helper functions ------------------
// determine who wins based on TYPE 

const getTypeWinner = (playerOne, playerTwo) => {
    
    // group their choices together to make finding winner easier 
    switch(playerOne + playerTwo) {
        
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return 'Tie'; 
        
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            return 'Player One'; 

        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            return 'Player Two'; 
    }


}

//determine who wins based on VALUE 
const getValueWinner = (playerOne, playerTwo) => {
    if(playerOne > playerTwo){
        return 'Player One'; 
    } else if (playerOne < playerTwo){
        return 'Player Two'; 
    } else { //equal move value 
        return 'Tie'; 
    }
}
