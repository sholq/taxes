import Income from "./Income";
import Taxes from "./Taxes";
import Social from "./Social";
import Description from "./Description";
import {Route, Switch} from "react-router-dom";

function Main(props) {
  const {setNetIncome, netIncome, grossIncome, taxesForMonth, taxesForYear, taxesForFiveYear} = props;

  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <Income
            setNetIncome={setNetIncome}
            netIncome={netIncome}
            grossIncome={grossIncome}
          />
        </Route>
        <Route path="/:amount">
          <Income
            setNetIncome={setNetIncome}
            netIncome={netIncome}
            grossIncome={grossIncome}
          />
        </Route>
      </Switch>
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
