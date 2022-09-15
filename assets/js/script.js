var currentHr = parseInt(moment().format('H'));
var classes = [".8AM", ".9AM", ".10AM", ".11AM", ".12PM", ".1PM", ".2PM", ".3PM", ".4PM", ".5PM", ".6PM"]
var hour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var allNotes = ["", "", "", "", "", "", "", "", "", "", ""]
var classIndex = hour.indexOf(currentHr);
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
grabData();
checkDay()

function allFuture() {
    for (i = 1; i < classes.length; i++) {
        $(classes[i]).addClass("future");
    }
    $(classes[0]).addClass("present");
}

function allPast() {
    for (i = 0; i < classes.length - 1; i++) {
        $(classes[i]).addClass("past");
    }
    $(classes[currentHr.length - 1]).addClass("present");
}

function formatTimes() {
    $(classes[classIndex]).addClass("present");
    for (i = 0; i < classIndex; i++) {
        $(classes[i]).addClass("past");
    }
    for (i = classIndex + 1; i < classes.length; i++) {
        $(classes[i]).addClass("future");
    }
}

$(".saveBtn").on("click", function () {
    var di = $(this).data('index');
    allNotes[di] = $(classes[di]).val();
    localStorage.setItem('allNotes', JSON.stringify(allNotes))
    alert("Saved")

})

function grabData() {
    allNotes = JSON.parse(localStorage.getItem("allNotes"));
    if (allNotes == null) {
        allNotes = ["", "", "", "", "", "", "", "", "", "", ""];
        return;
    }
    for (i = 0; i < classes.length; i++) {
        ($(classes[i])).val(allNotes[i]);
    }
}

$(".cleary").on("click", function () {
    cleardata()
})

function cleardata() {
    var confirmDelete = confirm("You are about to clear all previous data, are you sure?");
    if (confirmDelete == true) {
        allNotes = ["", "", "", "", "", "", "", "", "", "", ""];
        localStorage.setItem('allNotes', JSON.stringify(allNotes));
        grabData();
    }
}

function checkDay() {
    var dateSet = localStorage.getItem("date");
    if (dateSet == null) {
        localStorage.setItem('date', currentDayCheck);
    }
    else if (currentDayCheck !== dateSet) {
        localStorage.setItem('date', currentDayCheck);
        var confirmNewDay = confirm("Do you want to clear the previous day's events?")
        if (confirmNewDay == true) {
            cleardata()
            localStorage.setItem('date', currentDayCheck);
        }
    }
}

$(".savey").on("click", function () {
    for (i = 0; i < classes.length; i++) {
        allNotes[i] = $(classes[i]).val();
    }
    localStorage.setItem('allNotes', JSON.stringify(allNotes))
    alert("Data has been saved")
})