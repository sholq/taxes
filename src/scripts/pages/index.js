import './index.css';

import Input from "../components/Input.js";
import Output from "../components/Output.js";

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
