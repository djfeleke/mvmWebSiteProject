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
}