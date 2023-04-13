# Simon-Game
This is a single player Simon Game which is a basically a memory game. It is based on the retentive power of remembering the colour sequence and beeps.

![](/simon_img/website.png)

### Rules:
* Press any Key to Start.
* Simon will give the first signal. Repeat the signal by pressing the same color.
* Simon will add a new signal. Repeat these two signals by pressing the same color lenses, in order.
* Simon will keep adding new signals. Continue playing as long as you can repeat each sequence of signals correctly. After the 5th, 9th and 13th signals in a sequence, Simon automatically speeds up.
* If you fail to repeat a sequence exactly Simon responds with a sound. This means you've lost, and the sequence of signals ends.

## Try It - > [SIMON GAME](https://manjari-99.github.io/Simon-Game/)

## Methodology 

#### index.html 

We create the basic web page that serves as the interactive portal.

Code:


```
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Simon</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
</head>

<body>
  <h1 id="level-title">Press A Key to Start</h1>
  <div class="container">
    <div lass="row">

      <div type="button" id="green" class="btn green">

      </div>

      <div type="button" id="red" class="btn red">

      </div>
    </div>

    <div class="row">

      <div type="button" id="yellow" class="btn yellow">

      </div>
      <div type="button" id="blue" class="btn blue">

      </div>

    </div>

  </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="game.js" charset="utf-8"></script>
</body>

</html>

```

#### game.js

This is the JavaScript Code

```
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
    var wrong = new Audio('wrong.mp3');
    wrong.play();
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    },200);
    $('h1').html('Game Over, Press Any Key to Restart');
    startOver();
  }
}

```

#### style.css

Cause who wants to go for a basic website anyways!?

Code:

```
body {
  text-align: center;
  background-color: #011F3F;
}

#level-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
  margin:  5%;
  color: #FEF2BF;
}

.container {
  display: block;
  width: 50%;
  margin: auto;

}

.btn {
  margin: 25px;
  display: inline-block;
  height: 200px;
  width: 200px;
  border: 10px solid black;
  border-radius: 20%;
}

.game-over {
  background-color: red;
  opacity: 0.8;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

.pressed {
  box-shadow: 0 0 20px white;
  background-color: grey;
}
```
