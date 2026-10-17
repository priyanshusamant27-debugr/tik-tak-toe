let btns = document.querySelectorAll(".cell");
let resetBtn = document.querySelector(".reset");
let msgCon = document.querySelector(".msg-con");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector(".NEW-GAME");

let player1=true;

let pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("clicked");
        if(player1){
            btn.innerHTML="X";
            player1=false;
        }
        else{
            btn.innerHTML="O";
            player1=true;
        }
        btn.disabled=true;
        checkwinner();
    });
});
const winner = (winnerName) => {
    msgCon.classList.remove("hide");
    msg.innerHTML = `${winnerName} is the winner`;
};
const resetgame=()=>{
    player1=true;
    for(let btn of btns){
        btn.innerHTML="";
        btn.disabled=false;
        msgCon.classList.add("hide");
    }; 
}
const checkwinner=()=>{
    for (let wpattern of pattern){
        let btntext1=btns[wpattern[0]].innerHTML;
        let btntext2=btns[wpattern[1]].innerHTML;
        let btntext3=btns[wpattern[2]].innerHTML;
        if (btntext1!==""&& btntext2!==""&& btntext3!==""){
            if(btntext1==btntext2 && btntext2==btntext3){
                winner(btntext1);
                
            }
        }

    }
}

resetBtn.addEventListener("click", resetgame);
newGameBtn.addEventListener("click", resetgame);