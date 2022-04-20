
setInterval(() => {
    let hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    ampm = document.getElementById('ampm');

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

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
})


