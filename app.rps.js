let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber];
}
console.log(getcomputerChoice());

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissor";
}
function win(userchoice,computerchoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span,innerHTML=computerScore;
    const smallUserWord="user".fontsize(2).sub();
    const smallcomputerWord="computer".fontsize(2).sub();
    result_p.innerHTML=`${convertToWord(userchoice)} ${smallUserWord} beats ${convertToWord(computerchoice)} ${smallcomputerWord} You Win!`;
    document.getElementById(userchoice).classList.add('green_glow');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('green_glow')},1050);
}
function lose(userchoice,computerchoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(2).sub();
    const smallcomputerWord="computer".fontsize(2).sub();
    result_p.innerHTML=`${convertToWord(userchoice)} ${smallUserWord} loses ${convertToWord(computerchoice)} ${smallcomputerWord} Computer Wins!...  `;
    document.getElementById(computerchoice).classList.add('red_glow');
    setTimeout(function(){document.getElementById(computerchoice).classList.remove('red_glow')},600);
}
function draw(userchoice,computerchoice){
    const smallUserWord="user".fontsize(2).sub();
    const smallcomputerWord="computer".fontsize(2).sub();
    result_p.innerHTML=`${convertToWord(userchoice)} ${smallUserWord} equals ${convertToWord(computerchoice)} ${smallcomputerWord} It's a draw!`;
}





function game(userChoice){
    const computerChoice=getcomputerChoice();
    console.log("User choice =>" + userChoice);
    console.log("Computer choice =>" +computerChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissor_div.addEventListener('click',function(){
        game("s");
    })
}

main();