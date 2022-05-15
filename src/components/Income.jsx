import {memo} from "react";
import Output from "./Output";
import Input from "./Input";

const Income = memo(props => {
  const {setNetIncome, netIncome, grossIncome} = props;

  return (
    <section className="income main__income">
      <ul className="income__list">
        <li className="container">
          <h2 className="container__title container__title_income">Ваша «чистая» зарплата — то, что приходит на карточку</h2>
          <label className="input input_place_income">
            <Input netIncome={netIncome} setNetIncome={setNetIncome}
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
