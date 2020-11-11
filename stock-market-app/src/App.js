import React from "react";

import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import ExchangeList from "./components/ExchangeList/ExchangeList";
import data from "./data.js";
import { getTopFiveDividendStocks, getInfoCardData } from "./helpers";
import TopFiveDividendsStocksList from "./components/TopFiveDividendsStocksList/TopFiveDividendsStocksList";
import InfoCard from "./components/infoCard/InfoCard";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader>
        <ExchangeList exchanges={data.exchanges} />
        <TopFiveDividendsStocksList
          stocks={getTopFiveDividendStocks(data.stocks)}
        />
        <div className={styles.infoCardContainer}>
          <InfoCard
            title="Highest dividend yield in current year"
            stock={getInfoCardData("yieldcurrent", data.stocks)}
          />
          <InfoCard
            title="Highest dividend yield all time"
            stock={getInfoCardData("yieldcompounded", data.stocks)}
          />
          <InfoCard
            title="Highest dividend yield growth in past 3 years"
            stock={getInfoCardData("growth", data.stocks)}
            darkmode
          />
        </div>
      </Subheader>
    </div>
  );
}

export default App;
