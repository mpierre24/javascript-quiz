const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById(answer - buttons)


let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click')

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestion = question.sort()
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionsIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btm')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        answerButtonsElement.firstChild
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
}

const questions = [
    {
        question: 'What is the correct JavaScript syntax to print “HelloWorld” in the console?',

        answers: [
            { text: 'console.print(“HelloWorld', A: wrong },
            { text: 'console.log(“HelloWorld', B: correct }
        ]
    }
]
