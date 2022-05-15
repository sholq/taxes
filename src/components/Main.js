import Income from "./Income";
import Taxes from "./Taxes";
import Social from "./Social";
import Description from "./Description";

function Main(props) {
  const {setNetIncome, netIncome, grossIncome, taxesForMonth, taxesForYear, taxesForFiveYear} = props;

  return (
    <main className="main">
      <Income
        setNetIncome={setNetIncome}
        netIncome={netIncome}
        grossIncome={grossIncome}
      />
      <Taxes
        taxesForMonth={taxesForMonth}
        taxesForYear={taxesForYear}
        taxesForFiveYear={taxesForFiveYear}
      />
      <Social />
      <Description />
    </main>
  )
}

export default Main;
