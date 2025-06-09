let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let fwd = document.getElementById("fwd");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Play/pause function
function playpause() {
  if (song.paused) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}


// if(song.play()){setInterval(() => {
//     progress.value = song.currentTime;
// }, 100);}

// Update progress as the song plays
song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
});


progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}


// fwd button

// function fwd(){
//     song.currentTime = Math.min(song.duration, song.currentTime + 10);
// }