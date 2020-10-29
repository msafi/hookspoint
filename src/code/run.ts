// const bitcoinMonthlyPrices = require("./bitcoinMonthlyPrices");

// const obj = {
//   period: {
//     startingDate: "",
//     endingDate: "",
//   },
//   startingPrice: 123,
//   endingPrice: 123,
// };
// const results = [];
// const monthlyPercentageChanges = [];

// for (let i = 0; i < bitcoinMonthlyPrices.length; i++) {
//   if (i > 0) {
//     const thisMonthPrice = bitcoinMonthlyPrices[i];
//     const prevMonthPrice = bitcoinMonthlyPrices[i - 1];

//     const change = thisMonthPrice[4] - prevMonthPrice[4];
//     const percentageChange = (change / thisMonthPrice[4]) * 100;

//     monthlyPercentageChanges.push({
//       month: thisMonthPrice[0],
//       percentageChange,
//     });
//   }

//   if (i > bitcoinMonthlyPrices.length - 8) {
//     continue;
//   } else {
//     const startingPriceObj = bitcoinMonthlyPrices[i];
//     const endingPriceObj = bitcoinMonthlyPrices[i + 7];
//     const resultObj = {
//       period: {
//         startingDate: startingPriceObj[0],
//         endingDate: endingPriceObj[0],
//       },
//       startingPrice: startingPriceObj[4],
//       endingPrice: endingPriceObj[4],
//     };

//     results.push(resultObj);
//   }
// }

// const percentageChanges = results.map((result) => {
//   const change = result.endingPrice - result.startingPrice;
//   const percentageChange = (change / result.startingPrice) * 100;

//   return { percentageChange, period: result.period };
// });

// // console.log("percentageChange", percentageChanges);
// // console.log("results", results);

// monthlyPercentageChanges.forEach((e) => {
//   console.log(e.percentageChange);
// });

// console.log("monthlyPercentageChanges", monthlyPercentageChanges);
