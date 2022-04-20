
setInterval(() => {
    let hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds'),
        ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh'),
        mm = document.getElementById('mm'),
        ss = document.getElementById('ss');

    let hr_dot = document.querySelector('.hr_dot'),
        min_dot = document.querySelector('.min_dot'),
        sec_dot = document.querySelector('.sec_dot');
  
    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds(),
        am = h >= 12 ? 'PM' : 'AM';

    // convert 24hr to 12hr clock
    if(h > 12) {
        h = h - 12;
    }
    // add zero
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hours.innerHTML = h + '<br><span>hours</span>';
    minutes.innerHTML = m + '<br><span>minutes</span>';
    seconds.innerHTML = s + '<br><span>seconds</span>';
    ampm.innerHTML = am;

    // 12 hrs clock
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 60 min clock and seconds
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // 360deg / 12h
    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    // 360deg / 60min and 60 sec
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;

})


