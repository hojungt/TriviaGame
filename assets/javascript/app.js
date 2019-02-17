// PART 1. GLOBAL VARIABLES AND FUNCTION SETUP

// Variables - Countdown Timer
var intervalId;
var timeRemaining = 30;

// Variables - Answer Timeout
var timeOut;

// Variables - set game state object:
var gameState = {
    currentQuestion: -1,
    rightCount: 0,
    wrongCount: 0,
    unansweredCount: 0,
};

// Variables - set question-answer set as an array with objects:
// (abbr: Q question, A answer, EX explanation, A1 A2 A3 A4 answer options 1-4)
var questionSet = [
    {Q: "Which of the following is NOT a name of the Seven Dwarfs in Snow White?", A: "A3", EX:"Shy is not one of them! The Seven Dwarfs' names are Doc, Dopey, Bashful, Grumpy, Sneezy, Sleepy, and Happy.", A1: "Doc", A2: "Sneezy", A3: "Shy", A4: "Happy"},
    {Q: "Which of the following lists the original movies' release dates correctly?", A: "A2", EX:"The Little Mermaid was released the earliest, in 1989; Aladdin was next in 1992; then there was The Lion King in 1994; lastly, Hercules was released in 1997", A1: "Aladdin, The Little Mermaid, The Lion King, Hercules", A2: "The Little Mermaid, Aladdin, The Lion King, Hercules", A3: "The Little Mermaid, Aladdin, Hercules, The Lion King", A4: "Aladdin, The Little Mermaid,The Lion King, Hercules"},
    {Q: "In The Sword in the Stone, what does Merlin call The Greatest Force on Earth? ", A: "A4", EX: '"You know lad, that love business is a powerful thing."', A1: "History", A2: "Friends", A3: "Family", A4: "Love"},
];

// function - append question and answer options through game
// function - append score at end of game
function displayQuestionSet() {
    gameState.currentQuestion++;

    // if there is no question left...
    if (gameState.currentQuestion >= questionSet.length) {

        clearInterval(intervalId);
        $('.time-remaining').remove();

        var $gameOver = $('<h3>');
        $gameOver.addClass('text');
        $('.content').append($gameOver);
        $('.text').text("Game Over");

        var $rightCount = $('<h3>');
        $rightCount.addClass('score');
        $rightCount.attr('id', 'right-count');
        $('.content').append($rightCount);
        $('#right-count').text("Correct Guesses: " + gameState.rightCount);

        var $wrongCount = $('<h3>');
        $wrongCount.addClass('score');
        $wrongCount.attr('id', 'wrong-count');
        $('.content').append($wrongCount);
        $('#wrong-count').text("Inorrect Guesses: " + gameState.wrongCount);

        var $unansweredCount = $('<h3>');
        $unansweredCount.addClass('score');
        $unansweredCount.attr('id', 'unanswered-count');
        $('.content').append($unansweredCount);
        $('#unanswered-count').text("Unanswered: " + gameState.unansweredCount);

        var $restart = $('<button>');
        $restart.addClass('restart-button');
        $('.content').append($restart);
        $('.restart-button').text("Restart Game");

        // game restarts at end of game: location reload
        $('.restart-button').on('click', function() {
            location.reload();
        });
    }

    // if there are still questions to be answered...
    else {
        var $question = $('<h3>');
        $question.attr('id', 'question');
        $('.content').append($question);
        $('#question').text(questionSet[gameState.currentQuestion].Q);

        var $answerOption1 = $('<h3>');
        $answerOption1.addClass('answer-option');
        $answerOption1.attr('id', 'A1');
        $('.content').append($answerOption1);
        $('#A1').text(questionSet[gameState.currentQuestion].A1);

        var $answerOption2 = $('<h3>');
        $answerOption2.addClass('answer-option');
        $answerOption2.attr('id', 'A2');
        $('.content').append($answerOption2);
        $('#A2').text(questionSet[gameState.currentQuestion].A2);

        var $answerOption3 = $('<h3>');
        $answerOption3.addClass('answer-option');
        $answerOption3.attr('id', 'A3');
        $('.content').append($answerOption3);
        $('#A3').text(questionSet[gameState.currentQuestion].A3);

        var $answerOption4 = $('<h3>');
        $answerOption4.addClass('answer-option');
        $answerOption4.attr('id', 'A4');
        $('.content').append($answerOption4);
        $('#A4').text(questionSet[gameState.currentQuestion].A4);
    }
}

