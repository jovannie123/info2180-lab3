window.addEventListener('load', function(){
    const board = document.getElementById("board")
    const divArray = Array.from(board.getElementsByTagName("div"))
    const gameButton = document.getElementsByClassName("btn")[0]
    const gameStatus = document.getElementById("status")
    console.log(gameStatus)
    let turnOn = true

    //the nowMove variable shows the current move to be played
    let nowMove ="X"

    //Switch the move from an O to an X
    let swapper = function(){
        console.log("An " + nowMove + " was played")
        if(nowMove== "O"){
            nowMove = "X"
        }
        else{
            nowMove = "O"
        }
    }

    //Array for recording moves
    let records = ["","","","","","","","",""]

    //function to check for winner
    let checkWin = function(){
        if(records[0] !=""){
            if((records[0]==records[1] && records[0]==records[2]) || (records[0]==records[3] && records[0]==records[6]) || (records[0]==records[4] && records[0]==records[8])){
                return true
            }
        }
        if(records[1] !=""){
            if(records[1]==records[4] && records[1]==records[7]){
                return true
            }
        }
        if(records[2] !=""){
            if((records[2]==records[4] && records[2]==records[6]) || (records[2]==records[5]&&records[2]==records[8])){
                return true
            }
        }
        if(records[3] !=""){
            if(records[3]==records[4] && records[3]==records[5]){
                return true
            }
        }
        if(records[6] !=""){
            if(records[6]==records[8] && records[6]==records[7]){
                return true
            }
        }
        return false
    }



    //contains all functionality for each square on the grid.
    divArray.forEach(squared=>{
        //set div to have class square
        squared.classList.add("square")

        //add an X or O when clicked
        squared.addEventListener("click", clicked=>{
            if (squared.innerText == "" && turnOn == true){

                //changes the text inside the selected square to the move that is played.
                squared.innerText = nowMove

                //add the X or O class based on what is played.
                if(nowMove=="X"){
                    squared.classList.add("X")
                }
                else{
                    squared.classList.add("O")
                }

                //keeps track of moves in records array
                records[divArray.indexOf(squared)] = nowMove
                
                //calls the checkWin function after every move to see of the current player has won the game
                if(checkWin() == true){
                    turnOn = false
                    gameStatus.innerText = "Contragulations! " + nowMove + " is the winner"
                    gameStatus.classList.add("you-won")
                    
                }

                //calls the swapper fuction to change the move from X to O or vica verca.
                swapper()
            }
        })

        squared.addEventListener("mouseover", overMove=>{
            squared.classList.add("hover")
        })
        
        squared.addEventListener("mouseout", outMove=>{
            squared.classList.remove("hover")
        })
    })

    gameButton.addEventListener("click", clicker=>{
        turnOn=true
        console.log("starting new game")
        divArray.forEach(squared =>{
            squared.innerText = ""
            if(nowMove=="X"){
                squared.classList.remove("X")
            }
            else{
                squared.classList.remove("O")
            }
        })
        records = ["","","","","","","","",""]
        gameStatus.innerText = "Move your mouse over a square and click to play an X or an O."
        gameStatus.classList.remove("you-won")
        nowMove="X"
        console.log(gameStatus)
    })
})