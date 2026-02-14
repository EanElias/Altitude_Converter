let distanceSelect=document.getElementById("Distance")
let timeInput=document.getElementById("initialTime");
let altitudeInput=document.getElementById("altitude");
let button=document.getElementById("convertButton");
let result=document.getElementById("result")


button.addEventListener("click",function() {
    console.log("Button clicked")
    let distanceValue=distanceSelect.value;
    let timeValue=timeInput.value;
    let altitudeValue=altitudeInput.value;
    console.log(timeValue,altitudeValue);
    let altitudeMeters = altitudeValue*0.3048;
    function convertTimeToSeconds(mmSsString) {
        const[minutes, seconds]=mmSsString.split(':');
        const totalSeconds = (+minutes)*60 +(+seconds);
        return totalSeconds;
    }
    let totalSeconds= convertTimeToSeconds(timeValue);
    function altitudeEquation(totalSeconds, altitude){
       const kValues={
        "800m":0.010,
        "1600m": 0.018,
        "3200m": 0.022,
        "5000m": 0.025,
        "10000m": 0.028,
        "Half-Marathon": 0.032,
        "Marathon": 0.035,
       };
       let k =kValues[distanceValue];
       const percent_loss =k*(altitude/1000);
       const seeLevelTime= totalSeconds*(1-percent_loss);
       return seeLevelTime;
    }
    let seaLevelTime=altitudeEquation(totalSeconds,altitudeMeters)
let minutes = Math.floor(seaLevelTime/60);
let seconds = (seaLevelTime%60).toFixed(2);
let convertedTime = minutes + ":" + seconds;
    result.innerText = "Your converted time is "+ convertedTime
});

