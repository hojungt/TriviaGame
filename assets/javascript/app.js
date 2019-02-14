// PART 1 - PRE-GAME CONTENT

// append start button to content
var $startButton = $('<input type=button value="start">');
$startButton.addClass('custom-button');
$('.content').append($startButton);

$('.custom-button').click (function() {
    $('.custom-button').remove()

    // function to load game here, to include PART 2 & 3 & 4

    // =====================
    // PART 2 - SET TIMER

    var timeRemaining = 30;

    function timerStart() {
        function reduceTime() {
            timeRemaining--;
        };
        setInterval(reduceTime, 1000);
        };
    timerStart();

    var $timeRemaining = $('<h3>');
    $timeRemaining.addClass('time-remaining');
    $('.content').append($timeRemaining);
    $('.time-remaining').text("Time Remaining: " + timeRemaining)

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

// var gameState = {
//     rightCount: 0,
//     wrongCount: 0,
//     unansweredCount: 0,
// };

// Variables - set question-answer set as object:

// var questionSet = {
//     Set1: {Q, A1, A2, A3, A4},
//     Set2: {Q, A1, A2, A3, A4},
//     Set3: {Q, A1, A2, A3, A4},
//     Set4: {Q, A1, A2, A3, A4},
//     Set5: {Q, A1, A2, A3, A4},
//     Set6: {Q, A1, A2, A3, A4},
//     Set7: {Q, A1, A2, A3, A4},
//     Set8: {Q, A1, A2, A3, A4},
//     Set9: {Q, A1, A2, A3, A4},
//     Set10: {Q, A1, A2, A3, A4},
// };

// Link values to HTML elements:



// For Loop - append questionSet with class and button attribute:


