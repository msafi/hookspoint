export const monthMap = {
  Jan: "00",
  Feb: "01",
  Mar: "02",
  Apr: "03",
  May: "04",
  Jun: "05",
  Jul: "06",
  Aug: "07",
  Sep: "08",
  Oct: "09",
  Nov: "10",
  Dec: "11",
};

export const convertDateToTimestamp = (date: string) => {
  const splitDate = date.split(" ");
  const timestamp = new Date(
    Number(splitDate[2]),
    (monthMap as any)[splitDate[0]],
    Number(splitDate[1].substr(0, 2))
  ).getTime();

  return timestamp;
};

export const convertTimestampToDate = (timestamp: number) => {
  const d = new Date(timestamp);

  return d.toISOString().split("T")[0];
};
