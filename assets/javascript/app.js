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
    {Q: "Which of the following princess is the youngest Disney princess?", A: "A2", EX: "Snow White is 14 years old; Ariel is 15; Rapunzel is 18, and Cinderella is 19.", A1: "Ariel", A2: "Snow White", A3: "Rapunzel", A4: "Cinderella"},
    {Q: "What did Pocahontas see in her dream that made her believe that a change was coming?", A: "A4", EX: "With the help of Grandmother Willow, her dream of a spinning arrow makes Pocahontas believe a change is coming.", A1: "A burning blue fire", A2: "A hawk circling her village", A3: "A talking tree", A4: "A spinning arrow"},
    {Q: "Which of the following has the shortest hair?", A: "A1", EX: "Rapunzel’s hair goes from 75 feet in length to a much shorter pixie cut by the end of the film.", A1: "Rapunzel", A2: "Jasime", A3: "Belle", A4: "Cinderella"},
    {Q: "What color is Aurora's dress when she pricks her finger on the spinning wheel?", A: "A3", EX: "It's blue.", A1: "yellow", A2: "pink", A3: "blue", A4: "gree"},
    {Q: "Which of the following princess does NOT have both parents alive throughout the story?", A: "A2", EX: "Belle's mother never appeared throughout Beauty and the Beast.", A1: "Belle", A2: "Mulan", A3: "Aurora", A4: "Merida"},
    {Q: "How many sisters does Ariel have?", A: "A1", EX: "Ariel has 6 sisters, and their names are Aquata, Andrina, Arista, Attina, Adella and Alana.", A1: "5", A2: "6", A3: "7", A4: "8"},
    {Q: "What did Cinderella serve all the animals for breakfast at the beginning of the movie?", A: "A3", EX: "It's corn.", A1: "bread crumb", A2: "carrot", A3: "corn", A4: "sunflower seed"},
    {Q: "What did Grandma Fa give Mulan before seeing the matchmaker, in hopes to bring good luck to Mulan?", A: "A4", EX: "A special cricket, which the grandma held in hand while walking across a busy street.", A1: "A golden charm", A2: "A fan", A3: "A silk dress", A4: "A special cricket"},
    {Q: "What is the name of Jasmine's tiger?", A: "A1", EX: "Rajah is the name of Jasmine's pet tiger.", A1: "Rajah", A2: "Jarah", A3: "Jafar", A4: "Raj"},
    {Q: "Which of the following is NOT the name of Merida's brothers?", A: "A2", EX: "Merida has three brothers, and their names are Harris, Hubert, and Hamish.", A1: "Harris", A2: "Hubert", A3: "Harry", A4: "Hamish"},
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