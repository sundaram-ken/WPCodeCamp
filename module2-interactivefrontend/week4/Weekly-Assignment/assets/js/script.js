// Defining the data table 
var quiz = [
    {
        question: "Which is not a valid Javascript datatype?",
        choices: ["String", "Integer", "Boolean", "Symbol"],
        answer: 'Integer'
    },
    {
        question: "Which of the following is not a valid way to assign a variable in Javascript?",
        choices: ['var 1twoThree = four5', 'var placeholder = value', 'let thisThing = somethingElse', 'foo = bar',],
        answer: 'var 1twoThree = four5'
    },
    {
        question: "What is the proper name of the Javascript language?",
        choices: ['Typescript', 'Java+', 'CoffeeScript', 'ECMAScript'],
        answer: 'ECMAScript'
    },
    {
        question: "Which of the following operators is used for assignment?",
        choices: ['==', '===', '=', '!='],
        answer: '=',
    }, {
        question: "Which of the following operators is not used for comparison?",
        choices: ['<', '<>', '==', '!=',],
        answer: '<>',
    }, {
        question: "What of the following is a valid Javascript IF statement?",
        choices: ['if first != second { doThis };', 'if [[ time == irrelavent ]]; then doThat;', 'if (time = money) { do };', 'if (blood > water) { doSomething };'],
        answer: 'if (blood > water) { doSomething };'
    }, {
        question: "What is the correct syntax for a ternary statement in Javascript?",
        choices: ['c = a if a < b else b', 'foo = bar > qux ? fubar : barfu', 'tool = (46 && 2 ? self > shadow);', 'return (time && space || spacetime)'],
        answer: 'foo = bar > qux ? fubar : barfu'
    }, {
        question: "What does the following statement evaluate to:  Math.max(5,10)",
        choices: ['5', '15', '10', '50'],
        answer: '10'
    }, {
        question: "Which is not a valid way of defining an array in Javascript?",
        choices: ['myArray = ["one", "two", "three"]', 'myArray[] = ["dogs", "cats", "ferrets"]', 'myArray = new Array("apple", "orange", "grape")', 'myArray = []'],
        answer: 'myArray[] = ["dogs", "cats", "ferrets"]'
    }, {
        question: "Which of the following is not a valid Array prototype?",
        choices: ['substr', 'every', 'indexOf', 'reverse'],
        answer: 'substr'
    }, {
        question: "All Done here.  Where would you like to go next?",
        choices: ["Back to Home", "Restart Quiz"],
        answer: "nothing",
    }

];

// Function to display a countdown timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.html(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Get the current countdown timer's remaining time
function getTime() {
    return $('#timer').html();
}

// Function to randomixe the order of an array
function shuffle(subject) {
    let currentIndex = subject.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [subject[currentIndex], subject[randomIndex]] = [
        subject[randomIndex], subject[currentIndex]];
    }
  return subject;
}


