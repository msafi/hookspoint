import { reducePercentageChanges } from "./reducePercentageChanges";
import { PriceMovement, Prices } from "./types";

export const getCycleMovement = (
  prices: Prices,
  startDate: string,
  endDate?: string
) => {
  const priceDates = Object.keys(prices);
  const filteredPriceDates = priceDates.filter((priceDate) => {
    if (endDate === undefined) {
      return priceDate >= startDate;
    }

    return priceDate >= startDate && priceDate <= endDate;
  });
  const cycleMovement = filteredPriceDates.map((priceDate) => {
    return {
      date: priceDate,
      price: prices[priceDate],
      accumulatedChange:
        (prices[priceDate] - prices[filteredPriceDates[0]]) /
        prices[filteredPriceDates[0]],
    };
  });

  return cycleMovement;
};

export const plotProps = {
  config: { responsive: true },
  layout: {
    ...(screen.width < 700 ? undefined : { height: 650 }),
    autosize: true,
    legend: { orientation: "h" },
    yaxis: {
      tickformat: ",%",
      automargin: false,
    },
    xaxis: {
      tickformat: ",",
      tickprefix: "Day no. ",
    },
  },
  style: { width: "100%", height: "100%" },
  useResizeHandler: true,
} as const;

export const plotDataProps = {
  type: "scatter",
  mode: "lines",
  hoverinfo: "text",
  line: { shape: "spline" },
} as const;

export const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const formatPercent = (n: number) =>
  Number(n).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
