const steps = document.querySelectorAll('.step');
const connectors = document.querySelectorAll('.connector');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const doneButton = document.getElementById('done');

let currentStep = 0;

function updateProgress() {
    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    connectors.forEach((connector, index) => {
        if (index < currentStep) {
            connector.classList.add('active');
        } else {
            connector.classList.remove('active');
        }
    });

    // Enable/disable buttons
    prevButton.disabled = currentStep === 0;
    nextButton.style.display = currentStep === steps.length - 1 ? 'none' : 'inline-block';
    doneButton.style.display = currentStep === steps.length - 1 ? 'inline-block' : 'none';
}

prevButton.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateProgress();
    }
});

nextButton.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateProgress();
    }
});

doneButton.addEventListener('click', () => {
    alert('You have completed the process!');
    currentStep = 0;
    updateProgress();
});

// Initialize the progress bar
updateProgress();
