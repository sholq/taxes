export default class Input {
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

  _calculateTaxes() {
    const currentNetIncomeValue = this._input.value.replace(/\D/g, '');

    const grossIncome = Math.round(currentNetIncomeValue * (1.13 + (0.3 / 0.87)));
    const taxesMonth = Math.round(grossIncome - currentNetIncomeValue);
    const taxesYear = Math.round(taxesMonth * 12);
    const taxesFiveYear = Math.round(taxesYear * 5);

    return {grossIncome, taxesMonth, taxesYear, taxesFiveYear}
  }

  setEventListener() {
    this._input.addEventListener('keyup', this._renderOutputs.bind(this));


    this._input.addEventListener('keyup', () => {
      const results = this._calculateTaxes();
      this._renderer(results);
    });
  }
}
