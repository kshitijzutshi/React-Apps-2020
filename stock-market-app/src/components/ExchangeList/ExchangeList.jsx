import React from "react";
import styles from "./ExchangeList.module.css";

const ExchangeList = (props) => {
  const renderListItems = () => {
    return props.exchanges.map((exchange) => {
      return (
        <li className={styles.listItem}>
          <div className={styles.dot}></div>
          <div className={styles.name}>{exchange.name}</div>
          <div className={styles.index}>{exchange.index}</div>
          <div
            className={
              Math.sign(exchange.change) === -1
                ? styles.percentageNegative
                : styles.percentage
            }
          >
            {Math.abs(exchange.change)}
          </div>
        </li>
      );
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Exchanges</h1>
      <ul className={styles.exchangeList}>{renderListItems()}</ul>
    </div>
  );
};

export default ExchangeList;
