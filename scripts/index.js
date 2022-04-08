class Input {
  constructor(selector, maxLength, outputs, renderer) {
    this._input = document.querySelector(selector);
    this._maxLength = maxLength;
    this._outputs = outputs;
    this._renderer = renderer;
  }

  _renderNumber(value) {
    const formattedString = Number(value.replace(/\D/g, '')).toLocaleString('nb-NO');
    return formattedString;
  }

  _renderOutputs() {
    this._outputs.forEach(item => {
      item.value = this._renderNumber(item.value);
    });
  }

  _lockNaNKey(evt) {
    if (Number.isNaN(Number(evt.key)) && evt.key !== 'Backspace') {
      evt.preventDefault();
    }
  }

  _handleNaNError(evt) {
    if (Number.isNaN(Number(evt.target.value.replace(/\D/g, '') + evt.key)) && evt.key !== 'Backspace') {
      evt.target.value = this._renderNumber(evt.target.value);
    }
  }

  _fixMaxStringLength(evt) {
    if (evt.target.value.length === this._maxLength && evt.key !== 'Backspace') {
      evt.preventDefault();
    }
  }

  _preventStickyPressKeys(evt) {
    if (evt.target.value.length > --this._maxLength) {
      evt.target.value = evt.target.value.replace(/\D/g, '').slice(0, 6);
    }
  }

  _renderInputLine(evt) {
    if (!evt.target.value) {
      evt.target.classList.remove('input__line_active');
    } else {
      evt.target.value = this._renderNumber(evt.target.value);
    }
  }

  _calculateTaxes() {
    const currentNetIncomeValue = this._input.value.replace(/\D/g, '');

    const grossIncome = Math.round(currentNetIncomeValue / .57);
    const taxesMonth = Math.round(grossIncome - currentNetIncomeValue);
    const taxesYear = Math.round(taxesMonth * 12);
    const taxesFiveYear = Math.round(taxesYear * 5);

    return {grossIncome, taxesMonth, taxesYear, taxesFiveYear}
  }

  setEventListener() {
    this._input.addEventListener('keydown', this._lockNaNKey.bind(this));
    this._input.addEventListener('keydown', this._fixMaxStringLength.bind(this));
    this._input.addEventListener('keyup', this._preventStickyPressKeys.bind(this));
    this._input.addEventListener('keyup', this._renderInputLine.bind(this));
    this._input.addEventListener('keyup', this._renderOutputs.bind(this));
    this._input.addEventListener('keydown', this._handleNaNError.bind(this));


    this._input.addEventListener('keyup', () => {
      const results = this._calculateTaxes();
      this._renderer(results);
    });
  }
}

class Output {
  constructor(selector, type) {
    this._output = document.querySelector(selector);
    this._type = type;
  }

  setValue(results) {
    this._output.value = results[this._type];
  }
}

const outputs = document.querySelectorAll('.output__line');

const outputGrossIncome = new Output('.output__line_type_gross-income', 'grossIncome');
const outputTaxesMonth = new Output('.output__line_type_taxes-month', 'taxesMonth');
const outputTaxesYear = new Output('.output__line_type_taxes-year', 'taxesYear');
const outputTaxesFiveYear = new Output('.output__line_type_taxes-five-year', 'taxesFiveYear');

const inputNetIncome = new Input('.input__line_type_net-income', 7, outputs, (results) => {
  outputGrossIncome.setValue(results);
  outputTaxesMonth.setValue(results);
  outputTaxesYear.setValue(results);
  outputTaxesFiveYear.setValue(results);
});

inputNetIncome.setEventListener();

function disableLink(evt) {
  evt.preventDefault();
}

const links = document.querySelectorAll('a');

function disableLinks() {
  links.forEach(item => {
    item.addEventListener('click', disableLink);
  });
}

function setCopyrightTextMarkup() {
  const copyrightTextFirstTemplate = document.querySelector('#copyright-text-first-template').content.cloneNode(true);
  const copyrightTextSecondTemplate = document.querySelector('#copyright-text-second-template').content.cloneNode(true);
  const copyrightText = document.querySelector('.footer__copyright-text');

  if (window.innerWidth < 475) {
    if (copyrightText.classList.contains('first-template')) {
      copyrightText.replaceWith(copyrightTextSecondTemplate);
    }
  } else {
    if (copyrightText.classList.contains('second-template')) {
      copyrightText.replaceWith(copyrightTextFirstTemplate);
    }
  }
  disableLinks();
}

window.addEventListener('resize', setCopyrightTextMarkup);

setCopyrightTextMarkup();
