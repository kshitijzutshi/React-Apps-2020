export const sortStocksByDividendYield = (stocks) => {
  const year = getCurrentYear();

  const sorted = stocks.sort((stockA, stockB) => {
    return stockB.dividends[year] - stockA.dividends[year];
  });
  return sorted.slice(0, 5);
};

export const getTopFiveDividendStocks = (stocks) => {
  const sorted = sortStocksByDividendYield(stocks);
  const year = getCurrentYear();

  return sorted.slice(0, 5).map((stock) => {
    return {
      ticker: stock.ticker,
      name: stock.name,
      amount: stock.dividends[year],
    };
  });
};

export const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
};
