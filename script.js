function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + "  " + m + "  " + s;
    var t = setTimeout(startTime, 500);

    $(document).ready(function(){
    var s = today.getSeconds();
    if (s < 30){
        $("#txt").css("background", "red");
}
else {
        $("#txt").css("background", "green");
}
});

}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}
