const Time = document.querySelector('.time')
const date = document.querySelector('.date')
const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };

function showTime () {
    const date = new window.Date();/* date is not is constructor  была ошибка из за глобальной переменной Date*/
    const currentTime = date.toLocaleTimeString()
    setTimeout(showTime, 1000)
    showDate()
    return Time.textContent = currentTime
}

showTime()


function showDate () {
    const d = new Date();
    const currentDate = d.toLocaleDateString('en-GB', options).split('').slice(0, 18).join('')
    return date.textContent = currentDate;
}

showDate()
