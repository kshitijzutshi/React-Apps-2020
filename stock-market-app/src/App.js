import React from "react";

import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import ExchangeList from "./components/ExchangeList/ExchangeList";
import data from "./data.js";
import { getTopFiveDividendStocks } from "./helpers";
import TopFiveDividendsStocksList from "./components/TopFiveDividendsStocksList/TopFiveDividendsStocksList";

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader>
        <ExchangeList exchanges={data.exchanges} />
        <TopFiveDividendsStocksList
          stocks={getTopFiveDividendStocks(data.stocks)}
        />
      </Subheader>
    </div>
  );
}

export default App;
