import Chart from "react-apexcharts";
import { reducePercentageChanges } from "./reducePercentageChanges";
import { hot } from "react-hot-loader/root";
import React, { useEffect } from "react";
import ReactDom from "react-dom";

const StpmChart = () => {
  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/historical/close.json?start=2014-09-01&end=2020-11-04"
      );
      const responseJson = await response.json();

      console.log(responseJson);
    };

    request();
  });

  return (
    <>
      <h2>4-month window</h2>

      <p>The below graph is a 4-month window, with today in the center.</p>

      <Chart
        options={{
          xaxis: {
            categories: [100],
          },
        }}
        series={[
          {
            name: "2016-2020 halving",
            data: [100],
          },
        ]}
      />

      <h2>The full picture</h2>

      <p>This graph shows the full period</p>

      <Chart
        options={{
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: [100],
          },
        }}
        series={[
          {
            name: "2016-2020 halving",
            data: [100],
          },
        ]}
      />
    </>
  );
};

const HotStpmChart = hot(StpmChart);

ReactDom.render(
  <HotStpmChart />,
  document.getElementById("sixteenTwentyPriceMovement")
);
