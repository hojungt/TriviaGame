// PART 1 - GAME START BUTTON

// append start button to content
var $startButton = $('<input type=button value="start">');
$startButton.addClass('start-button');
$('.content').append($startButton);

// =====================
// PART 2 - SET 30S COUNTDOWN TIMER

var intervalId;
var timeRemaining = 3;

// =====================
// PART 3 - SET TIMEOUT?????


// var timeOut = setTimeout (function() {
//     fiveSeconds();
// }, 5000);

// function fiveSeconds() {

// };


// =====================
// PART 4 - GAME CONTENT

// Variables - set game score as state object:

var gameState = {
    currentQuestion: 0,
    rightCount: 0,
    wrongCount: 0,
    unansweredCount: 0,
};

// Variables - set question-answer set as an array with objects:

var questionSet = [
    {Q: "Which of the following is NOT a name of the Seven Dwarfs in Snow White?", A: "Shy is not one of them! The Seven Dwarfs' names are Doc, Dopey, Bashful, Grumpy, Sneezy, Sleepy, and Happy.", A1: "Doc", A2: "Sneezy", A3: "Shy", A4: "Happy"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A1", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A1", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A1", A1: "a", A2: "a", A3: "a", A4: "a"},
];

// for loop to display questionSet
function displayQuestionSet() {
        var $question = $('<h3>');
        $question.addClass('question');
        $('.content').append($question);
        $('.question').text(questionSet[gameState.currentQuestion].Q);

        var $answerOption1 = $('<h4>');
        $answerOption1.addClass('answer-option1');
        $('.content').append($answerOption1);
        $('.answer-option1').text(questionSet[gameState.currentQuestion].A1);

        var $answerOption2 = $('<h4>');
        $answerOption2.addClass('answer-option2');
        $('.content').append($answerOption2);
        $('.answer-option2').text(questionSet[gameState.currentQuestion].A2);

        var $answerOption3 = $('<h4>');
        $answerOption3.addClass('answer-option3');
        $('.content').append($answerOption3);
        $('.answer-option3').text(questionSet[gameState.currentQuestion].A3);

        var $answerOption4 = $('<h4>');
        $answerOption4.addClass('answer-option4');
        $('.content').append($answerOption4);
        $('.answer-option4').text(questionSet[gameState.currentQuestion].A4);
}


// For Loop - append questionSet with class and button attribute:



// =====================================================================
// when start button is clicked, load game here:
$('.start-button').click (function() {

    //remove start button
    $('.start-button').remove();   

    //timer count down
    var $timeRemaining = $('<h3>');
    $timeRemaining.addClass('time-remaining');
    $('.content').append($timeRemaining);
    $('.time-remaining').text("Time Remaining: " + timeRemaining);
    displayQuestionSet();

    intervalId = setInterval(count, 1000);

    function count() {
        timeRemaining--;
        $('.time-remaining').text("Time Remaining: " + timeRemaining);
        return timeRemaining;
    }
    
// how to return remaining time to set logical operator?

    if (time == 0) {
        clearInterval(intervalId);
        gameState.unansweredCount++;

        var $answer = $('<h3>');
        $answer.addClass('answer');
        $('.content').append($answer);
        $('.answer').text(questionSet[gameState.currentQuestion].A);
    }

});

