const page = document.querySelector('.page');

const inputNetIncome = page.querySelector('.input__line_type_net-income');

const outputs = page.querySelectorAll('.output__line');
const outputGrossIncome = page.querySelector('.output__line_type_gross-income');
const outputTaxesMonth = page.querySelector('.output__line_type_taxes-month');
const outputTaxesYear = page.querySelector('.output__line_type_taxes-year');
const outputTaxesFiveYear = page.querySelector('.output__line_type_taxes-five-year');

function renderNumber(value) {
  const formattedString = Number(value.replace(/\D/g, '')).toLocaleString('nb-NO');
  return formattedString;
}

function renderOutputs() {
  outputs.forEach(item => {
    item.value = renderNumber(item.value);
  })
}

function lockNaNKey(evt) {
  if (Number.isNaN(Number(evt.key)) && evt.key !== 'Backspace') {
    evt.preventDefault();
  }
}

function handleNaNError(evt) {
  if (Number.isNaN(Number(evt.target.value.replace(/\D/g, '') + evt.key)) && evt.key !== 'Backspace') {
    evt.target.value = renderNumber(evt.target.value);
  }
}

function fixMaxStringLength(evt) {
  if (evt.target.value.length === 7 && evt.key !== 'Backspace') {
    evt.preventDefault();
  }
}

function preventStickyPressKeys(evt) {
  if (evt.target.value.length > 6) {
    evt.target.value = evt.target.value.replace(/\D/g, '').slice(0, 6);
  }
}

function renderInputLine(evt) {
  if (!evt.target.value) {
    evt.target.classList.remove('input__line_active');
  } else {
    evt.target.value = renderNumber(evt.target.value);
  }
}

function calculateTaxes() {
  const currentNetIncomeValue = inputNetIncome.value.replace(/\D/g, '');

  const grossIncome = Math.round(currentNetIncomeValue / .55);
  const taxesMonth = Math.round(grossIncome - currentNetIncomeValue);
  const taxesYear = Math.round(taxesMonth * 12);
  const taxesFiveYear = Math.round(taxesYear * 5);

  outputGrossIncome.value = grossIncome;
  outputTaxesMonth.value = taxesMonth;
  outputTaxesYear.value = taxesYear;
  outputTaxesFiveYear.value = taxesFiveYear;
}

const links = page.querySelectorAll('a');

function disableLink(evt) {
  evt.preventDefault();
}

function disableLinks() {
  links.forEach(item => {
    item.addEventListener('click', disableLink);
  })
}

disableLinks();

inputNetIncome.addEventListener('keydown', lockNaNKey);
inputNetIncome.addEventListener('keydown', fixMaxStringLength);
inputNetIncome.addEventListener('keyup', preventStickyPressKeys);
inputNetIncome.addEventListener('keyup', renderInputLine);
inputNetIncome.addEventListener('keyup', calculateTaxes);
inputNetIncome.addEventListener('keyup', renderOutputs);
inputNetIncome.addEventListener('keydown', handleNaNError);

renderOutputs();
