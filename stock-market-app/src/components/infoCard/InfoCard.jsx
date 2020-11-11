import React from "react";
import styles from "./InfoCard.module.css";
import classnames from "classnames";

const InfoCard = ({ title, stock, darkmode }) => {
  // If darkmode var flag is true the following clas will be applied
  const classes = classnames(styles.infoCard, {
    [styles.darkmode]: darkmode,
  });
  return (
    <div className={classes}>
      <h1 className={styles.header}>{title}</h1>
      <div>
        <p className={styles.paragraph}>{stock.ticker}</p>
        <p className={styles.paragraph}>${stock.amount}</p>
      </div>
    </div>
  );
};

export default InfoCard;
