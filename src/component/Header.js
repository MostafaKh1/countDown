import React from "react";


export default function Header() {


    let countDown = new Date("Sat May 28 2022 22:46:48")

    let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDown - dateNow

    let days = Math.floor( dateDiff  / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / 1000 / 60 )
    let seconds =  Math.floor((dateDiff % (1000 * 60)) / 1000 )
        document.getElementById("days").innerHTML =  days < 10 ? `0${days}` : days;  
        document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;  
        document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;  
        document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        
        if (dateDiff < 0) {
            clearInterval(counter)
        }

  }, 1000)


    
    return (
        <div class="countdown-body">
      <div class="header">
        <p>WE'RE LAUNCHING SOON</p>
      </div>

      <div class="counter">
        <div class="days">
          <span class="box" id="days"></span>
          <p>DAYS</p>
        </div>
        <div class="hours">
          <span class="box" id="hours"></span>
          <p>HOURS</p>
        </div>
        <div class="minutes">
          <span class="box" id="minutes"></span>
          <p>MINUTES</p>
        </div>
        <div class="seconds">
          <span class="box" id="seconds"></span>
          <p>SECONDS</p>
        </div>
      </div>
    </div>
    )
}