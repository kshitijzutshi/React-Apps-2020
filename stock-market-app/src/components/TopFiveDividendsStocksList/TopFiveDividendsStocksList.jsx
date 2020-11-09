import React from "react";
import styles from "./TopFiveDividendsStocksList.module.css";

const TopFiveDividendsStocksList = (props) => {
  const renderListItems = () => {
    return props.stocks.map((stock) => {
      return (
        <li className={styles.listItem} key={stock.ticker}>
          <div>{stock.name}</div>
          <div>${stock.amount}</div>
        </li>
      );
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Top Five dividend yield stocks</h1>
      <ul className={styles.dividendList}>{renderListItems()}</ul>
    </div>
  );
};

export default TopFiveDividendsStocksList;
