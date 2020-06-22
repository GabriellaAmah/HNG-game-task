window.onload = beginGame;



//DOM ELEMENTS
let gameSeconds = document.getElementById('seconds');
let currentWords = document.getElementById('currentword');
let timer = document.getElementById('time');
let inputWords = document.getElementById('typeword');
let Messages = document.getElementById('message');
let scoreRecord = document.getElementById('score')
//game levels

let gameLevels = {
    easy : 10,
    medium : 5,
    hard: 3
}

//game variables
let currentLevel = gameLevels.medium;
let time = currentLevel;
let gameScore = 0;
let nowPlaying;
const words = [
    'width',
    'unlikely',
    'acceptable',
    'depressed',
    'loot',
    'disappear',
    'default',
    'manufacture',
    'pastel',
    'vegetable',
    'budget',
    'opera',
    'pool',
    'mirror',
    'secular',
    'laser',
    'censorship',
    'interference',
    'leash',
    'pay',
    'satisfied',
    'pepper',
    'allocation',
    'club',
    'patent',
    'fuss',
    'lake',
    'commission',
    'president',
    'simplicity',
    'technique',
    'magnitude',
    'favor',
    'color-blind',
    'paper',
    'assignment',
    'abnormal',
    'cultural',
    'transport',
    'threaten',
    'quaint',
    'mug',
    'major',
    'compromise',
    'favorable',
    'appreciate',
    'check',
    'van',
    'referral',
    'bell'
];

function beginGame(){
 //function to display random words when window loads
    randomWords();
    // function to call our timer countdown at an interval of 1 1seconds;
    setInterval(timerCount, 1000);
    //function to check your game status
    setInterval(evaluateGame, 50);
    //function to call all proces of the game
    inputWords.addEventListener('input', playGame)
}

function playGame(){
    //if matchwords return true
    if(matchWords()){
        nowPlaying = true;
        time = currentLevel + 1;
        randomWords();
        inputWords.value = '';
        gameScore++
    }

    if(gameScore == -1){
        scoreRecord.textContent = 0
    }else{
        scoreRecord.textContent = gameScore;
    }
}




//setting time to our html
gameSeconds.textContent = time

//function to get random words

function randomWords(){
    let random = Math.floor( Math.random() * words.length);

   return currentWords.textContent = words[random]
}

//function to call a tiomer

function timerCount(){
    if (time > 0){
        //time should start counting down;
        time--
    }else if(time == 0){
        nowPlaying = false
    }

    timer.textContent = time
}

//fumction to check if our words match

function matchWords(){
    if(inputWords.value == currentWords.textContent){
        Messages.textContent = `yaay you've got this`;
        return true
    }else{
        Messages.textContent = `try again!!`
        return false
    }
}

//function to check if game is still on;

function evaluateGame(){
    if(!nowPlaying && time == 0){
        Messages.textContent = 'game over';
        gameScore -= 1
    }
}



