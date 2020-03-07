module.exports = function (date) {
  var d = date
  var mm = d.getMonth() + 1;
  var dd = d.getDate();
  var yy = d.getFullYear();
  var myDateString = yy + '-' + mm + '-' + dd; //(US)
  return myDateString
}