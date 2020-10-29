"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimestampToDate = exports.convertDateToTimestamp = exports.monthMap = void 0;
exports.monthMap = {
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
exports.convertDateToTimestamp = (date) => {
    const splitDate = date.split(" ");
    const timestamp = new Date(Number(splitDate[2]), exports.monthMap[splitDate[0]], Number(splitDate[1].substr(0, 2))).getTime();
    return timestamp;
};
exports.convertTimestampToDate = (timestamp) => {
    const d = new Date(timestamp);
    return d.toISOString().split("T")[0];
};
//# sourceMappingURL=dateUtils.js.map