export const reducePercentageChanges = (
  acc: number[],
  percentageChange: number
) => {
  const lastVal = acc[acc.length - 1];
  const newVal = lastVal + lastVal * (percentageChange / 100);

  acc.push(newVal);

  return acc;
};
