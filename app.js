let progress = document.getElementById("progress");
let music = document.getElementById("music");
let ctrl = document.getElementById("ctrl");

music.addEventListener("loadedmetadata", () => {
    progress.max = music.duration;
    progress.value = music.currentTime;
});

function playPause() {
    if (ctrl.classList.contains("fa-pause")) {
        music.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
    } else {
        music.play();
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }
}

music.addEventListener("timeupdate", () => {
    progress.value = music.currentTime;
});

progress.addEventListener("input", () => {
    music.currentTime = progress.value;
});