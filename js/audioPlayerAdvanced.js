/* playAudio */
import {getFullTime} from './modules/getFullTime.js'

const playButton = document.querySelector('.play')
const playPrev = document.querySelector('.play-prev')
const playNext = document.querySelector('.play-next')
const audioPlayer = document.querySelector('.player')



let isPlay = false;
const audio = new Audio();
let playNum = 0


/* full-time render */
audio.addEventListener('loadeddata', () => {
    audioPlayer.querySelector('.full-time').textContent = getFullTime(audio.duration)
}, false)


/* Установка Timeline */

const timeLine = audioPlayer.querySelector('.timeline')

timeLine.addEventListener('click', element => {
    const timelineWidth = window.getComputedStyle(timeLine).width;
    const timeToSeek = element.offsetX / parseInt (timelineWidth) * audio.duration
    console.log(timeToSeek)
    audio.currentTime = timeToSeek
}, false)



setInterval(() => {
    /* наложение прогресса на timeline */
    const progressBar = document.querySelector('.progress')
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    /* а также наложение текущего времени */
    const currTimeAudio = document.querySelector('.current-time')
    currTimeAudio.textContent = getFullTime(audio.currentTime)

}, 500)



function playStopAudio () {
    audio.src = playList[playNum].src
    console.log(playNum)
    audio.currentTime = 0;
    if (isPlay === false) {
        /* console.log(`сработала ф-ия if, ${isPlay}`) */
        audio.play()
        isPlay = true
        /* console.log(`сработала ф-ия if, поменялось с false на - ${isPlay}`) */


    } else {
        if (isPlay === true) {
            /* console.log(`сработала ф-ия else, ${isPlay}`) */
            audio.pause()
            isPlay = false
            /* console.log(`сработала ф-ия else, поменялось с true на - ${isPlay}`) */

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
        /* console.log(isPlay) */
        playButton.classList.remove('play')
        playButton.classList.add('pause')
    } else {
        /* console.log(isPlay) */
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



/* function setPlaynumLS () {
    localStorage.setItem('playnum', playNum)
}

window.addEventListener('beforeunload', setPlaynumLS)
 */
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

playList.forEach((element) => {
    playListContainer.insertAdjacentHTML('beforeend', `<li class="playlist-item">${element.title}</li>`)
})




let volumeSlider = document.querySelector('.volume-line')

volumeSlider.addEventListener('click', element => {
    const  sliderWidth = window.getComputedStyle(volumeSlider).width;
    const volumeState = element.offsetX / parseInt(sliderWidth)
    audio.volume = volumeState
    document.querySelector('.volume-progress').style.width = volumeState * 100 + '%';
}, false)

document.querySelector('.volume').addEventListener('click', function () {
    volumeSlider.style.display = volumeSlider.style.display === 'none' ? 'block' : 'none';
})

/* const playListItems = document.querySelectorAll('.playlist-item')
var arr = Array.prototype.slice.call(playListItems)
console.log(arr) */

/* document.querySelector('.btn').addEventListener('click', function () {
    console.log(`playnum ${playNum}`)
    console.log(`playlist- ${playList[playNum].src}`)
    console.log(`playlist- ${playListContainer[2]}`)

}) */

import playList from "./playList.js"