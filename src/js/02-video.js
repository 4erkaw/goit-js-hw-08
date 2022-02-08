import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const STORAGE_CRNT_TIME = "videoplayer-current-time"

player.on('timeupdate', throttle(currentTime, 1000))

function currentTime(data){
    localStorage.setItem(STORAGE_CRNT_TIME, data.seconds)
}

const time = localStorage.getItem(STORAGE_CRNT_TIME) || 0

player.setCurrentTime(time)



player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});



