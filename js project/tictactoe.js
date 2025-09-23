let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let line = document.querySelector('.line');
let statusText = document.querySelector('#status')
let confetti =document.getElementsByClassName('.line-canvas')
let winLine = document.getElementById('#winLine');


    const clickSound = document.getElementById('clickSound');
    const winSound = document.getElementById('winSound');


let  board = document.querySelector(".board")

let boardRect =board.getBoundingClientRect();

let turnO = true; //playerO playerX
let  gameOver= false;

const winPatterns = [
    [0,1,2],//top row
    [0,3,6],// left column
    [0,4,8],// diagonal
    [1,4,7],//middle column
    [2,5,8],//right column
    [2,4,6],// diagonal
    [3,4,5],//middle row
    [6,7,8],//bottom row

];
const resetGame = () => {
    turnO = true;
   
    enableBoxes();
    msgContainer.classList.add("hide")

};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return; // prevent clicking after game over

        if (turnO) {
            box.classList.add("o");
            box.innerText = "O";
            box.style.color = "#60435F";
        } else {
            box.classList.add("x");
            box.innerText = "X";
            box.style.color = "#E74C3C"; // optional for X
        }

        box.disabled = true;

        checkWinner();

        // update turn only if game is not over
        if (!gameOver) {
            turnO = !turnO;
            statusText.innerText = `Turn: ${turnO ? "O" : "X"}`;
        }
        box.disabled = true;

        checkWinner();
    });
});

  

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner) => {
    msg.innerText= `congratulations
     winner is ${winner}`;
     showWinner.style ="#89CE94"
    msgContainer.classList.remove('hide');
    disableBoxes();
    
};



const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val= boxes[pattern[2]].innerText

if( pos1val !="" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val ===pos3val){
         drawLine(pattern, pos1val)
        console.log("winner", pos1val);
    //     highlightWinner(winningcombo, current);
    //      // play sound + show overlay after small delay
    //   if (winSound) { try { winSound.currentTime=0; winSound.play(); } catch(e){} }
        //setTimeout(()=> showOverlay(current), 700)
         setTimeout(() => {
         statusText.innerText=`${pos1val}` + "wins!🎉🎊";
         
         showWinner(pos1val);
         launchconfetti();
         gameOver=true;
         //return;
         },1500);

        return;
      }

}
   
  }
 
    if([...boxes].every((box) => box.innerText !== "")&& !gameOver){
    statusText.innerText="Draw!";
    gameOver=true;
        
     }
 }


 function drawLine(pattern,winner) {
    const thickness = 5;
    const winLine = document.querySelector('.win-line'); // or use global 'line' if already declared

    // Determine line start and end (example based on box centers)
    const cell1 = boxes[pattern[0]].getBoundingClientRect();
    const cell2 = boxes[pattern[2]].getBoundingClientRect();

    const x1 = cell1.left + cell1.width / 2;
    const y1 = cell1.top + cell1.height / 2;
    const x2 = cell2.left + cell2.width / 2;
    const y2 = cell2.top + cell2.height / 2;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);

    // Set dimensions and position
    winLine.style.width = length + 'px';
    winLine.style.height = thickness + 'px';
    winLine.style.left = x1 + 'px';
    winLine.style.top = (y1 - thickness / 2) + 'px';

    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    winLine.style.transform = `rotate(${angle}deg)`;

    // 🎉 Glow effect based on winner
    let glowColor = winner === 'O' ? '#00ffff' : '#ff00ff';
    winLine.style.backgroundColor = glowColor;
    winLine.style.boxShadow = `0 0 15px ${glowColor}, 0 0 30px ${glowColor}, 0 0 45px ${glowColor}`;

    winLine.style.display = 'block';
}


    function highlightWinner(combo, player) {
      combo.forEach(i => {
        cells[i].classList.add('winner', player);
      });
    }

    function clearHighlights() {
      cells.forEach(c => c.classList.remove('winner','X','O'));
    }



function reset(){
    boxes.forEach(box => {
        box.innerText ="";
        box.style.color="white";
    

    });
    line.style.display="none";
    gameOver= false;
    turnO=true;
    statusText.innerText= "turn: O";
}

let canvas = document.getElementById("confetti");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiParticles = [];

function launchconfetti() {
    confettiParticles = [];
    for (let i = 0; i < 300; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: 5 + Math.random() * 5,
            h: 10 + Math.random() * 10,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speed: Math.random() * 3 + 2
        });
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(c => {
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.w, c.h);
        c.y += c.speed;
        if (c.y > canvas.height) c.y = -10;
    });
    requestAnimationFrame(animateConfetti);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    

});

 newGameBtn.addEventListener("click", resetGame);

 
 resetbtn.addEventListener("click", resetGame);










