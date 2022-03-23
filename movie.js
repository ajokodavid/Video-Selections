var i = 0;
var txt = 'Free videos for you to watch and download'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewri").innerHTML += txt.charAt(i);
    i++;
    console.log(setTimeout(typeWriter, speed));
  }
}

typeWriter();

let videos = document.querySelectorAll("video");

function enableAutoPlayForFirstVideo() {
    videos[0].autoplay = true;
    videos[0].load();
}

enableAutoPlayForFirstVideo();

videos[0].addEventListener("play", function() {
    videos[1].pause();
    videos[2].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[10].pause();
    videos[10].pause();
    videos[10].pause();
    videos[14].pause();
})

videos[1].addEventListener("play", function() {
    videos[0].pause();
    videos[2].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();

})

videos[2].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[3].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[2].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[4].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[2].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[5].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[2].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[6].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[2].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[7].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[2].pause();
    videos[8].pause();
    videos[9].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[8].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[2].pause();
    videos[9].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[9].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[2].pause();
    videos[10].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[10].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[2].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[11].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[2].pause();
    videos[10].pause();
    videos[12].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[12].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[2].pause();
    videos[11].pause();
    videos[10].pause();
    videos[13].pause();
    videos[14].pause();
})

videos[13].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[2].pause();
    videos[11].pause();
    videos[12].pause();
    videos[10].pause();
    videos[14].pause();
})

videos[14].addEventListener("play", function() {
    videos[0].pause();
    videos[1].pause();
    videos[3].pause();
    videos[4].pause();
    videos[5].pause();
    videos[6].pause();
    videos[7].pause();
    videos[8].pause();
    videos[9].pause();
    videos[2].pause();
    videos[11].pause();
    videos[12].pause();
    videos[13].pause();
    videos[10].pause();
})