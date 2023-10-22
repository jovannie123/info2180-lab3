window.addEventListener('load', function(){
    const board = document.getElementById("board")
    const divArray = Array.from(board.getElementsByTagName("div"))
    const gameButton = document.getElementsByClassName("btn")[0]
    const gameStatus = document.getElementById("status")
    console.log(gameStatus)
    let turnOn = true

    //the nowMove variable shows the current move to be played
    let nowMove ="O"

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

    
    divArray.forEach(squared=>{
        //set div to have class square
        squared.classList.add("square")

        //add an X or O when clicked
        squared.addEventListener("click", clicked=>{
            if (squared.innerText == "" && turnOn == true){
                //changes the text inside the selected square to the move that is played.
                squared.innerText = nowMove
                //add the X or O class based on what is played.
                squared.classList.add(nowMove)
                //keeps track of moves in records array
                records[divArray.indexOf(squared)] = nowMove
                //calls the swapper fuction to change the move from X to O or vica verca.
                swapper()
            }
        })
    })
}
)