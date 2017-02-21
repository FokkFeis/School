    <div id = "questionTemplate">
        <p id="questionNumber">1<p> <!-- fix to dynamic -->
        <p id="question">Question</p>
        <div id="questions">
          <li id="0" onClick="clicked(this);">selection 1</li>
          <li id="1" onClick="clicked(this);">selection 2</li>
          <li id="2" onClick="clicked(this);">selection 3</li>
          <li id="3" onClick="clicked(this);">selection 4</li>
        </div>
        <button id="nextQuestion" onClick="nextQuestion();">Next Question</button>
    </div>
    <div class="notification" id="notification">
      <p></p>
    </div>
    <script type="text/javascript" src="<?php echo URL; ?>js/main.js">

    </script>
