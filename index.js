// Grabbing elements for use

const welcomeBox = document.querySelector('.welcomeBox')
const rulesButton = welcomeBox.querySelector('.bottomBar .rules_button')
const lbButton = document.getElementsByClassName('.LB_Button')
const rulesBox = document.querySelector('.rulesBox')


    // Rules button click
rulesButton.onclick = ()=>{
    rulesBox.classList.add('activeInfo')
    welcomeBox.classList.add('welcomeInact')
}
