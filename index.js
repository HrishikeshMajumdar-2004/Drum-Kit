for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
  });
  // KeyboardEvent objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard.
  document
    .querySelectorAll(".drum")
    [i].addEventListener("keydown", function (ev) {
      // Unlike the deprecated keypress event, the keydown event is fired for all keys, regardless of whether they produce a character value.
      var key = ev.key;
      // Returns a string representing the key value of the key represented by the event.
      makesound(key);
      buttonanimation(key);
    });
}
function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:
      console.log(key);
      break;
  }
}
function buttonanimation(currentkey) {
  var activebutton = document.querySelector("." + currentkey);

  activebutton.classList.add("pressed");
  // adding the css .pressed using JS when a button is clicked or pressed
  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 100);
  //   The setTimeout() method calls a function after a number of milliseconds.
  // 1 second = 1000 milliseconds.
  // Wait 5 seconds for the greeting:

  // const myTimeout = setTimeout(myGreeting, 5000);
}
