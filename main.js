let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');

function clock() {
    let currentTime = new Date();
    let sec = currentTime.getSeconds() / 60; 
    let min = ( sec + currentTime.getMinutes()) / 60;
    let hour = ( min + currentTime.getHours()) / 12;

    secondHand.style.transform = `rotate(${sec * 360}deg)`;
    secondHand.style.transformOrigin = 'bottom';
    minuteHand.style.transform = `rotate(${min * 360}deg)`;
    hourHand.style.transform = `rotate(${hour * 360}deg)`;
}
setInterval(clock, 1000);
clock();

// let outerClockWrapper = document.querySelector('.clock-wrapper1');

// function outerWrapperRotation() {
//     let currentTime = new Date();
//     let sec = currentTime.getSeconds() / 60;
//     outerClockWrapper.style.transform = `rotate(${sec * 360}deg)`;
// }

// setInterval(outerWrapperRotation, 1000);
