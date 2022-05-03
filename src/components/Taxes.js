function Taxes(props) {
  const {taxesForMonth, taxesForYear, taxesForFiveYear} = props;

  return (
    <section className="taxes main__taxes">
      <ul className="taxes__list">
        <li className="container">
          <h2 className="container__title container__title_taxes">Налоги и сборы за месяц</h2>
          <label className="output output_place_taxes">
            <output className="output__line output__line_type_taxes-month" name="taxes-month">{taxesForMonth}</output>
            &nbsp;₽
          </label>
        </li>
        <li className="container">
          <h2 className="container__title container__title_taxes">За год</h2>
          <label className="output output_place_taxes">
            <output className="output__line output__line_type_taxes-year" name="taxes-year">{taxesForYear}</output>
            &nbsp;₽
          </label>
        </li>
        <li className="container">
          <h2 className="container__title container__title_taxes">И за пять лет</h2>
          <label className="output output_place_taxes">
            <output className="output__line output__line_type_taxes-five-year" name="taxes-five-year">{taxesForFiveYear}</output>
            &nbsp;₽
          </label>
        </li>
      </ul>
      <div className="social taxes__social">
        <ul className="social__list">
          <li className="social__item">
            <a className="taxes__link taxes__link_to_facebook" href="#"></a>
          </li>
          <li className="social__item">
            <a className="taxes__link taxes__link_to_vkontakte" href="#"></a>
          </li>
          <li className="social__item">
            <a className="taxes__link taxes__link_to_instagram" href="#"></a>
          </li>
          <li className="social__item">
            <a className="taxes__link taxes__link_to_youtube" href="#"></a>
          </li>
          <li className="social__item">
            <a className="taxes__link taxes__link_to_telegram" href="#"></a>
          </li>
          <li className="social__item">
            <a className="taxes__link taxes__link_to_tiktok" href="#"></a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Taxes;
