(() => {
    setInterval(setClock, 1000);

    const $secondHand = document.getElementById('js-second-hand');
    const $minuteHand = document.getElementById('js-minute-hand');
    const $hourHand = document.getElementById('js-hour-hand');

    function setClock() {
        const currentDate = new Date();
        const secondsRatio = currentDate.getSeconds() / 60; 
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; 
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

        setRotation($secondHand, secondsRatio);
        setRotation($minuteHand, minutesRatio);
        setRotation($hourHand, hoursRatio);
    }

    function setRotation(elm, rotationRatio) {
        elm.style.setProperty('--rotation', rotationRatio * 360)
    }

    setClock();

})();