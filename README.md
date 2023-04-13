# Simon-Game
This is a single player Simon Game which is a basically a memory game. It is based on the retentive power of remembering the colour sequence and beeps.

![](/simon_img/website.png)

### Rules:
* Press any Key to Start.
* Simon will give the first signal. Repeat the signal by pressing the same color.
* Simon will add a new signal. Repeat these two signals by pressing the same color lenses, in order.
* Simon will keep adding new signals. Continue playing as long as you can repeat each sequence of signals correctly. After the 5th, 9th and 13th signals in a sequence, Simon automatically speeds up.
* If you fail to repeat a sequence exactly Simon responds with a "RAZZ" sound. This means you've lost, and the sequence of signals ends.

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
