import './index.css';

import Input from "../components/Input.js";
import Output from "../components/Output.js";
import Resize from "../components/Resize.js";
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

const resizeHandler = new Resize(throttle, disableLinks);

inputNetIncome.setEventListener();

const links = document.querySelectorAll('a');

function disableLinks() {
  links.forEach(item => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
    });
  });
}

window.addEventListener('resize', resizeHandler.switchCopyRightTextMarkup);

resizeHandler.setCopyrightTextMarkup();
disableLinks();
