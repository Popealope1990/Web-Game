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

// Start button click

startButton.onclick = ()=>{
    questBox.classList.add('activeInfo')
    welcomeBox.classList.add('welcomeInact')
    displayQuestions(0)
    questionCounter(1)
}

// Exit Quiz button click

mmButton2.onclick = ()=>{
    questBox.classList.remove('activeInfo')
    welcomeBox.classList.remove('welcomeInact')
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

// When questBox continue button is clicked

contButton.onclick = ()=>{
    if(questCount < questions.length - 1){
        questCount++;
        questNumber++;
        displayQuestions(questCount);
        questionCounter(questNumber);
    }
    else{
        console.log('Questions Completed')
    }
}


let questCount = 0;
let questNumber = 1;

// Getting questions and options from array

function displayQuestions(index){
    const questText = document.querySelector('.question');
    const optionList = document.querySelector('.optionList');
    let questTag = '<span>'+ questions[index].question +'</span>';
    let optTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    questText.innerHTML = questTag;
    optionList.innerHTML = optTag;
}

// Question counter function

function questionCounter(index){
    let questCountTag = '<span><p>Question</p><p>' + index + '</p><p>of</p><p>' + questions.length + '</p></span>';
questCounter.innerHTML = questCountTag;
}

