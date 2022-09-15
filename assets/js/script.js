var currentHr = parseInt(moment().format('H'));
var classes = [".8AM", ".9AM", ".10AM", ".11AM", ".12PM", ".1PM", ".2PM", ".3PM", ".4PM", ".5PM", ".6PM"]
var time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var allNotes = ["", "", "", "", "", "", "", "", "", "", ""]
var classIndex = time.indexOf(hourNow);
$("#currentDay").text(moment().format('dddd, MMMM D, YYYY'));
var currentDayCheck = moment().format('dddd, MMMM D, YYYY')

if (currentHr < 9) {
    allFuture();
}
else if (currentHr > 17) {
    allPast();
}
else {
    formatTimes()
}