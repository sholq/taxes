import Income from "./Income";
import Taxes from "./Taxes";
import Social from "./Social";
import Description from "./Description";
import {memo, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PageNotFound from "./PageNotFound";

const Main = memo(() => {
  let {amount} = useParams();

  if (amount) {
    if (amount.length > 6) {
      amount = amount.slice(0, 6);
    }
  }

  const calculateGrossIncome = (netIncome) => Math.round(netIncome * (1.13 + (0.3 / 0.87)));
  const calculateTaxesForMonth = (netIncome, grossIncome) => Math.round(grossIncome - netIncome);
  const calculateTaxesForYear = (taxesForMonth) => Math.round(taxesForMonth * 12);
  const calculateTaxesForFiveYear = (taxesForYear) => Math.round(taxesForYear * 5);

  const [netIncome, setNetIncome] = useState(amount || 30000);
  const [grossIncome, setGrossIncome] = useState(calculateGrossIncome(netIncome));
  const [taxesForMonth, setTaxesForMonth] = useState(calculateTaxesForMonth(netIncome, grossIncome));
  const [taxesForYear, setTaxesForYear] = useState(calculateTaxesForYear(taxesForMonth));
  const [taxesForFiveYear, setTaxesForFiveYear] = useState(calculateTaxesForFiveYear(taxesForYear));

  useEffect(() => {
    setGrossIncome(() => calculateGrossIncome(netIncome));
  }, [netIncome, grossIncome])

  useEffect(() => {
    setTaxesForMonth(() => calculateTaxesForMonth(netIncome, grossIncome));
    setTaxesForYear(() => calculateTaxesForYear(taxesForMonth));
    setTaxesForFiveYear(() => calculateTaxesForFiveYear(taxesForYear));
  }, [grossIncome, taxesForMonth, taxesForYear, taxesForFiveYear])

  if (amount && isNaN(amount)) {
    return (
      <PageNotFound />
    )
  } else {
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

});

export default Main;
