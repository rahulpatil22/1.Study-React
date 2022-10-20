enum Days{
    mon="mon",true="tue"
    //mon,tue,wed,thu,fri,sat,sun
}
//let whichDay:Days;
// whichDay=Days.mon
//console.warn(whichDay)

function whichDay(day:Days)
{
    return day
}

console.warn(whichDay(Days.mon))