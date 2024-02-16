let myscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#my-score");
const compScore=document.querySelector("#comp-score");

const genchoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];
};

const drawgame=()=>{
    console.log("The game is draw");
    msg.innerText="The game is draw :|";
    msg.style.backgroundColor="#9A998C";
};

const showWinner=(userwin, userchoice, compchoice)=>{
    if(userwin){
        myscore++;
        userScore.innerText=myscore;
        console.log("You Win!");
        msg.innerText=`You Win :D   Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="#84C318";
    }
    else{
        compscore++;
        compScore.innerText=compscore;
        console.log("You Lose :(");
        msg.innerText=`You Lose :(   ${userchoice} beats your ${compchoice}`;
        msg.style.backgroundColor="#BC2C1A";
    }
};

const playgame=(userchoice) =>{
    console.log("user choice =",userchoice);
    const compchoice=genchoice();
    console.log("computer choice =",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //paper,scissor
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="scissors"){
            //paper,rock
            userwin=compchoice==="paper"?true:false;
        }
        else{
            //rock,scissor:paper
            userwin=compchoice==="rock"?true:false;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});