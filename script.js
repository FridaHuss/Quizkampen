//hämtat elemeten för att kunna manipulera elementen
const questionElement = document.querySelector('#question-box')
const answer1Element = document.querySelector('#answer1')
const answer2Element = document.querySelector('#answer2')
const answer3Element = document.querySelector('#answer3')
const answer4Element = document.querySelector('#answer4')

//håller koll på vilken fråga som ska visas
let currentQuestionIndex = 0;

//array av objekt som håller fråga, svarsalternativ och rätt svar
const questions = [
    {
        question: 'Vad är Sveriges huvudstad?',
        answers: ['Köpenhamn', 'Oslo','Helsingfors','Stockholm'],
        correctAnswer: 'Stockholm'
    },
    {
        question: 'När är Sveriges nationaldag?',
        answers: ['6 juni','4 juli','24 december','1 januari'],
        correctAnswer: '6 juni'
    },
    {
        question: 'Hur långt är Sverige?',
        answers: ['157 mil','200 mil','3 m','1005679877 cm'],
        correctAnswer: '157 mil'
    },
    {
        question: 'När är det julafton?',
        answers: ['22 december','23 december','24 december','25 december'],
        correctAnswer: '24 december'
    },
    {
        question: 'Hur många dagar har ett år?',
        answers: ['500','304','365','7000'], 
        correctAnswer: '365'
    }
];

//visar nuvarande fråga och svarsalternativ
function showCurrentQuestion() {

    resetButtonColors();

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    answer1Element.textContent = currentQuestion.answers[0];
    answer2Element.textContent = currentQuestion.answers[1];
    answer3Element.textContent = currentQuestion.answers[2];
    answer4Element.textContent = currentQuestion.answers[3];
}

//Nollstället bakgrundsfärg
function resetButtonColors() {
    answer1Element.style.backgroundColor = "";
    answer2Element.style.backgroundColor = "";
    answer3Element.style.backgroundColor = "";
    answer4Element.style.backgroundColor = "";
}

//Logik som visar om svaret är rätt eller fel
//Visar nästa fråga om det finns fler
//Annars visar hur många poäng spelaren fått
function checkAnswer(button) {
    let circleElement = document.querySelector('#circle' + currentQuestionIndex);
    let selectedAnswer = button.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        button.style.backgroundColor = 'green';
        circleElement.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
        circleElement.style.backgroundColor = 'red';
    }

    currentQuestionIndex++;

    setTimeout(function () {
        resetButtonColors();
        if (currentQuestionIndex < questions.length) {
            showCurrentQuestion();
        } else {
            let allCirclesElements = document.querySelectorAll('.circle');
            let correctAnswers = 0;

            allCirclesElements.forEach(circle => {
                if (circle.style.backgroundColor === 'green') {
                    correctAnswers++;
                }
            });

            alert('Du fick ' + correctAnswers + ' poäng');
        }
    }, 1000);
}

//Skapar eventlyssnare på varje svarsknapp på eventet "click"
answer1Element.addEventListener('click', function() {
    checkAnswer(answer1Element);
});

answer2Element.addEventListener('click', function() {
    checkAnswer(answer2Element);
});

answer3Element.addEventListener('click', function() {
    checkAnswer(answer3Element);
});

answer4Element.addEventListener('click', function() {
    checkAnswer(answer4Element);
});

//Gör så att frågan laddas upp från början
showCurrentQuestion();

