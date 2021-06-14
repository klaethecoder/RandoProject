const boxes = Array.from(document.getElementsByClassName("box"))
const restartButton = document.getElementById("resetGame");
const playText = document.getElementById('playText');
let moves = 0;

let spaces = [null,null,null,null,null,null,null,null,null]
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;

const drawBoard = () => {
    boxes.forEach((box, index)=>{
        let styleString ='';
        if(index < 3){
            styleString+= `border-bottom: 3px solid var(--purple);`;
        }
        if(index % 3===0){
            styleString+= `border-right: 3px solid var(--purple);`;

        }
        if(index %3===2){
            styleString+= `border-left: 3px solid var(--purple);`;

        }
        if(index > 5){
            styleString+= `border-top: 3px solid var(--purple);`;

        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
}
const boxClicked = (e) => {
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        console.log(spaces[id]);
        e.target.innerText = currentPlayer;
        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`
            boxes.forEach(box=>{
                box.removeEventListener("click", boxClicked);
            });
        }
       
        else if (moves >= 8){
            playText.innerText = "Cat's Game";
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
   
    moves++;

    
}

const playerHasWon = () => {
    if(spaces[0]=== currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins up top!!!`)
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins on the left!!!`)
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins Diagonally!!!`)
            return true;
        }
    }
    if(spaces[1]=== currentPlayer){
        if(spaces[4] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins up the middle!!!`)
            return true;
        } 
        
    }
    if(spaces[2]=== currentPlayer){
        if(spaces[5] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins on the right!!!`)
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins Diagonally!!!`)
            return true;
        }
    }
    if(spaces[3]=== currentPlayer){
        if(spaces[4] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins through the middle!!!`)
            return true;
        }   
    }
    

}

const reset = ()=> {
    let id = 0;
    for (let space in spaces){
        spaces[id] = null;
        console.log(space)
        id++;
    };
    boxes.forEach(box=>{
        box.innerText = '';
    });
    playText.innerText = "LET'S PLAY"
    console.log(spaces)
    moves = 0;
    drawBoard()
}

restartButton.addEventListener("click", reset);


drawBoard()