import {memo} from "react";

const Input = memo(props => {
  const {netIncome, setNetIncome} = props;

  function handleOnChange(evt) {
    const income = evt.target.value.replace(/\D/g, '');
    setNetIncome(income);
  }

  function renderNumber(value) {
    return Number(value.replace(/\D/g, '')).toLocaleString('nb-NO');
  }

  function lockNaNKey(evt) {
    if (Number.isNaN(Number(evt.key)) && evt.key !== 'Backspace') {
      if (!(evt.keyCode < 124 && evt.keyCode > 112)) {
        evt.preventDefault();
      }
    }
  }
  function fixMaxStringLength(evt) {
    if (evt.target.value.length === 7 && evt.key !== 'Backspace') {
      if (!(evt.keyCode < 124 && evt.keyCode > 112)) {
        evt.preventDefault();
      }
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
    <>
      <input
        className="input__line input__line_type_net-income"
        type="text"
        name="net-income"
        placeholder="30 000"
        autoComplete="off"
        value={renderNumber(String(netIncome))}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onChange={handleOnChange}
      />₽
    </>
  )
});

export default Input;