var cont = true
indexNum = 1;
// generate the next question with answers to choose from
function nextQuestion() {

    // Randomize the multiple choice answers in order to produce a different quiz each time
    quiz[indexNum].choices = shuffle(quiz[indexNum].choices);

    // used to prevent the loop from running when we don't want it to 
    if (cont) {
        // remove the start button if it exists
        if ($('#start-quiz').length) {
            $('#start-quiz').remove();
        }

        // set variables mapping to cartain elements
        var quizdiv = $('#quiz');
        var question = $('#question');
        var choose = $('#choose');

        // get the question for this round and insert it before the choices div
        question.html(quiz[indexNum].question);
        //quizdiv.insertBefore(question, choose);
        question.insertBefore(choose);

        // loop through each answer that is associated with the question and 
        // add a radio button with label and append it to the "choose" div
        for (var i = 0; i < quiz[indexNum].choices.length; i++) {
            num = i + 1
            // create the div that will hold each choice
            var choice = $('<div>');
            choice.addClass('choices');
            choice.attr('id', 'choice' + num);

            // create the radio button
            var radio = $('<input>');
            radio.attr('type','radio');
            radio.addClass('options');
            radio.attr('id', 'option' + num);
            radio.attr('name','option');
            radio.attr('value', num);

            // create the label for the radio button and populate it with a 
            // multiple choice answer
            var label = $('<label>');
            label.attr('id', 'option' + num + '-label');
            label.addClass('labels');
            label.attr('for', 'option' + num);
            label.text(quiz[indexNum].choices[i]);

            // put everything together
            var choose = $('#choose')
            choose.append(choice)
            var newline = $('<br>');
            newline.id = i;
            choice.append(radio);
            choice.append(label);
            choice.append(newline);

            // prevent the loop from continuing until we need it
            cont = false;
        }
        
        // display the next question if an answer was submitted
        $('input[name="option"]:radio').click(function() {

            // decide what to do with the submitted response
            let options = quiz[indexNum].choices;
            let selected = $('option');
            let answerVal = $('input[name="option"]:checked').val();
            let answerIndex = options.indexOf(quiz[indexNum].answer);
            let penalty = 0;
            console.log('indexNum', indexNum);
            console.log('answerVal', answerVal);
            console.log('answerIndex', answerIndex);
            console.log('choices[answerVal]', quiz[indexNum].choices[answerVal-1])

            
            if (quiz[indexNum].choices[answerVal-1] == 'Back to Home') {
                $(location).attr('href', 'index.html');
            } else if (quiz[indexNum].choices[answerVal-1] == 'Restart Quiz') {
                $(location).attr('href', 'quiz.html');
            } else if (answerVal == answerIndex + 1) {    
                selected.addClass('correct');      
            } else {
                selected.addClass('wrong');
                let currentTime = getTime();
                let minsec = currentTime.split(':');
                minutes = parseInt(minsec[0])
                seconds = parseInt(minsec[1])
                let timeInSeconds = (minutes * 60) + seconds
                if ((timeInSeconds - 5) <= 0) {
                    penalty = timeInSeconds - 5;
                } else {
                    penalty = 0;
                }
                $('#timer').remove();
                let li = $('<li>');
                li.addClass('top');
                li.attr('id', 'timer');
                ul = $('#navigation');
                ul.append(li)
                display = $('#timer');
                startTimer(penalty, display);
            }

            // allow the loop to continue
            cont = true;

            // increment to the next index in the quiz array
            indexNum += 1;

            // are there questions left to be asked?  
            if (indexNum < quiz.length) {

                // clear out the current question
                if ($("#question").length) {
                    $("question").val("");
                }

                // clear out all answer radio inputs
                if ($('#option1').length) {
                    $('#option1').remove();
                }
                if ($('#option1-label').length) {
                    $('#option1-label').remove();
                }
                if ($('#option2').length) {
                    $('#option2').remove();
                }
                if ($('option2-label').length) {
                    $('option2-label').remove();
                }
                if ($('#option3').length) {
                    $('#option3').remove();
                }
                if ($('#option3-label').length) {
                    $('#option3-label').remove();
                }
                if ($('#option4').length) {
                    $('#option4').remove();
                }
                if ($('option4-label').length) {
                    $('option4-label').remove();
                }

                // remove the br tags
                //for (j = 0; j <= 3; j++) {
                if ($('br').length) {
                    $('br').remove();
                }
                //}

                for (j = 1; j <= 4; j++) {
                    if ($('#choice' + j).length) {
                        $('#choice' + j).remove()
                    }
                }

                // remove the answer button
                if ($('#submit-answer').length) {
                    $('#submit-answer').remove();
                }
                console.log(indexNum);
                if (indexNum == 10) {
                    lskey = localStorage.getItem('tmp');
                    localStorage.removeItem('tmp');
                    localStorage.setItem(lskey, getTime());
                }

                nextQuestion();
            }
        });
    }
}


indexNum = 0;
$('.start-button').click(function () {
    if ($('#initials-txt').val() == '') {
        alert('You must enter your initials to start');
        $(location).attr('href', 'index.html');
    }
    if ($('#initials-txt').val() != ''){
        console.log($('#initials-txt'))
        console.log($('#initials-txt').val())
        console.log($('input[id="initials-txt"]').val());
        localStorage.setItem('tmp', $('#initials-txt').val());
        $('#initials-label').remove();
        $('#initials').remove();
    }
});


// start the quiz
$('#start-quiz').click(function () {
    nextQuestion();
    var fiveMinutes = 60 * 5, display = $('#timer');
    console.log('fiveMinutes',fiveMinutes);
    //console.log(display);
    startTimer(fiveMinutes, display);
});

if ($('.scores').length) {
    
    for (var k = 0; k < localStorage.length; k++) {
        hs = $("<div class='hs'>");
        hs.attr('id','hs'+k);
        key = localStorage.key(k);
        keys = $('<span class="keys">');
        keys.attr('id', 'keys'+k);
        $(hs).append(keys);
        keys.html(key);
        value = localStorage.getItem(key);
        values = $('<span class="values">');
        values.attr('id','values'+k);
        $(hs).append(values);
        values.html(value);
        $('.scores').append(hs);
    }
}

$('#clear-button').click(function () {
    if (localStorage.length) {
       //for (var l = 0; l < localStorage.length; l++) {
           localStorage.clear();
           location.reload();
       //} 
    }
});