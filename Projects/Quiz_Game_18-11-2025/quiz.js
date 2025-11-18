var questions=[{
    question:"Which of the following is a primitive data type in JS?", options:["String","Array","Object"], answer:"String"},
    {question:"Which keyword is used to declare a variable that cannot be reassigned?", options:["var","let","const"], answer:"const"},
    {question:"What will be the output: console.log(2+'2')?", options:["4","22","NaN"], answer:"22"},
    {question:"Which of these values is falsy in JS? ", options:["0","'0'","1"], answer:"0"},
    {question:"which method converets a string to uppercase?", options:["toUpperCase()","uppercase()","toUpper()"], answer:"toUpperCase()"},
    {question:"What will be the output: Boolean('')?", options:["true","false","undefined"], answer:"false"},

]

let currentQuestion =0;
let score=0;

const questionE1=document.getElementById("question");
const optionsE1=document.getElementById("options");
const scoreE1=document.getElementById("score");

//display question
function showQuestion(){
    const q=questions[currentQuestion];
    questionE1.textContent=q.question;
    optionsE1.innerHTML="";
    q.options.forEach(option => {
        const btn=document.createElement("button");
        btn.textContent=option;
        btn.onclick= () =>checkAnswer(option);
        optionsE1.appendChild(btn);

    })
}

//check answer
function checkAnswer(selected){
    if(selected === questions[currentQuestion].answer){
        score++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

//show final score
function showScore(){
    questionE1.textContent="Quiz Finished!";
    optionsE1.innerHTML="";
    scoreE1.textContent=`Your score: ${score} out of ${questions.length}`;
}

//start quiz
showQuestion();
