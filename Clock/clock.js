function clock() {
    const secondHand = document.querySelector('.second-hand');
    const now = new Date();
    const sec = now.getSeconds();
    const secDegrees = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg`;

    const minHand = document.querySelector('.minute-hand');
    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg`;

    const hourHand = document.querySelector('.hour-hand');
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg`;

}

setInterval(clock, 1000);