import {memo} from "react";

const Description = memo(() => {
  return (
    <section className="description" aria-label="Описание проекта">
      <p className="description__paragraph">Некоторые люди считают, что экономика России держится исключительно на
        доходах от нефти, газа, леса, алюминия и никеля.
        Но ведь это совсем не так! Бюджет страны в основном наполняется налогами граждан — таких как ты или я.</p>
      <p className="description__paragraph">Мы сделали этот сайт, чтобы каждый мог наглядно увидеть свой личный вклад
        в бюджет страны и сравнить его с вкладом,
        например, нефтяных компаний.</p>
    </section>
  )
});

export default Description;
