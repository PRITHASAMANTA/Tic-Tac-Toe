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






// let arr=["apple","banana","litch"];

// //2d array//
// let arr2=[["apple","litch"],
//          ["potato","mushroom"],
//           ["shirt","pant"]];