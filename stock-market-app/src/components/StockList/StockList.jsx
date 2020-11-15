import React from "react";
import styles from "./StockList.module.css";
import { ReactComponent as StockListIcon } from "../../icons/chart-pie-alt.svg";
import { getCurrentYear } from "../../pages/Dashboard/helpers";

const StockList = ({ stocks }) => {
  const renderListItems = () => {
    return stocks.map((stock) => {
      return (
        <li className={styles.stockListItems} key={stock.ticker}>
          <div className={styles.iconContainer}>
            <StockListIcon className={styles.icon} />
          </div>
          <div className={styles.listItemName}>{stock.name}</div>
          <div className={styles.listItemTicker}>{stock.ticker}</div>
          <div className={styles.listItemAsk}>{stock.ask}</div>
          <div className={styles.listItemBid}>{stock.bid}</div>
          <div className={styles.listItemDps}>
            ${getDividendPerShare(stock)}
          </div>
          <div className={styles.listItemDps1000Spent}>
            ${getDividendPer1000Spent(stock)}
          </div>
          <div className={styles.listItemPe}>{stock.pe}</div>
          <div className={styles.listItemSector}>{stock.sector}</div>
        </li>
      );
    });
  };

  const getDividendPerShare = (stock) => {
    const year = getCurrentYear();
    return stock.dividends[year];
  };
  const getDividendPer1000Spent = (stock) => {
    const dividendPerShare = getDividendPerShare(stock);
    const amountOfStocks = 1000 / stock.ask;
    const total = amountOfStocks * dividendPerShare;

    return total.toFixed(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Oslo Exchange</h1>
      </div>

      <div className={styles.listContainer}>
        <div className={styles.listHeaders}>
          <div className={styles.nameHeader}>Name</div>
          <div className={styles.tickerHeader}>Ticker</div>
          <div className={styles.askHeader}>Ask</div>
          <div className={styles.bidHeader}>Bid</div>

          <div className={styles.dpsHeader}>Dividend/share</div>
          <div className={styles.dpspentHeader}>Dividend per 1000 spent</div>
          <div className={styles.peHeader}>P/E</div>
          <div className={styles.sectorHeader}>Sector</div>
        </div>
        <ul className={styles.stockList}>{renderListItems()}</ul>
      </div>
    </div>
  );
};
export default StockList;
