const startButton = document.querySelector('#start-btn');
const restartButton = document.querySelector('#restart-btn');

const buttons = {
    red: document.querySelector('[data-color="red"]'),
    yellow: document.querySelector('[data-color="yellow"]'),
    blue: document.querySelector('[data-color="blue"]'),
    green: document.querySelector('[data-color="green"]'),
}

let currentSequence = [];
let guessedSequence = [];

let roundStarted = false;
let canClick = true;

async function waitForSeconds(seconds) {
    return new Promise(res=> setTimeout(() => res(null), seconds * 1000));
}

async function blink(color) {
    return new Promise(res => {
        buttons[color].setAttribute('data-blink', '1');

        setTimeout(() => {
            buttons[color].removeAttribute('data-blink');
            res(null);
        }, 250);
    })
}

function randomColor() {
    const colors = ['red', 'yellow', 'green', 'blue'];
    const index = Math.floor(Math.random() * 4);
    return colors[index];
}

function addRound() {
    const color = randomColor();
    currentSequence.push(color);
}

async function failed(it = 0) {
    const promises = [];

    for(const color of Object.keys(buttons)) {
        promises.push(blink(color));
    }

    await Promise.all(promises);
    await waitForSeconds(0.3);

    if(it < 4) failed(it + 1);
}

async function playSequence() {
    canClick = false;

    for(const color of currentSequence) {
        await blink(color);
        await waitForSeconds(0.1);
    }

    canClick = true;
}

function updateUI() {
    document.querySelector('#current-score').innerHTML = "Atual: " + currentSequence.length;
}

async function makeGuess(color) {
    if(!roundStarted || !canClick) return;

    await blink(color);
    guessedSequence.push(color);

    for(let i = 0; i < currentSequence.length; i++) {
        const correctColor = currentSequence[i];
        
        if(guessedSequence.length >= i + 1 && guessedSequence[i] !== correctColor) {
            await restart();
            return;
        }
    }

    if(guessedSequence.length < currentSequence.length)
        return;

    guessedSequence = [];
    await waitForSeconds(1);
    updateUI();
    addRound();
    playSequence();
}

function start() {
    if(roundStarted) return;

    roundStarted = true;
    addRound();
    playSequence();
}

async function restart() {
    canClick = false;
    localStorage.setItem('current-record', (currentSequence.length - 1).toString());
    document.querySelector('#current-record').innerHTML = "Recorde: " + (currentSequence.length - 1).toString();
    document.querySelector('#current-score').innerHTML = "Atual: 0";
    currentSequence = [];
    guessedSequence = [];

    await failed();
    roundStarted = false;
    canClick = true;
}

(function() {
    startButton.addEventListener('click', (e) => {
        start();
    });
    
    restartButton.addEventListener('click', (e) => {
        restart();
    });

    buttons.red.addEventListener('click', () => { makeGuess('red') });
    buttons.yellow.addEventListener('click', () => { makeGuess('yellow') });
    buttons.blue.addEventListener('click', () => { makeGuess('blue') });
    buttons.green.addEventListener('click', () => { makeGuess('green') });

    document.querySelector('#current-record').innerHTML = "Recorde: " + (localStorage.getItem('current-record') ?? '0');
})() 