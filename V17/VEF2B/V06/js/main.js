//Various Global varibles vital to quiz
var questionNumber = parseInt(document.getElementById('questionNumber').textContent);
var status;
var clickCounter = 0;
var score = 0;


//function for setting the current questions in regard with the question number
function setQuestion(input){
  document.getElementById('question').innerHTML = input.question;
  for(var i in input.select){
    document.getElementById(i).innerHTML = '<a href="#">'+input.select[i]+'</a>';
  }
  if (questionNumber != 1) {
      document.getElementById('questionNumber').textContent = questionNumber;
  }

}
//Handler for clicking in the game
function clicked(element) {
  if(clickCounter === 0){ //checks if the user has tried to click on the objects before
    id = element.id; //sets the clicked element id
    var selected = document.getElementById(id).textContent; //takes the value from clicked object
    if(selected == questions[questionNumber-1].answer){ //checks the clicked objects text and checks with the answer
      // if score is correct it gives the user a +1 to his score and sets his status to 1; A right answer
      score += 1;
      status=1;
      sendNotifacation(status); //calls the notification function to give the user feedback
    }

    else{
      status = 0; // if the previous fails, gives the user a status of 0; A wrong answer
      sendNotifacation(status); // calls hte notification funciton to give the user feedback
    }
    clickCounter = 1; //sets the click to 1 so that if the user clicks another value he will fail original if statment and gets sent to the next question
  }
  else {
    nextQuestion(); // sends the user to the nextQuestion
  }
}
//Shows the user his score at the end of the quiz
function showScore() {
  //styling for end score screen
  document.getElementById('questionTemplate').innerHTML = '<div id="finalScore">Your score is '+score+'</div><div id="scorePercent">You got '+Math.round(score/questions.length*100)+'% right<br>Enjoy a funny picture'+'<div id="funnyPic"><img src="pictures/purge.png" style="width:500px;height:500px;"></img></div>';
}
//Graps the next question from the questions varible and displays it to the user
function nextQuestion(){
  if (questionNumber >= questions.length) { //If the questionNumber is more or equal to the length of questions show end score screen
    showScore();
  }
  else {//othervise send the user to the next question
    questionNumber+=1;
    setQuestion(questions[questionNumber-1]);
  }
  sendNotifacation(2);
}
//tells the user if he's right or wrong
//Gets value from status varible and give relavent notification
function sendNotifacation(isCorrect){
  //If the user answer correctly, Give him a correct notification
  if (isCorrect == 1) {
    document.getElementById("notification").innerHTML = "<h2>Correct!</h2>";
  }
  //makes sure the older notification does not affect current notification
  else if (isCorrect == 2) {
    document.getElementById("notification").innerHTML = "<h2></h2>";
  }
  //Tells the user he's wrong. better luck next time
  else {
    document.getElementById("notification").innerHTML ="<h2>Wrong!</h2>";
  }
  clickCounter = 0;
}
//Here we set our questions, semi dynamic
var questions = [
  {
    question:"What is my favorite soda?",
    select:['Pepsi lite', 'Koolaid', 'Dr. Pepper', 'Coke Max'],
    answer:"Coke Max"
  },
  {
    question:"What is apple?",
    select:['Siggi', 'Fruit', 'Political view','Type of cow'],
    answer:"Fruit"
  },
  {
    question:"Who is Siggi",
    select:['Student', 'Full time Employee', 'Network enthusiast', 'All of the above'],
    answer:"All of the above"
  }
];
//Initalization of quiz
setQuestion(questions[0]);
