import {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";

import {throttle} from "../utils/throttle";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleFooterResize = throttle(() => {
    if (window.innerWidth < 475) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, 150);

  window.addEventListener('resize', handleFooterResize);

  const [netIncome, setNetIncome] = useState(30000);
  const [grossIncome, setGrossIncome] = useState(0);
  const [taxesForMonth, setTaxesForMonth] = useState(0);
  const [taxesForYear, setTaxesForYear] = useState(0);
  const [taxesForFiveYear, setTaxesForFiveYear] = useState(0);

  useEffect(() => {
    handleFooterResize();
  }, [])

  useEffect(() => {
    setGrossIncome(() => Math.round(netIncome * (1.13 + (0.3 / 0.87))));
    setTaxesForMonth(() => Math.round(grossIncome - netIncome));
    setTaxesForYear(() => Math.round(taxesForMonth * 12));
    setTaxesForFiveYear(() => Math.round(taxesForYear * 5));
  }, [netIncome, grossIncome, taxesForMonth, taxesForYear, taxesForFiveYear])

  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main
            setNetIncome={setNetIncome}
            netIncome={netIncome}
            grossIncome={grossIncome}
            taxesForMonth={taxesForMonth}
            taxesForYear={taxesForYear}
            taxesForFiveYear={taxesForFiveYear}
          />
        </Route>
        <Route path="/amount=:amount">
          <Main
            setNetIncome={setNetIncome}
            netIncome={netIncome}
            grossIncome={grossIncome}
            taxesForMonth={taxesForMonth}
            taxesForYear={taxesForYear}
            taxesForFiveYear={taxesForFiveYear}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer isMobile={isMobile}/>
    </div>
  );
}

export default App;
