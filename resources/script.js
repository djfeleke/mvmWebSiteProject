/*
const daysLft = document.getElementById('days');
const hoursLft = document.getElementById('hours');
const minutesLft = document.getElementById('minutes');
const secondsLft = document.getElementById('seconds');

const startDate = new Date('14 June 2021').getTime();

var countDown = setInterval(function() {

    const currentDate = new Date().getTime();
    const timeLeftInSeconds = (startDate - currentDate);

    console.log(startDate, currentDate, timeLeftInSeconds);

    const daysLeft = Math.floor(timeLeftInSeconds / (1000 * 3600 * 24));

    const hoursLeft = Math.floor((timeLeftInSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeftInSeconds % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeftInSeconds % (1000 * 60)) / 1000);

    daysLft.innerHTML = daysLeft;
    hoursLft.innerHTML = timeFormatter(hoursLeft);
    minutesLft.innerHTML = timeFormatter(minutesLeft);
    secondsLft.innerHTML = timeFormatter(secondsLeft);

    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

}, 1000);

function timeFormatter(time) {
    return time < 10 ? `0${time}` : time;
} */

// Set the date we're counting down to

const daysLft = document.getElementById('days');
const hoursLft = document.getElementById('hours');
const minutesLft = document.getElementById('minutes');
const secondsLft = document.getElementById('seconds');

var countDownDate = new Date("June 14, 2021 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    //  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    daysLft.innerHTML = days;
    hoursLft.innerHTML = timeFormatter(hours);
    minutesLft.innerHTML = timeFormatter(minutes);
    secondsLft.innerHTML = timeFormatter(seconds);

    // If the count down is finished, write some text

}, 1000);

function timeFormatter(time) {
    return time < 10 ? `0${time}` : time;
}