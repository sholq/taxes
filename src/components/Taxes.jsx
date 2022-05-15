import Output from "./Output";
import {memo} from "react";

const Taxes = memo(props => {
  const {taxesForMonth, taxesForYear, taxesForFiveYear} = props;

  const outputs = [{
    header: "Налоги и сборы за месяц",
    name: "taxes-month",
    value: taxesForMonth,
  }, {
    header: "За год",
    name: "taxes-year",
    value: taxesForYear,
  }, {
    header: "И за пять лет",
    name: "taxes-five-year",
    value: taxesForFiveYear,
  }];

  return (
    <section className="taxes main__taxes">
      <ul className="taxes__list">
        {outputs.map(({header, name, value}, id) => (
          <li className="container" key={id}>
            <h2 className="container__title container__title_taxes">{header}</h2>
            <label className="output output_place_taxes">
              <Output name={name} value={value}/>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
});

export default Taxes;
