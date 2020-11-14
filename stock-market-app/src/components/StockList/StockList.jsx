import React from "react";
import styles from "./StockList.module.css";

const StockList = ({ stocks }) => {
  const renderListItems = () => {
    return stocks.map((stock) => {
      return (
        <li className={styles.stockListItems} key={stock.ticker}>
          <div className={styles.listItemName}>{stock.name}</div>
          <div className={styles.listItemTicker}>{stock.ticker}</div>
          <div className={styles.listItemAsk}>{stock.ask}</div>
          <div className={styles.listItemBid}>{stock.bid}</div>
          <div className={styles.listItemDps}>{getDividendPerShare(stock)}</div>
          <div className={styles.listItemDps1000Spent}>
            {getDividendPer1000Spent(stock)}
          </div>
          <div className={styles.listItemPe}>{getStockPe(stock)}</div>
          <div className={styles.listItemSector}>{stock.sector}</div>
        </li>
      );
    });
  };

  const getDividendPerShare = (stock) => {
    return 22;
  };
  const getDividendPer1000Spent = (stock) => {
    return 30;
  };
  const getStockPe = (stock) => {
    return 300;
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

          <div className={styles.dpsHeader}>Dividend per share</div>
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
