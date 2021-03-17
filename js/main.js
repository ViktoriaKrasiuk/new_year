window.addEventListener('DOMContentLoaded', () => {
      //  Timer
    //const deadline = '2021-01-01';
    const deadline = `${new Date().getFullYear() + 1}-01-01`
    debugger
    function GetTimeRemaining (endtime) {
        const oneHour = 3600000;
        const t = Date.parse(endtime) - Date.parse(new Date()) - (2*oneHour),
              days = Math.floor(t/(1000*60*60*24)),
              hours = Math.floor(t/(1000*60*60) % 24),
              minutes = Math.floor(t/(1000*60) % 60),
              seconds = Math.floor(t/(1000) % 60);

              return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
              };
    }

    function getZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }else {
            return num;
        }
    }
    function setClock (selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        updateClock ();

        function updateClock () {
            const t = GetTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);


    

});
$(document).ready(function() {
    

    
    
        const musicBtn = document.getElementById('audio-btn'),
              closeBtn = document.getElementById('close-btn'),
              textBlink = document.querySelector('.music__text'),
              music = document.getElementById('myAudio');
        
        musicBtn.addEventListener('click', () => {
            music.play();
            musicBtn.style.display = 'none';
            closeBtn.style.display = 'block';
            textBlink.style.animation = 'none';
        });
        closeBtn.addEventListener('click', () => {
            music.pause();
            closeBtn.style.display = 'none';
            musicBtn.style.display = 'block';
        });
    
});