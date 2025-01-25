document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('button');
    const textGen = document.getElementById('text');
    const aniBars = document.querySelectorAll('.ani');

    if (!('webkitSpeechRecognition' in window)) {
        console.log('Speech recognition not supported');
        alert('Speech recognition not supported');
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-IN';

    recognition.onstart = function () {
        console.log('Speech started');
        textGen.innerHTML = 'Listening...';
        startAnimation();
    };

    recognition.onresult = function (event) {
        let interimResults = '';
        let finalText = '';

        for (let i = 0; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalText += transcript;
            } else {
                interimResults += transcript;
            }
        }
        textGen.innerHTML =
            finalText + '<span style="color: #999;">' + interimResults + '</span>';
    };

    recognition.onerror = function (event) {
        console.log('Recognition error: ', event.error);
        textGen.innerHTML = 'Recognition error: ' + event.error;
        stopAnimation();
    };

    recognition.onend = function () {
        console.log('Recognition ended');
        textGen.innerHTML = 'Recognition ended. Press the button to start again.';
        stopAnimation();
    };

    startButton.addEventListener('click', function () {
        recognition.start();
    });

    function startAnimation() {
        aniBars.forEach((bar, index) => {
            bar.classList.add('animate');
            bar.style.animation = `widthChange${index + 1} 3s ease-in-out infinite`;
        });
    }

    function stopAnimation() {
        aniBars.forEach((bar) => {
            bar.classList.remove('animate');
            bar.style.animation = '';
        });
    }
});