// Get Dom elements

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
// update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
      play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
      play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
  }
// Update progress & timestamp
function updateProgress() {
    // Set the percentage as the video progresses
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) {
        mins = '0' + String(mins);
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;

}

// Set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event Listeners
    // toggleVideoStatus will play the video if its paused/stopped or pause if playing
video.addEventListener('click', toggleVideoStatus);
    // updatePlayIcon is used to switch between the pause and play icon
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
    // updateProgress is used for the progress of the video
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

    // When you click the slider, this will change the video progress
progress.addEventListener('change', setVideoProgress);

