import Output from "./Output";
import {memo} from "react";

const Taxes = memo(props => {
  const {taxesForMonth, taxesForYear, taxesForFiveYear} = props;

  return (
    <section className="taxes main__taxes">
      <ul className="taxes__list">
        <li className="container">
          <h2 className="container__title container__title_taxes">Налоги и сборы за месяц</h2>
          <label className="output output_place_taxes">
            <Output name="taxes-month" value={taxesForMonth}/>
          </label>
        </li>
        <li className="container">
          <h2 className="container__title container__title_taxes">За год</h2>
          <label className="output output_place_taxes">
            <Output name="taxes-year" value={taxesForYear}/>
          </label>
        </li>
        <li className="container">
          <h2 className="container__title container__title_taxes">И за пять лет</h2>
          <label className="output output_place_taxes">
            <Output name="taxes-five-year" value={taxesForFiveYear}/>
          </label>
        </li>
      </ul>
    </section>
  )
});

export default Taxes;
