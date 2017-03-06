(function() {
"use strict";
// Code used from teacher
/* DOM element */
	let elContainer = document.getElementById('container');
/* Smiður fyrir spurningu */
	function Question(question, answers, correctAnswer) {
		this.question = question; 					/* Spurning (strengur) */
		this.answers = answers; 					/* fylki með svarmöguleikum */
		this.correctAnswer = correctAnswer; 		/* Rétt svar (strengur) */
	}

/* Gögn (fylki af objectum) */
	let questions = [
				new Question('Hvaða ár var hljómsveitin stofnuð?', ['2008', '2009', '2010', '2011'], '2009'),
				new Question('Hvað heitir fyrsta plata hljómsveitarinnar?', ['Baldur', 'Með Vættum', 'Vögguvísur Yggdrasils'], 'Baldur'),
				new Question('Hvað eru margir gítarleikarar í hljómsveitinni?', ['3', '4'], '3'),
				new Question('Hvað heitir trommuleikarinn?', ['Baldur', 'Jón Geir', 'Björgvin', 'Gunnar'], 'Jón Geir'),
		];

/* Template */
	Question.prototype.getTemplate = function(){
	 	let tmplAnswers = "";
	 	for(let i = 0; i < this.answers.length; i++) {
	 		   tmplAnswers += "<div class='question'>" + this.answers[i] + "</div>";
	 	}
	 	return "<h1>" + this.question + "</h1>" + tmplAnswers;

	};

/* Birtum fyrstu spurningu samt svarmöguleikum úr fylkinu */
	elContainer.innerHTML = questions[0].getTemplate();

})();
var qELement = document.querySelector('.question');
console.log(qELement);
qELement.addEventListener('click',function(){
		qELement.classList.remove('question');
		qELement.classList.add('pressed');
},false);
