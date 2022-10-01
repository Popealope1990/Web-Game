// Grabbing elements for use

// Boxes

const welcomeBox = document.querySelector('.welcomeBox')
const rulesBox = document.querySelector('.rulesBox')
const questBox = document.querySelector('.questContainer')
const resultsBox = document.querySelector('.resultsMainContainer')

// buttons

// welcomeBox buttons

const startButton = welcomeBox.querySelector('.start_Button')
const rulesButton = welcomeBox.querySelector('.bottomBar .rules_button')
const lbButton1 = welcomeBox.querySelector('.bottomBar .LB_Button')

// rulesBox buttons

const mmButton1 = rulesBox.querySelector('.bottomBar .MM_Button')
const lbButton2 = rulesBox.querySelector('.bottomBar .LB_Button')

// question box buttons

const mmButton2 = questBox.querySelector('.bottomBar .MM_Button')

// Start button click

startButton.onclick = ()=>{
    questBox.classList.add('activeInfo')
    welcomeBox.classList.add('welcomeInact')
}

// Exit Quiz button

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