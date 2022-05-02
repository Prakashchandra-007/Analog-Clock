window.onload = init();
function init(){
    var modeBtn = document.getElementById("modeBtn");
    modeBtn.addEventListener('click', changeMode);
    
    var digitTime = document.getElementById("digitTime");
    var date = document.getElementById("date");
    var min = document.getElementById("min");
    var hr = document.getElementById("hr");
    var sec = document.getElementById("sec");
    
    digitalClock(digitTime,date);
    analogClock(min, sec, hr);
}

//malupulation in digital clock
function digitalClock(digitTime,date){
    setInterval(()=>{
    var dateValue = new Date();
    // console.log("sec "+dateValue.getSeconds());
    // console.log("min "+dateValue.getMinutes());
    // console.log("hr "+dateValue.getHours());
    var hourTime = dateValue.getHours();
    var amPm = "AM";
    if(hourTime > 12){
        amPm ="PM";
        hourTime = hourTime % 12 ;

    }
    hourTime += ' ';
    var dateStr = hourTime.padStart(2,'0') +" : "+dateValue.getMinutes() +" "+amPm;
    digitTime.innerHTML =dateStr;
    var week = dateValue.getDay();
    var weekDay ="";
    switch(week){
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
    }
    var month = dateValue.getMonth();
    var monthStr ="";
    switch(month){
        case 0:
            monthStr = "JAN";
            break;
        case 1:
            monthStr = "FEB";
            break;
        case 2:
            monthStr = "APR";
            break;
        case 3:
            monthStr = "MAY";
            break;
        case 4:
            monthStr = "JUN";
            break;
        case 5:
            monthStr = "JUL";
            break;
        case 6:
            monthStr = "AUG";
            break;
        case 7:

    }



    date.innerHTML =`${weekDay}, ${monthStr} <span id="date-highlight">${12}</span></span>`;

    },1000);
}




//////////////////// function for mode change ///////////////
function changeMode(){
   var container = document.getElementById("containerid");
   var secHand = document.getElementById("sec");
   var midHand = document.getElementById("min");
   var hrHand = document.getElementById("hr");
   var digitalTime = document.getElementById("digitTime");
   var date = document.getElementById("date");
   var dateHighlighter = document.getElementById("date-highlight");
   var modeBtn = document.getElementById("modeBtn");

// console.log(container.style.backgroundColor);
    if(container.style.backgroundColor === "black") {
        container.style.backgroundColor = "white";
        secHand.style.borderColor = "black";
        digitalTime.style.color = "black";
        date.style.color = "black";
        dateHighlighter.style.backgroundColor = "black";
        dateHighlighter.style.color = "white";
        modeBtn.style.backgroundColor = "#fff";
        modeBtn.style.color = "#000";
        modeBtn.style.borderColor = "#000";
    }
    else{
        container.style.backgroundColor = "black";
        secHand.style.borderColor = "white";
        digitalTime.style.color = "white";
        date.style.color = "white";
        dateHighlighter.style.backgroundColor = "#fff897";
        dateHighlighter.style.color = "#000";
        modeBtn.style.backgroundColor = "#000";
        modeBtn.style.color = "#ffff";
        modeBtn.style.borderColor = "#ffff";
    }
     
}

///////////////function for Analog clock /////////////////////

function analogClock(min, sec, hr){
    setInterval(()=>{
        var d = new Date();
        var seconds = d.getSeconds();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        sec.style.transform = `rotate(${6*seconds}deg)`;
        min.style.transform =`rotate(${6*minutes}deg)`;
        hr.style.transform =`rotate(${30*hours+minutes/2}deg)`;
    },1000);
}