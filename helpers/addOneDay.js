function addOneDay() {
  let result = new Date();
  result.setDate(result.getDate() + 1);
  return result;
}

module.exports = addOneDay;
