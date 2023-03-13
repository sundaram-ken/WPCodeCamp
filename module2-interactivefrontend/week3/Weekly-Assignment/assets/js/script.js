const quiz = [
    {
        question: "Which is not a valid Javascript datatype?",
        choices: ["String", "Integer", "Boolean", "Symbol"],
        answer: 'Integer'
    },
    {
        question: "Which of the following is not a valid way to assign a variable in Javascript?",
        choices: ['var placeholder = value', 'let thisThing = somethingElse', 'var 1twoThree = four5', 'foo = bar',],
        answer: 'var 1twoThree = four5'
    },
    {
        question: "What is the proper name of the Javascript language?",
        choices: ['Typescript', 'Java+', 'ECMAScript', 'CoffeeScript'],
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
        choices: ['if first != second { doThis };', 'if [[ time == irrelavent ]]; then doThat;', 'if (blood > water) { doNot };', 'if (time = money) { do };',],
        answer: 'if (time = money) { doIt };'
    }, {
        question: "What is the correct syntax for a ternary statement in Javascript?",
        choices: ['c = a if a < b else b', 'foo = bar > qux ? fubar : barfu', 'tool = (self >= shadow ? 46 : 2);', 'return (time == space & spacetime | empty )'],
        answer: 'tool = (self >= shadow ? 46 : 2);'
    }, {
        question: "What does the following statement evaluate to:  Math.max(5,10)",
        choices: ['5', '10', '15', '50'],
        answer: '10'
    }, {
        question: "Which is not a valid way of defining an array in Javascript?",
        choices: ['myArray = ["one", "two", "three"]', 'myArray[] = ["dogs", "cats", "ferrets"]', 'myArray = new Array("apple", "orange", "grape")', 'myArray = []'],
        answer: 'myArray[] = ["dogs", "cats", "ferrets"]'
    }, {
        question: "Which of the following is not a valid Array prototype?",
        choices: ['every', 'indexOf', 'substr', 'reverse'],
        answer: 'substr'
    }, {
        question: "All Done here.  Where would you like to go next?",
        choices: ["Back to Home", "Restart Quiz"],
        answer: "Back to Home",
    }

];


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function getTime() {
    return document.getElementById('timer').textContent;
}


var cont = true
// generate the next question with answers to choose from
function nextQuestion() {
    if (cont) {
        // remove the start button if it exists
        if (document.contains(document.getElementById('start-quiz'))) {
            document.getElementById('start-quiz').remove();
        }

        // set variables for specific elements
        var quizdiv = document.getElementById('quiz');
        var question = document.getElementById('question');
        var choose = document.getElementById('choose');

        // get the question for this round and insert it before the choices div
        question.innerHTML = quiz[indexNum].question;
        //console.log(question)
        quizdiv.insertBefore(question, choose);


        // loop through each answer that is associated with the question and 
        // add a radio button with label and append it to the "choose" div
        for (var i = 0; i < quiz[indexNum].choices.length; i++) {
            num = i + 1
            // created the div that will hold each choice
            var choice = document.createElement('div')
            choice.className = 'choices';
            choice.id = 'choice' + num;
            //console.log(choice)

            // create the radio button
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.className = 'options';
            radio.id = 'option' + num;
            radio.name = 'option'
            radio.value = num;

            // create the label for the radio button 
            var label = document.createElement('label');
            label.id = 'option' + num + '-label'
            label.className = 'labels'
            label.htmlFor = 'option' + num;
            //label.innerHTML = quiz[indexNum].choices[i];
            var desc = document.createTextNode(quiz[indexNum].choices[i]);
            label.appendChild(desc);

            choose = document.getElementById('choose')
            choose.appendChild(choice)

            var newline = document.createElement('br');
            newline.id = i;
            choice.appendChild(radio);
            choice.appendChild(label);
            choice.appendChild(newline);

            // prevent the loop from continuing until we need it
            cont = false;
        }

        // add the answer submit button
        var answer = document.createElement("button");
        answer.type = 'button';
        answer.class = 'buttons'
        answer.id = 'submit-answer';
        answerTxt = document.createTextNode('Answer');
        answer.appendChild(answerTxt);
        quizdiv.appendChild(answer);


        
        // display the next question, but only if an answer was submitted
        //labels = document.getElementsByTagName('label');
        //for ( tag = 0; tag < labels.length; tag++ ) {

             answer.onclick = function () {
            //labels[tag].onclick = function () {
                // decide what to do with the submitted response
                options = quiz[indexNum].choices;
                selected = document.getElementsByName('option');
                for (r = 0; r < selected.length; r++) {
                    //console.log(selected[r])
                    if (selected[r].checked) {
                        var selected = selected[r]
                        var answerVal = selected.value
                        labelElement = selected.nextElementSibling
                        console.log(labelElement)
                    }
                }
                let answerIndex = options.indexOf(quiz[indexNum].answer)

                if (answerVal == answerIndex + 1) {
                    selected.classList.add('correct');
                } else {
                    selected.classList.add('wrong');
                    currentTime = getTime();
                    minsec = currentTime.split(':')
                    minutes = parseInt(minsec[0])
                    seconds = parseInt(minsec[1])
                    timeInSeconds = (minutes * 60) + seconds
                    penalty = timeInSeconds - 5;
                    document.getElementById('timer').remove()
                    var li = document.createElement("li");
                    li.className = "top"
                    li.id = "timer"
                    ul = document.getElementById("navigation");
                    ul.appendChild(li)
                    display = document.querySelector('#timer');
                    startTimer(penalty, display);
                }

                // allow the loop to continue
                cont = true;

                // increment to the next index in the quiz array
                indexNum += 1;

                // are there questions left to be asked?  
                if (indexNum < quiz.length) {


                    // clear out the current question
                    if (document.contains(document.getElementById("question"))) {
                        document.getElementById("question").value = "";
                    }

                    // clear out all answer radio inputs
                    if (document.contains(document.getElementById('option1'))) {
                        document.getElementById('option1').remove()
                    }
                    if (document.contains(document.getElementById('option1-label'))) {
                        document.getElementById('option1-label').remove()
                    }
                    if (document.contains(document.getElementById('option2'))) {
                        document.getElementById('option2').remove()
                    }
                    if (document.contains(document.getElementById('option2-label'))) {
                        document.getElementById('option2-label').remove()
                    }
                    if (document.contains(document.getElementById('option3'))) {
                        document.getElementById('option3').remove()
                    }
                    if (document.contains(document.getElementById('option3-label'))) {
                        document.getElementById('option3-label').remove()
                    }
                    if (document.contains(document.getElementById('option4'))) {
                        document.getElementById('option4').remove()
                    }
                    if (document.contains(document.getElementById('option4-label'))) {
                        document.getElementById('option4-label').remove()
                    }

                    // remove the br tags
                    for (j = 0; j <= 3; j++) {
                        if (document.contains(document.getElementById(j))) {
                            document.getElementById(j).remove();
                        }
                    }

                    for (j = 1; j <= 4; j++) {
                        if (document.contains(document.getElementById('choice' + j))) {
                            //console.log(document.getElementById('choice' + j))
                            document.getElementById('choice' + j).remove()
                        }
                    }

                    // remove the answer button
                    if (document.contains(document.getElementById('submit-answer'))) {
                        document.getElementById('submit-answer').remove();
                    }

                    nextQuestion();
                }
            }
        }

    }
//}

indexNum = 0;
// start the quiz
document.getElementById('start-quiz').onclick = function () {
    nextQuestion()
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
}