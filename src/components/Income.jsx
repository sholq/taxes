import {memo} from "react";
import Output from "./Output";
import Input from "./Input";

const Income = memo(props => {
  const {setNetIncome, netIncome, grossIncome} = props;

  function inputOnChange(evt) {
    const income = evt.target.value.replace(/\D/g, '');
    setNetIncome(income);
  }

  function renderNumber(value) {
    const formattedString = Number(value.replace(/\D/g, '')).toLocaleString('nb-NO');
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
  function handleNaNError(evt) {
    if (Number.isNaN(Number(evt.target.value.replace(/\D/g, '') + evt.key)) && evt.key !== 'Backspace') {
      evt.target.value = renderNumber(evt.target.value);
    }
  }

  function handleKeyDown(evt) {
    lockNaNKey(evt);
    fixMaxStringLength(evt);
    handleNaNError(evt);
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

  function handleKeyUp(evt) {
    preventStickyPressKeys(evt);
    renderInputLine(evt);
  }

  return (
    <section className="income main__income">
      <ul className="income__list">
        <li className="container">
          <h2 className="container__title container__title_income">Ваша «чистая» зарплата — то, что приходит на
            карточку</h2>
          <label className="input input_place_income">
            <Input
              value={renderNumber(netIncome + '')}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              onChange={inputOnChange}
            />
          </label>
        </li>
        <li className="container">
          <h2 className="container__title container__title_income">Ваша зарплата до уплаты налогов и сборов</h2>
          <label className="output output_place_income">
            <Output name="gross-income" value={grossIncome} />
          </label>
        </li>
      </ul>
    </section>
  )
});

export default Income;
