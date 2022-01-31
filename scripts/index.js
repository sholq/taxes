const page = document.querySelector('.page');

const incomeSection = page.querySelector('.income');
const inputNetIncome = incomeSection.querySelector('.income__input');
const outputGrossIncome = incomeSection.querySelector('.income__output');

function renderNumber(value) {
  return Number(value.replace(/\s/g, '')).toLocaleString('nb-NO');
}

inputNetIncome.addEventListener('keydown', evt => {
  if (evt.target.value.length === 10 && evt.key !== 'Backspace') {
    evt.preventDefault();
  }
  if (Number.isNaN(Number(evt.key)) && evt.key !== 'Backspace') {
    evt.preventDefault();
  }
})

inputNetIncome.addEventListener('keyup', evt => {
  if (!evt.target.classList.contains('income__input_active')) {
    evt.target.classList.add('income__input_active');
  }
  if (evt.target.value === '') {
    evt.target.classList.remove('income__input_active');
  } else {
    evt.target.value = renderNumber(evt.target.value);
  }
  evt.target.style.width = evt.target.value.length + 1 + 'ch';
})

outputGrossIncome.value = renderNumber(outputGrossIncome.value);
