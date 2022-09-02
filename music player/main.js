const play = document.querySelector(".plays");
const pause = document.querySelector(".pause");
const loop = document.querySelector(".loop");
const favorites = document.querySelector(".favorites");
const playList = document.querySelector(".show");
const hideLibrary = document.querySelector(".hide");
const audioLibrary = document.querySelector(".audio-library");
const mainContent = document.querySelector(".main-content");
const audioSym = document.querySelector(".audio");
const prev = document.querySelector(".prev");
const forward = document.querySelector(".forward");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const timer = document.querySelector(".progress");
const endTime = document.querySelector(".end-time");
const startTime = document.querySelector(".start-time");
const time = document.querySelector(".time");
const shuffle = document.querySelector(".shuffle");
const addFavorite = document.querySelector(".add-favorite");
const pickFile = document.querySelector(".pick-file");
const inputFile = document.querySelector(".input-type");
const hiddenInput = document.querySelector(".input");
const inputButton = document.querySelector(".input-button");
const label = document.querySelector(".input-label");
const defaultTextDisplay = "No File(s) choosen";
let musicIndex = 2;
const showContent = function (e) {
  e.style.visibility = "visible";
};
const hideContent = function (e) {
  e.style.visibility = "hidden";
};
const changeColor = function (e) {
  e.style.color = " #4e6fe2";
};

window.addEventListener("load", () => {
  loadMusic(musicIndex);
});

function loadMusic(index) {
  songTitle.innerText = allMusic[index - 1].name;
  songArtist.innerText = allMusic[index - 1].artist;
  audioSym.src = `audio/${allMusic[index - 1].src}.mp3`;
}

hiddenInput.addEventListener("change", function () {
  const fileNameList = Array.prototype.map.call(
    hiddenInput.files,
    function setAudioFile(file) {
      const newFile = new FileReader();
      newFile.readAsDataURL(file);
      newFile.onload = () => {
        audioSym.src = newFile.result;
        songTitle.textContent = file.name;
        const songNames = [];
        const fileNames = file;
        songNames.push(fileNames);
        const createArray = songNames.split();
        console.log(createArray);
      };

      return file.name;
    }
  );
  setAudioFile(hiddenInput.files);
  const labelContent = (label.textContent =
    fileNameList.join(", ") || defaultTextDisplay);
  allMusic.added = labelContent;
  console.log(allMusic.added);
});

// window.addEventListener("paste", function (e) {
//   if (e.clipboardData.files.lenght > 0) {
//     hiddenInput.files = e.clipboardData.files;
//     console.log(hiddenInput.files);
//   }
// });

function playMusic() {
  mainContent.classList.add("paused");
  audioSym.play();
}

function pauseMusic() {
  mainContent.classList.remove("paused");
  audioSym.pause();
}

function musicLogic() {
  const isMusicPause = mainContent.classList.contains("paused");
  isMusicPause ? pauseMusic() : playMusic();
}

function loopMusic() {
  musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}

play.addEventListener("click", function () {
  showContent(pause);
  hideContent(play);
  mainContent.classList.add("play");
  musicLogic();
});

pause.addEventListener("click", function () {
  showContent(play);
  hideContent(pause);
  mainContent.classList.remove("play");
  musicLogic();
});

function nextMusic() {
  musicIndex++;
  musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);

  if (
    play.style.visibility === "hidden" &&
    pause.style.visibility === "visible"
  ) {
    loadMusic(musicIndex);
    playMusic();
  } else {
    loadMusic(musicIndex);
  }
}

loop.addEventListener("click", function () {
  shuffle.classList.toggle("color");
  showContent(shuffle);
  hideContent(loop);
});

shuffle.addEventListener("click", function () {
  loop.classList.toggle("color");
  showContent(loop);
  hideContent(shuffle);
});

favorites.addEventListener("click", function () {
  favorites.classList.toggle("favorite-color");
  let incrementClose = 0;
  if (favorites.classList.contains("favorite-color")) {
    setTimeout(() => {
      showContent(addFavorite);
    }, 1000);

    setTimeout(() => {
      incrementClose++;
      if (incrementClose === 1) {
        hideContent(addFavorite);
        console.log("boy");
      }
    }, 2000);
  } else {
  }
});

playList.addEventListener("click", function () {
  showContent(audioLibrary);
});

hideLibrary.addEventListener("click", function () {
  hideContent(audioLibrary);
});

prev.addEventListener("click", () => {
  musicIndex--;
  musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
  if (
    play.style.visibility === "hidden" &&
    pause.style.visibility === "visible"
  ) {
    loadMusic(musicIndex);
    playMusic();
  } else {
    loadMusic(musicIndex);
  }
});

forward.addEventListener("click", () => {
  nextMusic();
});

inputButton.addEventListener("click", function () {
  hiddenInput.click();
  console.log(hiddenInput.files);
});

audioSym.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  timer.style.width = `${progressWidth}%`;

  let musicCurrentTime = mainContent.querySelector(".start-time");
  musicDuration = mainContent.querySelector(".end-time");

  audioSym.addEventListener("loadeddata", () => {
    let audioDuration = audioSym.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

time.addEventListener("click", (e) => {
  let progressWidthVal = time.clientWidth;
  let clickedOffsetX = e.offsetX;
  let songDuration = audioSym.duration;

  audioSym.currentTime = (clickedOffsetX / progressWidthVal) * songDuration;
  playMusic();
});

audioSym.addEventListener("ended", function () {
  if (loop.style.visibility === "hidden") {
    nextMusic();
  } else {
    loopMusic();
  }
});

pickFile.addEventListener("click", () => {
  inputFile.classList.toggle("show-input");
  inputFile.classList.transition = "all 0.3s ease-out";
});

// Array.prototype.forEach.call(
//   document.querySelector(".input-button"),
//   function (button) {
//     const hiddenInput = button.parentElement.querySelector(".input");
//
//     const defaultTextDisplay = "No File(s) choosen";
//     label.textContent = defaultTextDisplay;
//     label.title = defaultTextDisplay;
//   }
// );
