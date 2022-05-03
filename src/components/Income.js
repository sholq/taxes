function Income() {
  return (
    <section className="income main__income">
      <ul className="income__list">
        <li className="container">
          <h2 className="container__title container__title_income">Ваша «чистая» зарплата — то, что приходит на
            карточку</h2>
          <label className="input input_place_income">
            <input className="input__line input__line_type_net-income" type="text" name="net-income"
                   placeholder="30 000" value='' autoComplete="off" />₽
          </label>
        </li>
        <li className="container">
          <h2 className="container__title container__title_income">Ваша зарплата до уплаты налогов и сборов</h2>
          <label className="output output_place_income">
            <output className="output__line output__line_type_gross-income" name="gross-income">54545</output>
            &nbsp;₽
          </label>
        </li>
      </ul>
    </section>
  )
}

export default Income;
