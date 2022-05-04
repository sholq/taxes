import {useState, useEffect} from 'react';
import '../App.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import {throttle} from "../utils/throttle";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  function disableLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(item => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    });
  }

  function handleFooterResize() {
    throttle(() => {
      if (window.innerWidth < 475) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      disableLinks();
    }, 150);
  }

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
      <Main
        setNetIncome={setNetIncome}
        netIncome={netIncome}
        grossIncome={grossIncome}
        taxesForMonth={taxesForMonth}
        taxesForYear={taxesForYear}
        taxesForFiveYear={taxesForFiveYear}
      />
      <Footer isMobile={isMobile}/>
    </div>
  );
}

export default App;
