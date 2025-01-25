const progressCompleted = document.querySelector('.progress-completed');
const steps = document.querySelectorAll('.step');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const doneButton = document.getElementById('done');
const sections = document.querySelectorAll('.step-section');
const checkboxes = document.querySelectorAll('.step-checkbox');

let currentStep = 1;

nextButton.addEventListener('click', () => {
  if (!checkboxes[currentStep - 1].checked) {
    alert('Please complete this step by checking the box.');
    return;
  }

  currentStep++;
  if (currentStep > steps.length) {
    currentStep = steps.length;
  }

  updateProgress();
});

prevButton.addEventListener('click', () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateProgress();
});

doneButton.addEventListener('click', () => {
  currentStep = 1;
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  steps.forEach((step) => {
    step.classList.remove('completed');
    step.classList.remove('in-progress');
  });
  hideAllSections();
  updateProgress();
});

function updateProgress() {
  steps.forEach((step, index) => {
    if (index < currentStep - 1) {
      step.classList.remove('in-progress');
      step.classList.add('completed');
    } else if (index === currentStep - 1) {
      step.classList.add('in-progress');
      step.classList.remove('completed');
    } else {
      step.classList.remove('completed');
      step.classList.remove('in-progress');
    }
  });

  const progressWidth =
    ((currentStep - 1) / (steps.length - 1)) * 100; 
  progressCompleted.style.width = `calc(${progressWidth}% - 20px)`; 

  prevButton.disabled = currentStep === 1;
  nextButton.style.display = currentStep === steps.length ? 'none' : 'inline-block';
  doneButton.style.display = currentStep === steps.length ? 'inline-block' : 'none';

  showSection(currentStep);
}

function showSection(step) {
  hideAllSections();
  const section = document.getElementById(`section-${step}`);
  if (section) {
    section.classList.add('show');
  }
}

function hideAllSections() {
  sections.forEach((section) => {
    section.classList.remove('show');
  });
}

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      steps[index].classList.remove('in-progress');
      steps[index].classList.add('completed');
    } else {
      steps[index].classList.remove('completed');
      steps[index].classList.add('in-progress');
    }
  });
});

updateProgress();
