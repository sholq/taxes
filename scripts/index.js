const page = document.querySelector('.page');

const inputNetIncome = page.querySelector('.input__line_net-income');
const outputGrossIncome = page.querySelector('.output__line_gross-income');

const outputTaxesMonth = page.querySelector('.output__line_taxes-month');
const outputTaxesYear = page.querySelector('.output__line_taxes-year');
const outputTaxesFiveYear = page.querySelector('.output__line_taxes-five-year');

function renderNumber(value) {
  return Number(value.replace(/\s/g, '')).toLocaleString('nb-NO');
}

inputNetIncome.addEventListener('keydown', evt => {
  if (evt.target.value.length === 7 && evt.key !== 'Backspace') {
    evt.preventDefault();
  }
  if (Number.isNaN(Number(evt.key)) && evt.key !== 'Backspace') {
    evt.preventDefault();
  }
})

inputNetIncome.addEventListener('keyup', evt => {
  if (!evt.target.classList.contains('input__line_active')) {
    evt.target.classList.add('input__line_active');
  }
  if (evt.target.value === '') {
    evt.target.classList.remove('input__line_active');
  } else {
    evt.target.value = renderNumber(evt.target.value);
  }
  evt.target.style.width = evt.target.value.length + 1 + 'ch';
})

outputGrossIncome.value = renderNumber(outputGrossIncome.value);
outputTaxesMonth.value = renderNumber(outputTaxesMonth.value);
outputTaxesYear.value = renderNumber(outputTaxesYear.value);
outputTaxesFiveYear.value = renderNumber(outputTaxesFiveYear.value);
