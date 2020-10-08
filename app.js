var Question = function(questionAsked, answers, correct){
    this.questionAsked = questionAsked;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.qDisplayed = function(){
    console.log(this.questionAsked);

    for (var i = 0; i <this.answers.length; i++){
        console.log(i + " " + this.answers[i]);
    }
}

Question.prototype.userGuesses = function(){
    if(guess=== this.correct){
        console.log("This is correct")
    }else{
        console.log("Guess again")
    }
}

var q1 = new Question("How old am i?", [20, 21, 22, 23, 24, 25], 4);
var q2 = new Question("What am i coding in?", ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'JQuery'], 2);
var q3 = new Question("What language do i like the most?", ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'JQuery'], 1);
var q4 = new Question("What is my door number?", [20, 21, 22, 23, 24, 25], 3);
var q5 = new Question("What is my other favourite hobby?", ['snowboarding', 'skiing', 'painting', 'running', 'watching Youtube', 'sleeping'], 0);
var q6 = new Question("What school do i live next to?", ['rockmount', 'virgo girls school', 'coloma', 'norwood school', 'st josephs', 'st thomas'], 3);
var q7 = new Question("Whos my favourite youtuber right now?", ['jeffree star', 'nikkita dragon', ' nella rose', 'mosh', 'dev ed', 'staccie'], 2);
var q8 = new Question("What is my dream job?", ['coder', 'astronaut', 'real estate broker', 'delivery driver', 'pilot', 'runner'], 0);
var q9 = new Question("What was my little cat called?", ['hudini', 'Coco', 'sutty', 'catnis', 'marta', 'meva'], 1);
var q10 = new Question("Who do i teach classes for?", ['code first girls', 'herne hill harriers', 'swim. net', 'minecraft.net', 'gamesonline.net', 'crystal palace basketball squad'], 0);

var qAll = [q1, q2, q3, q4, q5, q6,q7, q8, q9, q10];

var randomNumber = Math.floor(Math.random()*qAll.length);
var qRandom = qAll[randomNumber];

qRandom.qDisplayed();

var guess = parseInt(prompt("What is your guess"));

qRandom.userGuesses(guess);