var drums = document.querySelectorAll(".drum-container button");

drums.forEach(drum => {
  drum.addEventListener("click", function() {
    var buttonPressed = this.innerHTML;
    playSound(buttonPressed);
    addAnimation(buttonPressed);

  });
});

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  addAnimation(event.key);
});

function playSound(buttonPressed) {
  switch (buttonPressed) {
    case 'a':
      new Audio("sounds/tom-1.mp3").play();
      break;
    case 's':
      new Audio("sounds/tom-2.mp3").play();
      break;
    case 'd':
      new Audio("sounds/tom-3.mp3").play();
      break;
    case 'f':
      new Audio("sounds/tom-4.mp3").play();
      break;
    case 'j':
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case 'k':
      new Audio("sounds/snare.mp3").play();
      break;
    case 'l':
      new Audio("sounds/crash.mp3").play();
      break;
  }
}

function addAnimation(btnText) {
  var btnClicked = document.querySelector("." + btnText);
  btnClicked.classList.add("animation");
  setTimeout(function(){
    btnClicked.classList.remove("animation");
  }, 100);
}
