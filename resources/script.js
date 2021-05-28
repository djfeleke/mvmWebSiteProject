const daysLft = document.getElementById('days');
const hoursLft = document.getElementById('hours');
const minutesLft = document.getElementById('minutes');
const secondsLft = document.getElementById('seconds');


const startDate = '14 June 2021';

const countDown = () => {
    const classStartDate = new Date(startDate);
    const currentDate = new Date();
    const timeLeftInSeconds = (classStartDate - currentDate) / 1000;

    const daysLeft = Math.floor(timeLeftInSeconds / 3600 / 24);
    const hoursLeft = Math.floor(timeLeftInSeconds / 3600) % 24;
    const minutesLeft = Math.floor(timeLeftInSeconds / 60) % 60;
    const secondsLeft = Math.floor(timeLeftInSeconds % 60);
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    daysLft.innerHTML = daysLeft;
    hoursLft.innerHTML = timeFormatter(hoursLeft);
    minutesLft.innerHTML = timeFormatter(minutesLeft);
    secondsLft.innerHTML = timeFormatter(secondsLeft);

}

function timeFormatter(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();