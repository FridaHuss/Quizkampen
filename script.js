


const questionElement = document.querySelector('#question-box')
const answer1Element = document.querySelector('#answer1')
const answer2Element = document.querySelector('#answer2')
const answer3Element = document.querySelector('#answer3')
const answer4Element = document.querySelector('#answer4')



//har gjort om till array
const questions = [
{
    question: 'Vad är Sveriges huvudstad?',
    answers: ['Köpenhamn', 'Oslo','Helsingfors','Stockholm',],
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
    answers: ['22 december','23 december','25 december','26 december'],
    correctAnswer: '24 december'
},

{
    question: 'Hur många dagar har ett år?',
    answers: ['500','304','365','7000'], 
    correctAnswer: '365'
}
];

// har lagt till det här för arrayen
let currentQuestionIndex = 0;

function showCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answer1Element.textContent = currentQuestion.answers[0];
    answer2Element.textContent = currentQuestion.answers[1];
    answer3Element.textContent = currentQuestion.answers[2];
    answer4Element.textContent = currentQuestion.answers[3];
}

// gör så att frågan laddas upp från början
    showCurrentQuestion();

    // questionElement.textContent= question1.question;

// answer1Element.textContent=question1.answer1;
// answer2Element.textContent=question1.answer2;
// answer3Element.textContent=question1.answer3;
// answer4Element.textContent=question1.answer4;

function resetButtonColors() {
    answer1Element.style.backgroundColor = "";
    answer2Element.style.backgroundColor = "";
    answer3Element.style.backgroundColor = "";
    answer4Element.style.backgroundColor = "";
}

//funktion yani metod för att ändra färg på knapparna

    function checkAnswer(button){

     var selectedAnswer = button.textContent;
     const currentQuestion = questions[currentQuestionIndex];
     if(selectedAnswer === currentQuestion.correctAnswer) {
        button.style.backgroundColor = "green";} 
        else{
        button.style.backgroundColor = "red";

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showCurrentQuestion();
            //la till den här för annars så försvann inte färgerna efter man tryckt på valfri knapp
            resetButtonColors();
        }

        // setTimeout(function() {

        //     resetButtonColors();
        //     currentQuestionIndex++;
        //     if(currentQuestionIndex < questions.length) {
        //         showCurrentQuestion();
        //     } else {
        //         alert("Quiz klart");
        //     }

        // },1000);

    }

}
    //kopplar funktionen checkAnswer() till varje knapp
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

