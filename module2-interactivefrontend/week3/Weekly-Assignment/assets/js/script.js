const quiz = [
    {
        question: "Which is not a valid Javascript datatype?",
        choices: ["String", "Integer", "Boolean", "Symbol"],
        answer: 'Integer'
    }, {
        question: "Which of the following is not a valid way to assign a variable in Javascript?",
        choices: ['var placeholder = value', 'let thisThing = somethingElse', 'var 1twoThree = four5', 'foo = bar',],
        answer: 'var 1twoThree = four5'
    }, {
        question: "What was the Javascript language initially called?",
        choices: ['Typescript', 'Java++', 'ECMAScript', 'Java On Rails'],
        answer: 'ECMAScript'
    }, {
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
    },
];

document.querySelector(".question").innerHTML = quiz[0].question;
document.querySelector("#option1-label").innerHTML = quiz[0].choices[0];
document.querySelector("#option2-label").innerHTML = quiz[0].choices[1];
document.querySelector("#option3-label").innerHTML = quiz[0].choices[2];
document.querySelector("#option4-label").innerHTML = quiz[0].choices[3];

function getPromiseFromEvent(item, event) {
    return new Promise((resolve) => {
        const listener = () => {
            item.removeEventListener(event, listener);
            resolve();
        }
        item.addEventListener(event, listener);
    });
}

async function waitForButtonClick() {
    for (i = 0; i < quiz.length; i++) {
        await getPromiseFromEvent(button, "click");

        document.querySelector(".submit-answer").addEventListener("click", function (quiz, i) {
            if (document.getElementById('option1').checked) {
                document.querySelector(".response").innerHTML = quiz[i].choices[0];
                console.log(document.querySelector(".response").innerHTML);
            } else if (document.getElementById('option2').checked) {
                document.querySelector(".response").innerHTML = quiz[i].choices[1];
                console.log(document.querySelector(".response").innerHTML);
            } else if (document.getElementById('option3').checked) {
                document.querySelector(".response").innerHTML = quiz[i].choices[2];
                console.log(document.querySelector(".response").innerHTML);
            } else if (document.getElementById('option4').checked) {
                document.querySelector(".response").innerHTML = quiz[i].choices[3];
                console.log(document.querySelector(".response").innerHTML);
            } else {
                throw new Error('An option must be selected before pressing the answer button');
            }

            if (document.querySelector(".response").innerHTML == quiz[i].answer) {
                alert("correct");
            } else {
                alert("wrong");
            }

            document.querySelector(".question").innerHTML = quiz[0].question;
            document.querySelector("#option1-label").innerHTML = quiz[0].choices[0];
            document.querySelector("#option2-label").innerHTML = quiz[0].choices[1];
            document.querySelector("#option3-label").innerHTML = quiz[0].choices[2];
            document.querySelector("#option4-label").innerHTML = quiz[0].choices[3];

        });
    }
}

waitForButtonClick();
