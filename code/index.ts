const chat = document.getElementById("chat") as HTMLDivElement
const inputWrapper = document.getElementById("input-wrapper") as HTMLDivElement

interface AnswerOption {
  answer: string
  nextQuestion: number | string
}

interface Question {
  id: number
  question: string
  answerOptions: AnswerOption[]
}

//Variables:
let currentQuestion: number = 0
const questions: Question[] = [
  {
    id: 0,
    question: "Hej! Vill du ta reda på vilken högtid vi firar?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 1 },
      { answer: "Nej", nextQuestion: "Tråkigt. Då har du ingen användning av mig." },
    ],
  },
  {
    id: 1,
    question: "Äter man djur från vatten?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 2 },
      { answer: "Nej", nextQuestion: 6 },
    ],
  },
  {
    id: 2,
    question: "Äter man fisk?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 3 },
      { answer: "Nej", nextQuestion: "Kräftpremiär" },
    ],
  },
  {
    id: 3,
    question: "Luktar fisken illa?",
    answerOptions: [
      { answer: "Ja", nextQuestion: "Surströmmingspremiär" },
      { answer: "Nej", nextQuestion: 4 },
    ],
  },
  {
    id: 4,
    question: "Dricker man must?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 5 },
      { answer: "Nej", nextQuestion: "Midsommar" },
    ],
  },
  {
    id: 5,
    question: "Tittar man på TV kl. 15.00?",
    answerOptions: [
      { answer: "Ja", nextQuestion: "Jul" },
      { answer: "Nej", nextQuestion: "Påsk" },
    ],
  },
  {
    id: 6,
    question: "Äter man fågel?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 7 },
      { answer: "Nej", nextQuestion: 8 },
    ],
  },
  {
    id: 7,
    question: "Är det verkligen en svensk högtid?",
    answerOptions: [
      { answer: "Ja, om Skåne är svenskt", nextQuestion: "Mårten Gås" },
      { answer: "Tveksamt", nextQuestion: "Thanksgiving" },
    ],
  },
  {
    id: 8,
    question: "Finns det någon särskild fika?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 9 },
      { answer: "Nej", nextQuestion: 13 },
    ],
  },
  {
    id: 9,
    question: "Vispgrädde?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 10 },
      { answer: "Nej", nextQuestion: 12 },
    ],
  },
  {
    id: 10,
    question: "Äts varma med sylt till?",
    answerOptions: [
      { answer: "Ja", nextQuestion: "Våffeldagen" },
      { answer: "Nej", nextQuestion: 11 },
    ],
  },
  {
    id: 11,
    question: "Tårta eller bulle?",
    answerOptions: [
      { answer: "Tårta", nextQuestion: "Fössta tossdan i mass" },
      { answer: "Bulle", nextQuestion: "Fettisdagen" },
    ],
  },
  {
    id: 12,
    question: "Russin i bullen?",
    answerOptions: [
      { answer: "Ja", nextQuestion: "Lucia" },
      { answer: "Nej", nextQuestion: "Kanelbullens dag" },
    ],
  },
  {
    id: 13,
    question: "Är högtiden importerad från USA av köpmän?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 14 },
      { answer: "Nej", nextQuestion: 15 },
    ],
  },
  {
    id: 14,
    question: "Vad köper man?",
    answerOptions: [
      { answer: "Rosor", nextQuestion: "Alla hjärtans dag" },
      { answer: "Pumpor", nextQuestion: "Halloween" },
      { answer: "Allt möjligt", nextQuestion: "Black Friday" },
    ],
  },
  {
    id: 15,
    question: "Är man bakfull?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 16 },
      { answer: "Nej", nextQuestion: 17 },
    ],
  },
  {
    id: 16,
    question: "Pizza?",
    answerOptions: [
      { answer: "Ja", nextQuestion: "Nyårsdagen" },
      { answer: "Nej", nextQuestion: "Första maj" },
    ],
  },
  {
    id: 17,
    question: "Är det något med Jesus?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 18 },
      { answer: "Nej", nextQuestion: 20 },
    ],
  },
  {
    id: 18,
    question: "Jesus födelse?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 19 },
      { answer: "Nej", nextQuestion: "Kristi Himmelfärd" },
    ],
  },
  {
    id: 19,
    question: "Ska vi tända ljus?",
    answerOptions: [
      { answer: "Ja", nextQuestion: "Advent" },
      { answer: "Nej", nextQuestion: "Trettondagen" },
    ],
  },
  {
    id: 20,
    question: "Är det något som brinner?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 21 },
      { answer: "Nej", nextQuestion: "Nationaldagen" },
    ],
  },
  {
    id: 21,
    question: "Vad brinner?",
    answerOptions: [
      { answer: "Ljus på gravar", nextQuestion: "Alla helgons dag" },
      { answer: "Fyrverkerier", nextQuestion: "Nyårsafton" },
      { answer: "Brasor", nextQuestion: "Valborgsmässoafton"}
    ],
  },
]

// Adds a chat bubble in the correct place based on who the sender is
const showMessage = (message: string, sender: string): void => {
  //Checks if the sender is the user and adds posted message from the user
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    //Checks if the sender is the bot and adds posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  //Makes the chat scroll to the last message when there are many
  chat.scrollTop = chat.scrollHeight
}

// Clears the chat window and adds button to start over
const clearWindow = (): void => {
  chat.innerHTML = ""
}

// Adds buttons for answering
const addButtons = (buttons: AnswerOption[]): void => {
  inputWrapper.innerHTML = ""
  buttons.forEach((button) => {
    inputWrapper.innerHTML += `
      <button id="${button.answer}" class="chat-btn" type="submit">${button.answer}</button>
    `
  })

  const buttonOne = document.getElementById(buttons[0].answer) as HTMLButtonElement
  const buttonTwo = document.getElementById(buttons[1].answer) as HTMLButtonElement
  if (buttonOne) {
    buttonOne.addEventListener("click", () => handleAnswer(0))
  }
  if (buttonTwo) {
    buttonTwo.addEventListener("click", () => handleAnswer(1))
  }
  if (buttons.length > 2) {
    const buttonThree = document.getElementById(buttons[2].answer) as HTMLButtonElement
    if (buttonThree) {
      buttonThree.addEventListener("click", () => handleAnswer(2))
    }
  }
}

// Handle the answer
const handleAnswer = (answerIndex: number): void => {
  const answerToHandle = questions[currentQuestion].answerOptions[answerIndex]
  showMessage(answerToHandle.answer, "user")
  if (typeof answerToHandle.nextQuestion === "number") {
    currentQuestion = answerToHandle.nextQuestion
    setTimeout(() => askQuestion(), 1000)
  } else {
    showMessage(answerToHandle.nextQuestion, "bot")
    inputWrapper.innerHTML = `
      <button id="start" class="chat-btn" type="submit">Börja om</button>
    `
    const startButton = document.getElementById("start") as HTMLButtonElement
    if (startButton) {
      startButton.addEventListener("click", () => {
        clearWindow()
        currentQuestion = 0
        askQuestion()
      })
    }
  }
}

// Bot asks current question
const askQuestion = () => {
  showMessage(questions[currentQuestion].question, "bot")
  addButtons(questions[currentQuestion].answerOptions)
}

// Calls for the greeting function one second after the website is loaded.
setTimeout(askQuestion, 1000)
