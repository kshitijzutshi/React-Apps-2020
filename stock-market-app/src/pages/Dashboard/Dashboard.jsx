import React from "react";
import Header from "../../components/Header/Header";
import Subheader from "../../components/Subheader/Subheader";
import ExchangeList from "../../components/ExchangeList/ExchangeList";
import data from "../../data";
import { getTopFiveDividendStocks, getInfoCardData } from "./helpers";
import TopFiveDividendsStocksList from "../../components/TopFiveDividendsStocksList/TopFiveDividendsStocksList";
import InfoCard from "../../components/infoCard/InfoCard";
import StockList from "../../components/StockList/StockList";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
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
      <div className={styles.dashboardContent}>
        <div className={styles.dashboardContentContainer}>
          <StockList stocks={data.stocks} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
