const StartBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const mathBtn = document.querySelector('.math-btn');
const physicsBtn = document.querySelector('.physics-btn');
const chemistryBtn = document.querySelector('.chemistry-btn');
const biologyBtn = document.querySelector('.biology-btn');
const financeBtn = document.querySelector('.finance-btn');


mathBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
    questionCounter(1)
    headerScore();
}     

chemistryBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
}   

biologyBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
}   

financeBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
}   
StartBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}


tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();

}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);

}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount <questions.length -1){
        questionCount ++;
        showQuestions(questionCount);
        questionNumb ++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');

    } else{
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

//getting questions and options from array

function showQuestions(index){
    const questionText = document.querySelector(".question-text");
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"> <span>${questions[index].options[0]}</span> </div>
        <div class="option"> <span>${questions[index].options[1]}</span> </div>
        <div class="option"> <span>${questions[index].options[2]}</span> </div>
        <div class="option"> <span>${questions[index].options[3]}</span> </div>`;

    optionList.innerHTML = optionTag;
    
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }

}

function optionSelected(answer) {
    let userAnswer = answer.textContent.trim();
    let correctAnswer = questions[questionCount].answer.trim();
    let allOptions = optionList.children.length;
    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        userScore +=1;
        headerScore();
    } else {
        answer.classList.add('incorrect');

        // if answer incorrect,auto select correct asnwer
        for (let i = 0; i< allOptions;i++){
            if (optionList.children[i].textContent==correctAnswer){
                optionList.children[i].setAttribute('class','option correct');
            }
        }

    }
    // if user has selected, disable all options
    for (let i=0;i<allOptions;i++){
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

function questionCounter(index){
    const questionTotal = document.querySelector(".question-total");
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore}/ ${questions.length}`;
}


function showResultBox(){
    quizBox.classList.remove('active')
    resultBox.classList.add('active')

    const ScoreText = document.querySelector('.score-text');
    ScoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1
    let progressEndValue = (userScore/questions.length ) * 100;
    let speed = 20;

    let progress = setInterval (() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#000ac4 ${progressStartValue * 3.6}deg,rgba(255,255,255,.1)0deg)`;

        if (progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    },speed);
}