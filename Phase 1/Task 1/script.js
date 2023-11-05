const quizData = [
    {
      question: "Which one is the first search engine in internet?",
      a: "Google",
      b: "Archie",
      c: "Altavista",
      d: "WAIS",
      correct: "b",
    },
    {
      question: "BIOS is used?",
      a: "By operating system",
      b: "By compiler",
      c: "By interpreter",
      d: "By application software",
      correct: "a",
    },
    {
      question: "What kind of language can computer understand??",
      a: "Normal language",
      b: "Computer language",
      c: "Assembly language",
      d: "High-level language",
      correct: "c",
    },
    {
      question: "What is the speed of computer measured in?",
      a: "Nanoseconds",
      b: "Kilo-seconds",
      c: "Gigahertz",
      d: "Megabytes",
      correct: "c",
    },
    {
      question: "Which of the following languages computer understand?",
      a: "JAVA language",
      b: "C language",
      c: "Binary Language",
      d: "Object language",
      correct: "c",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>Answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          ` // location.reload() won't work in CodePen for security reasons;
      }
    }
  });
