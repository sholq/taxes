import Input from "../components/Input.js";
import Output from "../components/Output.js";
import { throttle } from "../utils/utils.js";

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

const throttledCopyrightTextMarkupHandler = throttle(setCopyrightTextMarkup, 150)

window.addEventListener('resize', throttledCopyrightTextMarkupHandler);

setCopyrightTextMarkup();
