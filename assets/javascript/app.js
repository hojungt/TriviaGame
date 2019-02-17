// 1. GLOBAL VARIABLES AND FUNCTION SET UP

// Variables - Countdown Timer
var intervalId;
var timeRemaining = 5;

// Variables - Answer Timeout
var timeOut;

// Variables - set game score as state object:
var gameState = {
    currentQuestion: -1,
    rightCount: 0,
    wrongCount: 0,
    unansweredCount: 0,
};

// Variables - set question-answer set as an array with objects:
var questionSet = [
    {Q: "Which of the following is NOT a name of the Seven Dwarfs in Snow White?", A: "A3", EX:"Shy is not one of them! The Seven Dwarfs' names are Doc, Dopey, Bashful, Grumpy, Sneezy, Sleepy, and Happy.", A1: "Doc", A2: "Sneezy", A3: "Shy", A4: "Happy"},
    {Q: "Which of the following lists the original movies' release dates correctly?", A: "A2", EX:"The Little Mermaid 1989, Aladdin 1992, The Lion King 1994, Hercules 1997", A1: "Aladdin, The Little Mermaid, The Lion King, Hercules", A2: "The Little Mermaid, Aladdin, The Lion King, Hercules", A3: "The Little Mermaid, Aladdin, Hercules, The Lion King", A4: "Aladdin, The Little Mermaid,The Lion King, Hercules"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A1", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A1", A1: "a", A2: "a", A3: "a", A4: "a"},
    {Q: "q", A: "A1", A1: "a", A2: "a", A3: "a", A4: "a"},
];

// function - for loop to display questionSet...
function displayQuestionSet() {

    gameState.currentQuestion++;

        var $question = $('<h3>');
        $question.attr('id', 'question');
        $('.content').append($question);
        $('.question').text(questionSet[gameState.currentQuestion].Q);

        var $answerOption1 = $('<h4>');
        $answerOption1.addClass('answer-option');
        $answerOption1.attr('id', 'option1');
        $('.content').append($answerOption1);
        $('#option1').text(questionSet[gameState.currentQuestion].A1);

        var $answerOption2 = $('<h4>');
        $answerOption2.addClass('answer-option');
        $answerOption2.attr('id', 'option2');
        $('.content').append($answerOption2);
        $('#option2').text(questionSet[gameState.currentQuestion].A2);

        var $answerOption3 = $('<h4>');
        $answerOption3.addClass('answer-option');
        $answerOption3.attr('id', 'option3');
        $('.content').append($answerOption3);
        $('#option3').text(questionSet[gameState.currentQuestion].A3);

        var $answerOption4 = $('<h4>');
        $answerOption4.addClass('answer-option');
        $answerOption4.attr('id', 'option4');
        $('.content').append($answerOption4);
        $('#option4').text(questionSet[gameState.currentQuestion].A4);
}

// function - append start button to content:
function startButton() {
    var $startButton = $('<input type=button value="start">');
    $startButton.addClass('start-button');
    $('.content').append($startButton);
}

// function - display countdown timer
function displayTimer() {
    var $timeRemaining = $('<h3>');
    $timeRemaining.addClass('time-remaining');
    $('.content').append($timeRemaining);
    $('.time-remaining').text("Time Remaining: " + timeRemaining);
}

// function - display correct answer
function displayAnswer() {
    var $answer = $('<h3>');
    $answer.addClass('answer');
    $('.content').append($answer);
    $('.answer').text(questionSet[gameState.currentQuestion].EX);    
}

// function - unanswered text display
function unansweredText() {
    var $unanswered = $('<h3>');
    $unanswered.addClass('unanswered-text');
    $('.content').append($unanswered);
    $('.unanswered-text').text("Times Up!");
}

// function - correct answer text display
function correctText() {
    var $correct = $('<h3>');
    $correct.addClass('correct-text');
    $('.content').append($correct);
    $('.correct-text').text("That's Right!");
}

// function - incorrect answer text display
function incorrectText() {
    var $incorrect = $('<h3>');
    $incorrect.addClass('incorrect-text');
    $('.content').append($incorrect);
    $('.incorrect-text').text("That's Wrong...");
}

// =====================================================================

// 2. GAME CODE

// start button...
startButton();

// when start button is clicked, load game:
$('.start-button').click (function() {

    // remove start button...
    $('.start-button').remove();   
    // show timer...
    displayTimer();
    // show question and answer options...
    displayQuestionSet();

    // timer countdown...
    intervalId = setInterval(count, 1000);
    function count() {
        timeRemaining--;
        $('.time-remaining').text("Time Remaining: " + timeRemaining);
        
        // if user didn't make a guess...
        if (timeRemaining == 0) {
            clearInterval(intervalId);

            $('.answer-option').remove();
            unansweredText();

            displayAnswer();
            gameState.unansweredCount++;
            console.log(gameState.unansweredCount);

            timeOut = setTimeout (function() {
                fiveSeconds();
            }, 5000);
            
            function fiveSeconds() {
                $('.question').remove();
                $('.answer').remove();
                $('.unanswered-text').remove();
                displayQuestionSet();
            }
            // clearTimeout();
        }

        // if user makes a guess, on click event
        $('answer-option').on('click', function() {

            var userGuess = $(this).text;
            console.log(userGuess);
            if (userGuess == questionSet[gameState.currentQuestion].A) {
                correctText();
            }

        });

        // if correct answer is clicked, guessed right!

        // if incorrect answer is clicked, guessed wrong!



    }

});

