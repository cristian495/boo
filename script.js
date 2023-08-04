const heart = document.querySelector(".heart");

const yellowAudio = new Audio("audio/yellow.mp3");
const elleAudio = new Audio("audio/yellow.mp3");
const crisAudio = new Audio("audio/yellow.mp3");

heart.addEventListener("click", function () {
  const isRed = heart.classList.contains("red");
  if (isRed) {
    heart.classList.remove("red");
    heart.classList.add("yellow");
    yellowAudio.play();
  } else {
    heart.classList.add("red");
    heart.classList.remove("yellow");
    yellowAudio.pause();
  }
});
