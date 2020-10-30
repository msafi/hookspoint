// const bitcoinMonthlyPrices = require("./bitcoinMonthlyPrices");
// const csvtojsonV2 = require("csvtojson/v2");
// const path = require("path");
// const {
//   monthMap,
//   convertDateToTimestamp,
//   convertTimestampToDate,
// } = require("./dateUtils");
// const { removeLastChar } = require("./strUtils");

// async function run() {
//   const prices = await csvtojsonV2({
//     noheader: true,
//     output: "csv",
//   }).fromFile(path.join(__dirname, "./bitcoinDailyPrices.csv"));

//   prices.reverse();

//   // Remove headers
//   prices.pop();

//   // First epoch
//   // const periodStart = new Date("2012", "10", "28").getTime();
//   // const periodEnd = new Date("2016", "06", "09").getTime();

//   const periodStart = new Date("2020", "04", "11").getTime();
//   const periodEnd = new Date("2020", "09", "27").getTime();
//   const collectedPrices = [];

//   let amount = 100;
//   let day = 1;

//   for (const price of prices) {
//     const priceDate = convertDateToTimestamp(price[0]);

//     if (priceDate >= periodStart && priceDate <= periodEnd) {
//       const percentageChange = Number(removeLastChar(price[6]));
//       amount = amount + amount * (percentageChange / 100);
//       // console.log(`${convertTimestampToDate(price[0])},`, amount);
//       console.log(`${day++},`, amount);
//       collectedPrices.push(price);
//     }
//   }

//   // console.log("collectedPrices", collectedPrices);
// }

// run();
