"use strict";
const jsConfetti = new JSConfetti()
const showTimer = true;
var audio = document.getElementById("audio");
audio.currentTime = 0;
// Add list of names here and audio files
// TODO: audio files need to be added in for each -- DONE!
var namesList = {'Jiesoo Kim':'/audio/jiesoo.mp3', 
'Oskar Pickering': '/audio/oskar.mp3',
'Luke Plastow': '/audio/luke p.mp3',
'Raine Rodgers': '/audio/raine.mp3',
'Yuna Shono': '/audio/yuna.mp3',
'Mr. G': '/audio/mr g.mp3',
'Aidan O\' Donnell': '/audio/aidan.mp3',
'Nathan van der Deijl': '/audio/nathan.mp3',
'Béranger Delorme': '/audio/beranger.mp3',
'Tom Schermeier': '/audio/tom.mp3'};

// Default variables
let i = 0;
let x = 0;
let intervalHandle = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const headerOne = document.getElementById('headerNames');

// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
  this.style.display = "none";
  stopButton.style.display = "block";
  intervalHandle = setInterval(function() {
	const namesArray = Object.keys(namesList);
    headerNames.textContent = namesArray[i++ % namesArray.length];
  }, 50);
  if (showTimer === true) {
    timerWrapper.classList.remove('visible');
  }
});

stopButton.addEventListener('click', function() {
  this.style.display = "none";
  startButton.style.display = "block";
  const audio2 = new Audio(namesList[headerNames.textContent]);
  // TODO: make sure this button is disabled for 10 seconds
  headerNames.textContent = 'Jack';
  setTimeout( function() {
	audio2.play();
}, 4000 );
  clearInterval(intervalHandle);
  audio.play(); 

  // code for confetti below
  jsConfetti.addConfetti({
    emojis: ['🤠', '⚡️', '💥', '✨', '💫', '🔥'],
 }) 
 jsConfetti.addConfetti({
  confettiColors: [
    '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
  ],
})
  jsConfetti.addConfetti({
  confettiRadius: 6,
  confettiNumber: 500,
})
  timer.innerHTML = time;
  if (showTimer === true) {
    timerWrapper.classList.add('visible');
  }
  startTimer();
});





