module.exports = function (dateStr) {
  return dateStr.toUTCString().substr(0, 16);
};
