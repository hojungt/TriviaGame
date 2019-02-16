// PART 1 - GAME START BUTTON

// append start button to content
var $startButton = $('<input type=button value="start">');
$startButton.addClass('start-button');
$('.content').append($startButton);

// =====================
// PART 2 - SET TIMER

var intervalId;
var timeRemaining = 30;


// when start button is clicked, load game here:
$('.start-button').click (function() {

    $('.start-button').remove();   


    intervalId = setInterval(count, 1000);
    
    function count() {
        timeRemaining--;
    }
    
    var $timeRemaining = $('<h3>');
    $timeRemaining.addClass('time-remaining');
    $('.content').append($timeRemaining);
    $('.time-remaining').text("Time Remaining: " + timeRemaining);



    // var $timeRemaining = $('<h3>');
    // $timeRemaining.addClass('time-remaining');
    // $('.content').append($timeRemaining);
    // $('.time-remaining').text("Time Remaining: " + timeRemaining);

});

// =====================
// PART 3 - SET TIMEOUT

var timeOut = setTimeout (function() {
    fiveSeconds();
}, 5000);

function fiveSeconds() {

};


// clearTimeout();
// if answer is clicked, clearInterval();


// =====================
// PART 4 - GAME CONTENT

// Variables - set game score as state object:

var gameState = {
    rightCount: 0,
    wrongCount: 0,
    unansweredCount: 0,
};

// Variables - set question-answer set as an array with objects:

var currentQuestion;

var questionSet = [
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A1: "a", A2: "a", A3: "a", A4: "a"},
];

// for loop to display questionSet

function displayQuestionSet() {
    var $question = $('<h3>');
    $question.addClass('question');
    $('.content').append($question);
    $('.question').text(questionSet[i].Q);
}

// Link values to HTML elements:



// For Loop - append questionSet with class and button attribute:


