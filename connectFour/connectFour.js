// constants variables (configuration)
const NUM_ROWS = 6;
const NUM_COLS = 7;

// Game logic variables
// 6 x 7 2D array
let gridState = getEmptyGridState();
let startedPlayer = "r";
let currentPlayer = "r"; // or can be 'y' 
let finGame = false;
let redPoints = 0;
let yellowPoints = 0;
let tiePoints = 0;
let colIndex;
let popUpMsg = document.getElementById("winningMsg");

// dom elements
const grid = document.querySelector(".grid");
const column = document.querySelector(".column");
const circles = document.querySelectorAll(".circle"); // array of 42 circles
const playerDisc = document.querySelector(".player-disc");
let red = document.getElementById("redScore");
let yellow = document.getElementById("yellowScore");
let tie = document.getElementById("tieCount");
const resetButton = document.getElementById("reset");
const nextButton = document.getElementById("newGame");
const modal = document.getElementById("myModal");

function getEmptyGridState() {
    return Array.from({length: NUM_ROWS}, function(){
        return Array(NUM_COLS).fill(null);
    });
}


function highlightCol(index){
    let columns = document.getElementsByClassName("column");
    for(let i = 0; i< columns.length; i++){
       if(i % NUM_COLS == index)
       {
        columns[i].classList.add("highlighted");
       }
       else{
        columns[i].classList.remove("highlighted");
       }
    }
}

window.addEventListener("mousemove", function(event){
    const offset = grid.offsetLeft;
    const columnWidth = column.clientWidth;
    colIndex = Math.floor((event.clientX-offset) / columnWidth);
    if(colIndex >= 0 && colIndex <= NUM_ROWS)
    {
        const playerDiscLocation = offset + (columnWidth * colIndex) + ((columnWidth - playerDisc.clientWidth) / 2);        
        playerDisc.style.left = playerDiscLocation + "px";
        playerDisc.classList.remove("hide");
    }else{
        playerDisc.classList.add("hide");
    }
    highlightCol(colIndex);
});

function tallyScore(){
    if (currentPlayer == "r"){
        redPoints++;
        red.innerText = redPoints;
    }else {
        yellowPoints++;
        yellow.innerText = yellowPoints;
    }
}

// just return the winner or tie
// "WIN" or "TIE" or "GAME ON"
function checkWinner()
{
    // horizontal check
    for (let rowIndex = 0; rowIndex < NUM_ROWS; rowIndex++) {
        const row = gridState[rowIndex];
        let a = -1;
        for(let i = 0; i < 4; i++){
            if(row[a+1] == currentPlayer && row[a+2] == currentPlayer && row[a+3] == currentPlayer && row[a+4] == currentPlayer){
            //    tallyScore()
                return "WIN";
            }
            a++;
        }
    };

    // vertical check
    for(let i = 0; i < 7; i++){
        let a = -1;
        for(let b = 0; b < 3; b++)
        {
            if(gridState[a+1][i] == currentPlayer && gridState[a+2][i] == currentPlayer && gridState[a+3][i] == currentPlayer && gridState[a+4][i] == currentPlayer){
                // tallyScore()
                return "WIN"
            }
            a++;
        }
    }

    // down diagonal checks
    for(let i = 0; i < 3; i++)
    {
        for(let a = 0; a < 4; a ++)
        {
            if(gridState[i][a] == currentPlayer && 
                gridState[i+1][a+1] == currentPlayer && 
                gridState[i+2][a+2] == currentPlayer && 
                gridState[i+3][a+3] == currentPlayer
            ){
                return "WIN"
            }
        }
    }

    // up diagonal checks
    for(let i = 0; i < 3; i++)
    {
        for(let a = 3; a < 7; a++)
        {
            if(gridState[i][a] == currentPlayer && 
                gridState[i+1][a-1] == currentPlayer && 
                gridState[i+2][a-2] == currentPlayer && 
                gridState[i+3][a-3] == currentPlayer){
                // tallyScore()
                return "WIN"
            }
        }
    }


    // check for tie
    let t = 0;
    gridState.forEach((row) => {
        row.forEach((pieces) => {
            if(pieces != null)
            {
                t++;
            }
       });
    });

    if(t == 42)
    {
        return "TIE";
    }

    return "GAME ON";
}

function incrementTies() {
    tiePoints++;
    tie.innerText = tiePoints;
    finGame = true;
    nextButton.removeAttribute("disabled");
}

function reset(){
    // update the dom
    circles.forEach((circle)=>{
      circle.style.backgroundColor = "white";
    });
    // update virtual state
    gridState = getEmptyGridState();

    finGame = false;
    nextButton.setAttribute("disabled", "disabled");
    resetButton.removeAttribute("disabled");
    setCurrentPlayer(startedPlayer);
}


window.addEventListener("click", function(){
    if (colIndex >= 0 && colIndex < NUM_COLS && !finGame)
    {
        // find an open slot checking from bottom row to top row at chosen column
        for (let rowIndex = NUM_ROWS - 1; rowIndex >= 0; rowIndex--)
        {
            // when slot is open
            if (gridState[rowIndex][colIndex] == null)
            {
                gridState[rowIndex][colIndex] = currentPlayer;
                
                const result = checkWinner(); // "WIN" or "TIE" or "GAME ON"
                if (result === "WIN") {
                    modal.style.display = "block";
                    popUpMsg.textContent = (currentPlayer === "r")?"Winner Red!!!":"Winner Yellow!!!";
                    tallyScore();
                    finGame = true;
                    nextButton.removeAttribute("disabled");
                    resetButton.setAttribute("disabled", 'true');
                } else if (result === "TIE") {
                    modal.style.display = "block";
                    popUpMsg.textContent = "TIE! Nobody wins.";
                    incrementTies();
                    finGame = true;
                    nextButton.removeAttribute("disabled");
                    resetButton.setAttribute("disabled", 'true');
                }

                const circleIndex = NUM_COLS * rowIndex + colIndex; // index between 0 and 41
                const circle = circles[circleIndex];
                // update the circle and toggle the player
                if(currentPlayer === "r")
                {
                    circle.style.backgroundColor = "red";
                    setCurrentPlayer("y"); // toggle the player
                }
                else{
                    circle.style.backgroundColor = "yellow";
                    setCurrentPlayer("r"); // toggle the player
                }

                break; // NOTE: use break instead of i = 0;
            }
       }
    }
})

// reset can be clicked mid game
resetButton.addEventListener("click", reset);

// next can only be clicked at the end of the game
nextButton.addEventListener("click", function(event) {
    event.stopPropagation();
    startedPlayer = currentPlayer;
    modal.style.display = "none";
    reset();
});

function setCurrentPlayer(player) { 
    currentPlayer = player;
    if (player === "r") {
        playerDisc.classList.add("player-red");
        playerDisc.classList.remove("player-yellow");
    } else {
        playerDisc.classList.remove("player-red");
        playerDisc.classList.add("player-yellow");
    }
}