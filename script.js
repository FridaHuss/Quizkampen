
const questionElement = document.querySelector('#question-box')
const answer1Element = document.querySelector('#answer1')
const answer2Element = document.querySelector('#answer2')
const answer3Element = document.querySelector('#answer3')
const answer4Element = document.querySelector('#answer4')

const question1 = {
    question: 'Vad är Sveriges huvudstad?',
    answer1: 'Köpenhamn',
    answer2: 'Oslo',
    answer3: 'Helsingfors',
    answer4: 'Stockholm',
    correctAnswer: 'Stockholm'
}

const question2 = {
    question: 'När är Sveriges nationaldag?',
    answer1: '6 juni',
    answer2: '4 juli',
    answer3: '24 december',
    answer4: '1 januari',
    correctAnswer: '6 juni'
}

const question3 = {
    answer1: 'Hur långt är Sverige?',
    answer2: '157 mil',
    answer3: '200 mil',
    answer4: '3 m',
    correctAnswer: '157 mil'
}

const question4 = {
    question: 'När är det julafton?',
    answer1: '22 december',
    answer2: '23 december',
    answer3: '25 december',
    answer4: '26 december',
    correctAnswer: '24 december'
}

const question5 = {
    question: 'Hur många dagar har ett år?',
    answer1: '500',
    answer2: '304',
    answer3: '365',
    answer4: '7000',
    correctAnswer: '365'
}

questionElement.textContent= question1.question;

answer1Element.textContent=question1.answer1;
answer2Element.textContent=question1.answer2;
answer3Element.textContent=question1.answer3;
answer4Element.textContent=question1.answer4;

