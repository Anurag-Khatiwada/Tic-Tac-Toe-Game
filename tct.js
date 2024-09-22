let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector(".msg");

let turno=true;//player o

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText='o';
            box.style.color='#b0413e';
            turno=false;
        }
        else{
            box.innerText='x';
            box.style.color="green";
            turno=true;
        }
        box.disabled=true;   
        checkwinner();  
    })

})
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turno=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congrulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != ""&& pos3 != ""){
            if(pos1==pos2 && pos2==pos3){
               showWinner(pos1);
            }
        }
    }
}

resetbtn.addEventListener('click',resetgame);
newgame.addEventListener('click',resetgame);