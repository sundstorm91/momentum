const Time = document.querySelector('.time');
const date = document.querySelector('.date');
const greetElement = document.querySelector('.const-greet');
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
    return Time.textContent = currentTime

}

showTime()


function showDate () {
    const d = new Date();
    const currentDate = d.toLocaleDateString('en-GB', options).split('').slice(0, 21).join('')
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

function showGreeting(current) {
    return greetElement.textContent = `Good ${current}`
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


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return `${Math.floor(Math.random() * (max - min)) + min}`.padStart(2, 0)
}

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

/* weather */
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const cityInput = document.querySelector('.city')

/*

async function getWeather () {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&lang=ru&appid=102d842f590fc3c13d241666da438354
    &units=metric`
    const responce = await fetch(url)
    const data = await responce.json()

    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${data.main.temp}°C`
    weatherDescription.textContent = data.weather[0].description
    document.querySelector('.wind').textContent = `Скорость ветра: ${data.wind.speed} м/с`
    document.querySelector('.humidity').textContent = `Влажность:${data.main.humidity}%`
}

getWeather()

cityInput.addEventListener('change', getWeather)

function setWeatherLS () {
    localStorage.setItem ('weather', cityInput.value)

}

window.addEventListener('beforeunload', setWeatherLS)

function getWeatherLS () {
    const loadWeather = localStorage.getItem('weather')
    if (loadWeather !== null) {
        cityInput.value = loadWeather
        getWeather()
    }
}

window.addEventListener('load', getWeatherLS) */

/* playAudio */
const playButton = document.querySelector('.play')
const playPrev = document.querySelector('.play-prev')
const playNext = document.querySelector('.play-next')

let isPlay = false;
const audio = new Audio();
let playNum = 0

console.log(playList[playNum].src)

function playStopAudio () {
    audio.src = playList[playNum].src

    audio.currentTime = 0;
    if (isPlay === false) {
        console.log(`сработала ф-ия if, ${isPlay}`)
        audio.play()
        isPlay = true
        console.log(`сработала ф-ия if, поменялось с false на - ${isPlay}`)


    } else {
        if (isPlay === true) {
            console.log(`сработала ф-ия else, ${isPlay}`)
            audio.pause()
            isPlay = false
            console.log(`сработала ф-ия else, поменялось с true на - ${isPlay}`)

        }
    }

}


function playAudio () {
    audio.src = playList[playNum].src
    audio.currentTime = 0;
    /* if (isPlay) {
        audio.play()
    } else {
        if (!isPlay) {
            audio.play()

        }
    } */
    audio.play()
}


playButton.addEventListener('click', function () {
    if (!isPlay) {
        console.log(isPlay)
        playButton.classList.remove('play')
        playButton.classList.add('pause')
    } else {
        console.log(isPlay)
        playButton.classList.remove('pause')
        playButton.classList.add('play')
    }

    playStopAudio()
})


playPrev.addEventListener('click', function () {
    playNum > 0 ? playNum -= 1 : playNum = 5
    if (!isPlay) {
        playButton.classList.remove('play')
        playButton.classList.add('pause')
        playAudio()
        isPlay = true
    } else {
        playAudio()

    }
})

playNext.addEventListener('click', function () {
    playNum < 5 ? playNum += 1 : playNum = 0
    if (!isPlay) {
        playButton.classList.remove('play')
        playButton.classList.add('pause')
        playAudio()
        isPlay = true
    } else {
        playAudio()

    }
})


/*
function setPlaynumLS () {
    localStorage.setItem('playnum', playNum)
}

window.addEventListener('beforeunload', setPlaynumLS) */

/*
function getPlaynumLS () {
    const loadPlaynum = localStorage.getItem('playnum')
    if (loadPlaynum !== null) {
        playNum = loadPlaynum
    }
}

window.addEventListener('load', getPlaynumLS) */

/* create playList */

const playListContainer = document.querySelector('.playlist-container')
const li = document.createElement('li')
/* li.className = 'playList-item'; */


playList.forEach((element) => {
    playListContainer.insertAdjacentHTML('beforeend', `<li class="playlist-item item">${element.title}</li>`)
})



















import playList from "..//js/playList.js"




