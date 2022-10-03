// Grabbing elements for use

// Boxes

const welcomeBox = document.querySelector('.welcomeBox')
const rulesBox = document.querySelector('.rulesBox')
const questBox = document.querySelector('.questContainer')
const resultsBox = document.querySelector('.resultsMainContainer')


// welcomeBox

const startButton = welcomeBox.querySelector('.start_Button')
const rulesButton = welcomeBox.querySelector('.bottomBar .rules_button')
const lbButton1 = welcomeBox.querySelector('.bottomBar .LB_Button')

// rulesBox

const mmButton1 = rulesBox.querySelector('.bottomBar .MM_Button')
const lbButton2 = rulesBox.querySelector('.bottomBar .LB_Button')

// question box

const mmButton2 = questBox.querySelector('.bottomBar .MM_Button')
const contButton = questBox.querySelector('.bottomBar .contButton')
const questCounter = questBox.querySelector('.questCount')
const optionList = document.querySelector('.optionList')

// Results Box

const mmButton3 = resultsBox.querySelector('.bottomBar .MM_Button')
const resultsContainer = resultsBox.querySelector('#results')

// Start button click

startButton.onclick = ()=>{
    questBox.classList.add('activeInfo')
    welcomeBox.classList.add('welcomeInact')
    contButton.classList.add('inactive')
    displayQuestions(0)
    questionCounter(1)
}

// Exit Quiz button click

mmButton2.onclick = ()=>{
    questBox.classList.remove('activeInfo')
    welcomeBox.classList.remove('welcomeInact')
    questCount = 0
    questNumber = 1
    score = 0
}

// Rules button click

rulesButton.onclick = ()=>{
    rulesBox.classList.add('activeInfo')
    welcomeBox.classList.add('welcomeInact')
}

// rulesBox main menu button click

mmButton1.onclick = ()=>{
    rulesBox.classList.remove('activeInfo')
    welcomeBox.classList.remove('welcomeInact')
}

// Resultsbox main menu button click

mmButton3.onclick = ()=>{
    resultsBox.classList.remove('active')
    welcomeBox.classList.remove('welcomeInact')
    questCount = 0
    questNumber = 1
    score = 0
}

// When questBox continue button is clicked

contButton.onclick = ()=>{
    if(questCount < questions.length - 1){
        questCount++;
        questNumber++;
        displayQuestions(questCount);
        questionCounter(questNumber);
    }
    else{
        console.log('Questions Completed');
        displayResultsBox();
    }
    contButton.classList.add('inactive');
}

let questCount = 0;
let questNumber = 1;
let score = 0;

// Getting questions and options from array

function displayQuestions(index){
    const questText = document.querySelector('.question');
    let questTag = '<span>'+ questions[index].question +'</span>';
    let optTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    questText.innerHTML = questTag;
    optionList.innerHTML = optTag;
    const option = optionList.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }
}

// Option selection function

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questCount].answer;
    let allOptions = optionList.children.length;
    if( userAnswer == correctAnswer){
        score += 1;
        console.log(score);
        answer.classList.add('correct');
        console.log('The answer is correct');
    }
    else{
        answer.classList.add('incorrect')
        console.log('The answer is incorrect');
    }
    
    //disabling optionlist after a selection is made
    for (let x = 0; x < allOptions; x++) {
        optionList.children[x].classList.add('disabled');
    }
    contButton.classList.remove('inactive');
    contButton.classList.add('active');
}

// Display results box with score

function displayResultsBox() {
    questBox.classList.remove('activeInfo');
    resultsBox.classList.add('active');
    const scoreText = resultsContainer.querySelector('.resultsTotals');
    let scoreTag = '<span><p>Correct Questions</p><p>' + score + '</p><p>of</p><p>' + questions.length + '</p></span>';
    scoreText.innerHTML = scoreTag
}

// Question counter function

function questionCounter(index){
    let questCountTag = '<span><p>Question</p><p>' + index + '</p><p>of</p><p>' + questions.length + '</p></span>';
questCounter.innerHTML = questCountTag;
}

