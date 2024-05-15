 
 // light/dark mode
 
function toggleSwitch(button) {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        document.body.style.backgroundColor = '#828953'; 
    } else {
        document.body.style.backgroundColor = '#BCB88A'; 
    }

}


//form to collect suggestions 
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  

        var email = document.getElementById('email').value;
        var tip = document.getElementById('tip').value;

        if(email.trim() === '' || tip.trim() === '') {
            alert('Please fill in all required fields.');
            return;
        }

        console.log('Email:', email);
        console.log('Suggestion:', tip);

        form.reset();
        alert('Thank you for your submission!');
    });
});


//random timer
let timerElement = document.getElementById('timer');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');

let totalSeconds = 0;
let interval = null;

function updateDisplay() {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    if (interval) return;  
    interval = setInterval(() => {
        totalSeconds++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    updateDisplay();
}

startButton.onclick = startTimer;
stopButton.onclick = stopTimer;
resetButton.onclick = resetTimer;