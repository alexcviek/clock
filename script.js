
    /// clock function
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
    
    
    /// backgrund color change 
    $(document).ready(function(){
    var s = today.getSeconds();
    if (s < 10){
        $("#txt").css("background", "#F469A9");
    }
    else if (s >= 10, s < 20){
        $("#txt").css("background", "#C246C6");
    }
    else if (s >= 20, s < 30){
        $("#txt").css("background", "#91157E");
    }
    else if (s >= 30, s < 40){
        $("#txt").css("background", "#65195E");
    }
    else if (s >= 40, s < 50){
        $("#txt").css("background", "#6F4F8B");
    }
    else {
        $("#txt").css("background", "#581845");
    }   
    });
    }

    function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
    }