// function - append start button to content
function startButton() {
    var $startButton = $('<input type=button value="start">');
    $startButton.addClass('start-button');
    $('.content').append($startButton);
}

// function - append countdown timer
function displayTimer() {
    var $timeRemaining = $('<h3>');
    $timeRemaining.addClass('time-remaining');
    $('.content').append($timeRemaining);
    $('.time-remaining').text("Time Remaining: " + 5);
}

// function - append correct answer
function displayAnswer() {
    var $answer = $('<h3>');
    $answer.addClass('answer');
    $('.content').append($answer);
    $('.answer').text(questionSet[gameState.currentQuestion].EX);    
}

// function - append unanswered text
function unansweredText() {
    var $unanswered = $('<h3>');
    $unanswered.addClass('unanswered-text');
    $('.content').append($unanswered);
    $('.unanswered-text').text("Time's Up!");
}

// function - append correct text
function correctText() {
    var $correct = $('<h3>');
    $correct.addClass('correct-text');
    $('.content').append($correct);
    $('.correct-text').text("That's Right!");
}

// function - append incorrect text
function incorrectText() {
    var $incorrect = $('<h3>');
    $incorrect.addClass('incorrect-text');
    $('.content').append($incorrect);
    $('.incorrect-text').text("That's Wrong...");
}

// function - content timeout between questions
function contentTimeout() {
    timeOut = setTimeout (function() {fiveSeconds();}, 5000);

    function fiveSeconds() {
        $('#question').remove();
        $('.answer').remove();
        $('.unanswered-text').remove();
        $('.incorrect-text').remove();
        $('.correct-text').remove();
        $('.time-remaining').remove();
        timerCountdown();
        displayQuestionSet();
    }
}

// function - run countdown timer
function timerCountdown() {
    displayTimer();
    timeRemaining = 5;
    intervalId = setInterval(count, 1000);
    function count() {
        timeRemaining--;
        $('.time-remaining').text("Time Remaining: " + timeRemaining);

        // if user didn't make a guess within given time...
        if (timeRemaining == 0) {
            clearInterval(intervalId);

            $('.answer-option').remove();
            unansweredText();
            displayAnswer();
            gameState.unansweredCount++;
            console.log(gameState.unansweredCount);

            contentTimeout();
        }
    }  
}

// =====================================================================

// PART 2. GAME IN ACTION

// start button...
startButton();

// when start button is clicked, load game:
$('.start-button').click (function() {

    // remove start button...
    $('.start-button').remove();   
    // show timer countdown...
    timerCountdown();
    // show question and answer options...
    displayQuestionSet();
});

// if user makes a guess, look for on-click event:
// $(document) must be used for the on-click event to be applied throughout game 
// (courtesy of Henry-classmate)
$(document).on('click', '.answer-option', function() {
    
    // find id of user's guess and check if it matches the answer
    var userGuess = $(this).attr('id');
    console.log(userGuess);

    // if guessed correctly...
    if (userGuess == questionSet[gameState.currentQuestion].A) {
        clearInterval(intervalId);
        
        $('.answer-option').remove();
        correctText();
        displayAnswer();
        gameState.rightCount++;
        console.log(gameState.rightCount);

        contentTimeout();
    }

    // if guessed incorrectly..
    else {
        clearInterval(intervalId);

        $('.answer-option').remove();
        incorrectText();
        displayAnswer();
        gameState.wrongCount++;
        console.log(gameState.wrongCount);

        contentTimeout();
    }
});