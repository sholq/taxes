export default class Output {
  constructor(selector, type) {
    this._output = document.querySelector(selector);
    this._type = type;
  }

  setValue(results) {
    this._output.value = results[this._type];
  }
}
