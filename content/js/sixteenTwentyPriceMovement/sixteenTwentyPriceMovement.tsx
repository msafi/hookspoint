import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";
import { PriceMovement, PriceMovementRecord, Prices } from "./types";
import {
  formatCurrency,
  formatPercent,
  getCycleMovement,
  plotDataProps,
  plotProps,
} from "./utils";
import createPlotlyComponent from "react-plotly.js/factory";
// @ts-ignore
import Plotly from "plotly.js/lib/index-geo";

const Plot = createPlotlyComponent(Plotly);

const dateFormat = "YYYY-MM-DD";
const today = dayjs().format(dateFormat);

const twelveCycleStartDate = "2012-11-28";
const twelveCycleEndDate = "2016-07-08";
const sixteenCycleStartDate = "2016-07-09";
const sixteenCycleEndDate = "2020-05-10";
const twentyCycleStartDate = "2020-05-11";

const StpmChart = () => {
  const [prices, setPrices] = useState<Prices>();

  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${twelveCycleStartDate}&end=${today}`
      );
      const responseJson = await response.json();
      const prices = responseJson.bpi as Prices;

      setPrices(prices);
    };

    request();
  }, []);

  if (!prices) {
    return (
      <div className="loaderContainer">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  const twelveCyclePriceMovement = getCycleMovement(
    prices,
    twelveCycleStartDate,
    twelveCycleEndDate
  );
  const sixteenCyclePriceMovement = getCycleMovement(
    prices,
    sixteenCycleStartDate,
    sixteenCycleEndDate
  );
  const twentyCyclePriceMovement = getCycleMovement(
    prices,
    twentyCycleStartDate
  );

  const sixteenFourMonthSlice = sixteenCyclePriceMovement.slice(
    twentyCyclePriceMovement.length - 60,
    twentyCyclePriceMovement.length + 60
  );
  const twentyFourMonthSlice = twentyCyclePriceMovement.slice(-60);
  const fourMonthXAxis = sixteenFourMonthSlice.map(
    (_r, i) => twentyCyclePriceMovement.length - 60 + i
  );
  const yAxisMapper = (record: PriceMovementRecord) => {
    return record.accumulatedChange;
  };
  const getAxes = (cyclePriceMovement: PriceMovement) => ({
    x: cyclePriceMovement.map((_r, i) => i),
    y: cyclePriceMovement.map((record) => {
      return record.accumulatedChange;
    }),
  });
  const getChangePercentageText = (record: PriceMovementRecord) =>
    `<br><br>Change: ${formatPercent(record.accumulatedChange)}`;
  const lastMovementOfTwentyCycle =
    twentyCyclePriceMovement[twentyCyclePriceMovement.length - 1];
  const lastMovementOfTwentyCycleMapToSixteenCycle =
    sixteenCyclePriceMovement[twentyCyclePriceMovement.length - 1];
  const getSixteenText = (priceMovement: PriceMovement, full = false) =>
    priceMovement.map((record, i) => {
      const text = [
        "<br>2016 cycle:",
        `<br>- Date: ${dayjs(record.date).format("MMM DD YYYY")}`,
        `<br>- Price: ${formatCurrency.format(record.price)}`,
      ];

      if (
        i >
        (full ? twentyCyclePriceMovement : twentyFourMonthSlice).length - 1
      ) {
        text.push(
          "<br><br>2020 cycle projection:",
          `<br>- Date: ${dayjs(today)
            .add(i - twentyFourMonthSlice.length, "day")
            .format("MMM DD YYYY")}`,
          `<br>- Price: ${formatCurrency.format(
            twentyCyclePriceMovement[0].price * (1 + record.accumulatedChange)
          )}`
        );
      }

      text.push(getChangePercentageText(record));

      return text.join("");
    });
  const getTwentyText = (priceMovement: PriceMovement) =>
    priceMovement.map((record) => {
      const text = [
        "<br>2020 cycle:",
        `<br>- Date: ${dayjs(record.date).format("MMM DD YYYY")}`,
        `<br>- Price: ${formatCurrency.format(record.price)}`,
      ];

      text.push(getChangePercentageText(record));

      return text.join("");
    });

  return (
    <>
      <h2>First, a close up look</h2>

      <p>
        We are on day number {twentyCyclePriceMovement.length} of this halving
        cycle. The price today is{" "}
        {formatCurrency.format(lastMovementOfTwentyCycle.price)}. That's a{" "}
        {formatPercent(lastMovementOfTwentyCycle.accumulatedChange)} change from
        the starting price of the cycle, which was{" "}
        {formatCurrency.format(twentyCyclePriceMovement[0].price)} on May 11
        2020.
      </p>

      <p>
        On day {twentyCyclePriceMovement.length} of the 2016 halving cycle, the
        price was{" "}
        {formatCurrency.format(
          lastMovementOfTwentyCycleMapToSixteenCycle.price
        )}
        , which is{" "}
        {formatPercent(
          lastMovementOfTwentyCycleMapToSixteenCycle.accumulatedChange
        )}{" "}
        change from the starting price of the 2016 cycle, which was{" "}
        {formatCurrency.format(sixteenCyclePriceMovement[0].price)} on July 9
        2016.
      </p>

      <div className="fullWidth">
        <Plot
          data={[
            {
              name: "2016-2020",
              x: fourMonthXAxis,
              y: sixteenFourMonthSlice.map(yAxisMapper),
              text: getSixteenText(sixteenFourMonthSlice),
              ...plotDataProps,
            },
            {
              name: "2020-2024",
              x: fourMonthXAxis,
              y: twentyFourMonthSlice.map(yAxisMapper),
              text: getTwentyText(twentyFourMonthSlice),
              ...plotDataProps,
            },
          ]}
          {...plotProps}
        />
      </div>

      <h2>Full picture</h2>

      <p>
        The below chart shows the full length of the 2016 halving cycle. Hover
        over the all time high region to see the projected price of this cycle.
      </p>

      <p>You can drag your mouse to zoom in to a specific region.</p>

      <div className="fullWidth">
        <Plot
          data={[
            {
              name: "2016-2020",
              ...getAxes(sixteenCyclePriceMovement),
              text: getSixteenText(sixteenCyclePriceMovement, true),
              ...plotDataProps,
            },
            {
              name: "2020-2024",
              ...getAxes(twentyCyclePriceMovement),
              text: getTwentyText(twentyCyclePriceMovement),
              ...plotDataProps,
              line: {
                ...plotDataProps.line,
                width: 3,
              },
            },
          ]}
          {...plotProps}
        />
      </div>

      <h2>2012 vs 2016</h2>

      <p>
        Don't expect these charts to accurately predict the price. Halving
        cycles don't necessarily follow an exact pattern. To give you an idea,
        the below chart compares the price movement for 2012 with 2016.
      </p>

      <div className="fullWidth">
        <Plot
          data={[
            {
              name: "2012-2016",
              ...getAxes(twelveCyclePriceMovement),
              marker: {
                color: "#4caf50",
              },
              ...plotDataProps,
            },
            {
              name: "2016-2020",
              ...getAxes(sixteenCyclePriceMovement),
              marker: {
                color: "#1f77b4",
              },
              ...plotDataProps,
            },
          ]}
          {...plotProps}
        />
      </div>
    </>
  );
};

const HotStpmChart = hot(StpmChart);

ReactDom.render(
  <HotStpmChart />,
  document.getElementById("sixteenTwentyPriceMovement")
);
