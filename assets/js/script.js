//Below is the variable of my timed coding quiz challenge questions
const myQuestions = [
    {
        question: 'What are the six primitive data types in JavaScript?',
        choices: ['string, number, boolean, bigInt, symbol, undefined', 
        'string, num, falsy, bigInt, symbol, undefined',
        'sentence, int, truthy, bigInt, symbol, undefined',
        'sentence, float, data, bigInt, symbol, undefined'],
        correctAnswer: 0,
    },
    {
        question: 'What are the two types of scope JavaScript uses?',
        choices: ['Global and Local','Surrounding and Inner','Inside and Outside','Abroad and Local'],
        correctAnswer: 0,
    },
    {
        question: "From the given array which index is the letter 'c' on? ['a', 'b', 'c', 'd']",
        choices: ['0','1','2','3'],
        correctAnswer: 2,
    },
    {
        question: 'What operator is used to assign a value to a declared variable?',
        choices: ['Double-equal (==)','Question mark (?)','Colon (:)','Equal sign (=)'],
        correctAnswer: 3,
    },
    {
        question: 'Inside the HTML document, where do you place your JavaScript code?',
        choices: ['In the <footer> element','Inside the <script> element','Inside the <link> element','Inside the <head> element'],
        correctAnswer: 1,
    },
    {
        question: 'What type of data is stored in quotes?',
        choices: ['Array','Boolean','String','Number'],
        correctAnswer: 2,
    },
    {
        question: 'What does DOM stand for?',
        choices: ['Document Obeject Model','Document Object Module','Document Overview Monitor','Document Organizing Management'],
        correctAnswer: 0,
    },
    {
        question: 'What does JSON stand for?',
        choices: ['JavaScript Object Navigation','JavaScript Object Notation','JavaScript Oriented Navigation','JavaScript Organized Notation'],
        correctAnswer: 1,
    },
    {
        question: 'What is an object method?',
        choices: ['A function associated with an object','An array saved inside of an object','Keys in an object that have a number assigned to it','A function that takes an object for an argument'],
        correctAnswer: 2,
    },
    {
        question: 'How do we declare a conditional statement in JavaScript?',
        choices: ['if...else','for loop','while loop','difference...between'],
        correctAnswer: 0,
    }
  ]

  //create a navigation bar that has a timer and a view highscores button
  const navBar = document.createElement('nav');
  navBar.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');

  const navContainer = document.createElement('div');
  navContainer.setAttribute('class', 'container-fluid');

  const navTimer = document.createElement('div');
  navTimer.setAttribute('class', 'timer');
  navTimer.textContent = 'Time: 180';

  const navHighScores = document.createElement('button');
  navHighScores.setAttribute('class', 'btn btn-outline-success');
  navHighScores.setAttribute('type', 'button');
  navHighScores.textContent = 'View Highscores';

  document.body.appendChild(navBar);
  navBar.appendChild(navContainer);
  navContainer.appendChild(navHighScores);
  navContainer.appendChild(navTimer);

  //create a mainTag that will hold the questions and answers for the quiz
  const mainTag = document.createElement('main');
  mainTag.setAttribute('class', 'container');

  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('class', 'container-fluid');

  const mainRow = document.createElement('div');
  mainRow.setAttribute('class', 'row');

  const mainCol = document.createElement('div');
  mainCol.setAttribute('class', 'col');

  const mainH1 = document.createElement('h1');
  mainH1.setAttribute('class', 'display-4');
  mainH1.textContent = 'Coding Quiz Challenge';

  const mainHr = document.createElement('hr');
  mainHr.setAttribute('class', 'my-4');

  const mainP = document.createElement('p');
  mainP.setAttribute('class', 'lead');
  mainP.textContent = 'This quiz has 10 questions. You have 3 minutes to finish it. If you answer a question incorrectly, 20 seconds will be subtracted from the clock.';
  const mainStartBtn = document.createElement('button');
  mainStartBtn.setAttribute('class', 'btn btn-primary btn-lg');
  mainStartBtn.setAttribute('type', 'button');
  mainStartBtn.textContent = 'Start Quiz';

  document.body.appendChild(mainTag);
  mainTag.appendChild(mainContainer);
  mainContainer.appendChild(mainRow);
  mainRow.appendChild(mainCol);
  mainCol.appendChild(mainH1);
  mainCol.appendChild(mainHr);
  mainCol.appendChild(mainP);
  mainCol.appendChild(mainStartBtn);

//event listener for the start button
mainStartBtn.addEventListener('click', function() {
    startTimer();
    showQuestions();
} ); 

//funtion to start the timer
function startTimer() {
    let timeLeft = 180;
    const timerInterval = setInterval(function() {
        timeLeft--;
        navTimer.textContent = 'Time: ' + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

//function to replace the main tag with the first question and answers
function showQuestions() {
  mainH1.textContent = myQuestions[0].question;
  mainP.textContent = '';
  
  const mainBtn1 = document.createElement('button');
  mainBtn1.setAttribute('class', 'btn btn-primary btn-lg');
  mainBtn1.setAttribute('type', 'button');
  mainBtn1.textContent = myQuestions[0].choices[0];
  mainCol.appendChild(mainBtn1); 

  const mainBtn2 = document.createElement('button');
  mainBtn2.setAttribute('class', 'btn btn-primary btn-lg');
  mainBtn2.setAttribute('type', 'button');
  mainBtn2.textContent = myQuestions[0].choices[1];
  mainCol.appendChild(mainBtn2);

  const mainBtn3 = document.createElement('button');
  mainBtn3.setAttribute('class', 'btn btn-primary btn-lg');
  mainBtn3.setAttribute('type', 'button');
  mainBtn3.textContent = myQuestions[0].choices[2];
  mainCol.appendChild(mainBtn3);

  const mainBtn4 = document.createElement('button');
  mainBtn4.setAttribute('class', 'btn btn-primary btn-lg');
  mainBtn4.setAttribute('type', 'button');
  mainBtn4.textContent = myQuestions[0].choices[3];
  mainCol.appendChild(mainBtn4);

  mainStartBtn.remove();
}