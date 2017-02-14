var questionNumber = parseInt(document.getElementById('questionNumber').textContent);
var status;
var clickCounter =0;
var score = 0;
//function for setting the current questions in regard with the question number
function setQuestion(input){
  document.getElementById('question').innerHTML = input.question;
  for(var i in input.select){
    document.getElementById(i).innerHTML = '<a href="#">'+input.select[i]+'</a>';
  }
}
function clicked(element) {
  if(clickCounter === 0){
    id = element.id;
    var selected = document.getElementById(id).textContent;
    if(selected == questions[questionNumber-1].answer){
      score+=1;
      status=1;
    }
    else{
      status = 0;
    }
    clickCounter = 1;
    sendNotifacation(status);
}
}
function showScore() {
  console.log(score);
}
function nextQuestion(){
  if (questionNumber >= questions.length) {
    showScore();
  }
  else {
    questionNumber+=1;
    setQuestion(questions[questionNumber-1]);
  }
  sendNotifacation(2);
}
function sendNotifacation(isCorrect){
  console.log('status '+status);
  console.log('isCorrect '+isCorrect);
  if (isCorrect == 1) {
    document.getElementById("notification").innerHTML = "<h2>Correct!</h2>";
  }
  else if (isCorrect == 2) {
    document.getElementById("notification").innerHTML = "<h2></h2>";
  }
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
setQuestion(questions[0]);
