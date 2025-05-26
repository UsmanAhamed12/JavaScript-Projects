const questions = [{
        question: "What is the capital of France?",
        answers: [{
                text: "Berlin",
                correct: false
            },
            {
                text: "Madrid",
                correct: false
            },
            {
                text: "Paris",
                correct: true
            },
            {
                text: "Rome",
                correct: false
            }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [{
                text: "Earth",
                correct: false
            },
            {
                text: "Jupiter",
                correct: true
            },
            {
                text: "Mars",
                correct: false
            },
            {
                text: "Saturn",
                correct: false
            }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [{
                text: "Charles Dickens",
                correct: false
            },
            {
                text: "William Shakespeare",
                correct: true
            },
            {
                text: "Mark Twain",
                correct: false
            },
            {
                text: "Jane Austen",
                correct: false
            }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [{
                text: "Au",
                correct: true
            },
            {
                text: "Ag",
                correct: false
            },
            {
                text: "Pb",
                correct: false
            },
            {
                text: "Fe",
                correct: false
            }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [{
                text: "Elephant",
                correct: false
            },
            {
                text: "Blue Whale",
                correct: true
            },
            {
                text: "Giraffe",
                correct: false
            },
            {
                text: "Great White Shark",
                correct: false
            }
        ]
    }
]

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next');


let currentquestionindex = 0;
let currentscore = 0;

function startrQuiz() {
    currentquestionindex = 0;
    currentscore = 0;
    nextButton.innerHTML = 'Next';
    showquestion();
}

function showquestion() {
    resetstate();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionElement.innerHTML = questionno + '. ' + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerButtonsElement.addEventListener('click', selectanswer);

    });
}

function resetstate() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


function selectanswer(e) {
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";

    if (iscorrect) {
        selectedbtn.classList.add('correct');
        currentscore++;
    } else {
        selectedbtn.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;

    });
    nextButton.style.display = 'block';

}

function showscore() {
    resetstate();
    questionElement.innerHTML = `You scored ${currentscore} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handlenextbutton() {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        showquestion();
    } else {
        showscore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentquestionindex < questions.length) {
        handlenextbutton();
    } else {
        startrQuiz();
    }
})


startrQuiz();