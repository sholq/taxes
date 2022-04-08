export default class Resize {
  constructor(throttle, disableLinks) {
    this._copyrightText = document.querySelector('.footer__copyright-text');
    this._firstCopyrightTextTemplate = document.querySelector('#copyright-text-first-template').content.cloneNode(true);
    this._secondCopyrightTextTemplate = document.querySelector('#copyright-text-second-template').content.cloneNode(true);

    this.switchCopyRightTextMarkup = throttle(() => {this.setCopyrightTextMarkup()}, 150);
    this._disableLinks = disableLinks;
  }

  setCopyrightTextMarkup() {
    if (window.innerWidth < 475) {
      if (this._copyrightText.classList.contains('first-template')) {
        this._copyrightText.replaceWith(this._copyrightTextSecondTemplate);
      }
    } else {
      if (this._copyrightText.classList.contains('second-template')) {
        this._copyrightText.replaceWith(this._copyrightTextFirstTemplate);
      }
    }
    this._disableLinks();
  }
}
