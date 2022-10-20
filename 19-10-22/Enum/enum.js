var Days;
(function (Days) {
    Days["mon"] = "mon";
    Days["true"] = "tue";
    //mon,tue,wed,thu,fri,sat,sun
})(Days || (Days = {}));
//let whichDay:Days;
// whichDay=Days.mon
//console.warn(whichDay)
function whichDay(day) {
    return day;
}
console.warn(whichDay(Days.mon));
