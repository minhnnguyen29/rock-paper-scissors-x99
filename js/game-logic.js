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

}; 

// choose 3 random moves for player TWO 
const setComputerMoves = () => {

}; 

// ----------------- Helper functions ------------------
// determine who wins based on TYPE 

/*TO DO 
case paper 
case scissors 
*/
const getTypeWinner = (playerOne, playerTwo) => {
    /*
    if (playerOne === 'rock'){
        if (playerTwo === 'paper'){
            return 'Player Two';
        } else if (playerTwo === 'scissors'){
            return 'Player One'
        } else { // playerTwo === 'rock' 
            return 'Tie'; 
        }
    } else if (playerOne === 'paper'){
        if (playerTwo === 'rock'){
            return 'Player One'; 
        } else if (playerTwo === 'scissors'){
            return 'Player Two'; 
        } else {
            return 'Tie'; 
        }
    }
    */
   
    // group their choices together 
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