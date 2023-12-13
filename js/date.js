/* import { getRandomInt, showGreeting } from "./modules/random.js"; */
import { getRandomInt, showGreeting  } from "./modules/objFunc.js";

const Time = document.querySelector('.time');
const date = document.querySelector('.date');
const greetMessage = `${getTimeOfDay()}`;
const inputName = document.querySelector('.greet-name');
const slideNext = document.querySelector('.next-slider');
const slidePrev = document.querySelector('.prev-slider');
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
    showGreeting(greetMessage)
    getTimeOfDay ()

    return Time.textContent = currentTime
}

showTime()


function showDate () {
    const d = new Date()
    const options = {month: 'long', day: 'numeric', weekday: 'long'};/* ! */
    const currentDate = d.toLocaleDateString('en-GB', options);
    return date.textContent = currentDate;
}

showDate()



function getTimeOfDay () {

    const curr = new Date();
    const hours = curr.getHours()
    /* console.log(hours) */

    if (hours >= 6 && hours <= 12) {
        return ('morning')
    } else if (hours > 12 && hours <= 18) {
        return('afternoon')
    } else if (hours > 18 && hours <= 24) {
        return('evening')
    } else {
        return ('night')
    }

}

showGreeting(greetMessage)

function setLocaleStorage () {
    localStorage.setItem('name', inputName.value)
}

window.addEventListener('beforeunload', setLocaleStorage)


function getLocaleStorage () {
    const loadStorageName = localStorage.getItem('name')
    if (loadStorageName !== null) {
        inputName.value = loadStorageName
    }
}

window.addEventListener('load', getLocaleStorage)

  /* momentum slider */


let randomInt = getRandomInt(1, 20)

slideNext.addEventListener('click', function() {

    let Integer = +randomInt
    randomInt = `${Integer < 20 ? Integer +=1 : Integer = 1}`.padStart(2, 0)
    setBg(greetMessage,randomInt)
    console.log(`randomInt = ${randomInt}`)

})

slidePrev.addEventListener('click', function() {

    let Integer = +randomInt
    randomInt = `${Integer <= 1 ? Integer = 20 : Integer -= 1}`.padStart(2, 0)
    setBg(greetMessage,randomInt)
    console.log(`randomInt = ${randomInt}`)

})

function setBg (currentTime, randomInt) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${currentTime}/${randomInt}.jpg`;

  img.addEventListener('load', function () {
    document.body.style.backgroundImage =
    `url(${img.src})`
  })
}

setBg(greetMessage,randomInt)















