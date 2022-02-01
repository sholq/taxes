const page = document.querySelector('.page');

const inputNetIncome = page.querySelector('.input__line_type_net-income');

const outputs = page.querySelectorAll('.output__line');
const outputGrossIncome = page.querySelector('.output__line_type_gross-income');
const outputTaxesMonth = page.querySelector('.output__line_type_taxes-month');
const outputTaxesYear = page.querySelector('.output__line_type_taxes-year');
const outputTaxesFiveYear = page.querySelector('.output__line_type_taxes-five-year');

function renderNumber(value) {
  const formattedString = Number(value.replace(/\s/g, '')).toLocaleString('nb-NO');
  return formattedString;
}

function lockNaNKey(evt) {
  if (Number.isNaN(Number(evt.key)) && evt.key !== 'Backspace') {
    evt.preventDefault();
  }
}

function fixMaxStringLength(evt) {
  if (evt.target.value.length === 7 && evt.key !== 'Backspace') {
    evt.preventDefault();
  }
}

function preventStickyPressKeys(evt) {
  if (evt.target.value.length > 6) {
    evt.target.value = evt.target.value.replace(/\s/g, '').slice(0, 6);
  }
}

function activateInputLine(evt) {
  if (!evt.target.classList.contains('input__line_active')) {
    evt.target.classList.add('input__line_active');
  }
}

function renderInputLine(evt) {
  if (evt.target.value === '') {
    evt.target.classList.remove('input__line_active');
  } else {
    evt.target.value = renderNumber(evt.target.value);
  }
}

inputNetIncome.addEventListener('keydown', lockNaNKey);
inputNetIncome.addEventListener('keydown', fixMaxStringLength);
inputNetIncome.addEventListener('keyup', preventStickyPressKeys);
inputNetIncome.addEventListener('keyup', activateInputLine);
inputNetIncome.addEventListener('keyup', renderInputLine);

outputs.forEach(item => {
  item.value = renderNumber(item.value);
})
