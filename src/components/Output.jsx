import {memo} from "react";

const Output = memo(props => {
  const {name, value} = props;

  return (
    <>
      <output className="output__line" name={name}>{value}</output>
      &nbsp;₽
    </>
  )
});

export default Output;
