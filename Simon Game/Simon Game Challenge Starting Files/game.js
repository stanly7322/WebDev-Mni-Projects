var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  gameStarted = false;
  level = 0;
  $("h1").text("Press A Key to Start");
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkAnswer(currentLevel) {
  if (
    gamePattern[gamePattern.length - 1] ===
    userClickedPattern[userClickedPattern.length - 1]
  ) {
    nextSequence();
  } else {
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    setTimeout(function () {
      $("body").removeClass("game-over");
      startOver();
    }, 1000);
  }
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  level = level + 1;
  $("h1").text("Level " + level);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

// EVERYTHING WILL START FROM HERE AND GOES TO SEQUENCE GENERATION
$(document).keypress(function (event) {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});

$(".btn").click(function () {
  userChosenColour = $(this).attr("id");
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
