var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function animatePress(currentColour){
  $('#'+currentColour).addClass('pressed');
  setTimeout(function(){
    $('#'+currentColour).removeClass('pressed');
  },100);

}

function playSound(name){
  switch (name) {
    case "red":
      var red = new Audio('red.mp3');
      red.play();
      break;
    case "blue":
      var blue = new Audio('blue.mp3');
      blue.play();
      break;
    case "green":
      var green = new Audio('green.mp3');
      green.play();
      break;
    case "yellow":
      var yellow = new Audio('yellow.mp3');
      yellow.play();
      break;
    default:

  }

}

function nextSequence() {
    userClickedPattern = [];
  level++;
  $('h1').html('Level '+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $('#' + randomChosenColour).fadeOut();
  setTimeout(function() {
    $('#' + randomChosenColour).fadeIn();
  }, 80);
  playSound(randomChosenColour);


}

$('div.btn').click(function(){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})

$(document).keydown(function(event){
  if(started===false)
  {
    $('h1').html('Level 0');
    nextSequence();
    started = true;
  }

})

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    },200);
    $('h1').html('Game Over, Press Any Key to Restart');
    startOver();
  }
}
