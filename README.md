# Tic-Tac-Toe

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe Game</title>
    <link rel="stylesheet" href="style3.css">
</head>
<body>
    <div class="msg-container hide">
        <p id="msg">winner</p>
        <button id="new-button">New Game</button>
    </div>
    <main>
        <h1>Tic-Tac-Toe</h1>
        <div class="container">
        <div class="game">
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
        </div>
    </div>
    <button id="reset-button">Reset Game</button>
    </main>
    <script src="script3.js"></script>
</body>
</html>


*{
    margin:0;
    padding:0;

}

body{
  background-color: #548687;  
  text-align: center;
}

.container{
    height:70vh;
    display: flex;
     justify-content: center;
     align-items: center;
     gap:1.5vmin;

}
.game{
    height: 60vmin;
    width: 60vmin;
    display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     gap:1.5vmin;
}


   
.box{
    height: 18vmin;
    width: 18vmin;
    border-radius: 1rem;
    border:none;
    box-shadow: 0 0 1rem rgba(0,0,0,0,4);
    font-size: 8vmin;
    color:#b0413e;
    background-color: #ffff67; ;
}

#reset-button{
    padding: 1rem;
    font-size: 1.25rem;
    background-color: #b0413e;
    color:#fff;
    border-radius:1rem ;
    border:none;


}

#new-button{
    padding: 1rem;
    font-size: 1.25rem;
    background-color: #b0413e;
    color:#fff;
    border-radius:1rem ;
    border:none;


}

#msg{
    color:#ffff;
    font-size: 5vmin;
}

.msg-container{
    height:30vmin;
}
.hide{
    display: none;
}


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer =document.querySelector(".msg-container ");
let msg=document.querySelector("#msg");



let turnO = true;  //player x, player 0//--by clicking box either o is true or x

//winning patterns//---used array//

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame =()=>
{
 turnO=true;
 enableBoxes();
 msgContainer.classList.add("hide");
};




boxes.forEach((box)  => {
box.addEventListener("click",() =>{
    console.log("box was clicked");
    if(turnO===true)
    {
        box.innerText="O";
        turnO=false;

    }
    else{
        box.innerText="X";
        turnO = true;

    }
   box.disabled=true;


   checkwinner();
});
});



 const disableBoxes =()=>
 {
    for(let box of boxes)
    {
        box.disabled=true;
    }
 };


 const enableBoxes =()=>
 {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText = "";
    }
 };


 const showWinner = (winner) =>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
 }  
const checkwinner =()=>{
 for (let pattern of winpatterns)
 {
    

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != ""&& pos1val != ""&& pos1val != "" )
        {
            if(pos1val === pos2val && pos2val=== pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
 }
};


newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
