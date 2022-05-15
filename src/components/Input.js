import {memo} from "react";

const Input = memo(props => {
  const {value, onKeyDown, onKeyUp, onChange} = props;

  return (
    <>
      <input
        className="input__line input__line_type_net-income"
        type="text"
        name="net-income"
        placeholder="30 000"
        autoComplete="off"
        value={value}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />₽
    </>
  )
});

export default Input;
