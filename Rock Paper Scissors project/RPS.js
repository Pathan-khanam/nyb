const choiceBtns= document.querySelectorAll('.choice-btn');

const playerChoiceText= document.querySelector('.player-choice-text')
const cpuChoiceText = document.querySelector(".cpu-choice-text")

const gameTitle= document.querySelector(".game-title")

const scoreWonText=document.querySelector(".score-won-text")
const scoreDrawText= document.querySelector(".score-draw-text")
const scoreLostText=document.querySelector(".score-lost-text")


let playerResultValue =""
let cpuResultValue=""

const choiceEmoji ={
    rock:"✊",
    paper:"✋",
    scissors:"✌️"

}

choiceBtns.forEach((choiceBtns) => {
    choiceBtns.addEventListener("click",() => {
console.log(choiceBtns);
console.log(typeof choiceBtns);
        // choiceBtns.forEach((btn) => {
        //     btn.style.pointerEvents="none"
        // })
        // choiceBtns.forEach((txt)=>{
            // txt.style.pointerEvents="none"
        // })
            choiceBtns.style.pointerEvents="none"
       gameTitle.textContent="Let's Play!"

        playerChoiceText.textContent="✊"
        cpuChoiceText.textContent="✊"

    
        playerResultValue=choiceBtns.value
        cpuResultValue =getCpuResultValue()

        playerChoiceText.classList.add("player-choice-text-animation")
        cpuChoiceText.classList.add("cpu-choice-text-animation")
        

        setTimeout(() => {
             playerChoiceText.textContent=choiceEmoji[playerResultValue]
             cpuChoiceText.textContent=choiceEmoji[cpuResultValue]

            playerChoiceText.classList.remove("player-choice-text-animation")
            cpuChoiceText.classList.remove("cpu-choice-text-animation")
        

             showResultGame()
        //      choiceBtns.forEach(btn => {
            choiceBtns.style.pointerEvents="visible"
        // })
        }, 2000);

      
       showResultGame();
    })
})


function getCpuResultValue(){
    const cpuOptionChoices= ["rock","paper","scissors"]

    const cpuRandomChoice = cpuOptionChoices[Math.floor(Math.random() * cpuOptionChoices.length)]
    return cpuRandomChoice
}

function showResultGame(){
    if(playerResultValue == cpuResultValue){
        gameTitle.textContent= "Draw!"
        scoreDrawText.textContent ++
    }else if(
        playerResultValue == "rock" &&
        cpuResultValue == "scissors" 
        ||
        playerResultValue== "paper" &&
        cpuResultValue=="rock"
        ||
        playerResultValue=="scissors" &&
        cpuResultValue=="paper"

    ){
        gameTitle.textContent="You Won!"
        scoreWonText.textContent++
    }else{
        gameTitle.textContent="You Lost!"
        scoreLostText.textContent++
    }
}