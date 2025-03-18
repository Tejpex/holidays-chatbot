const chat = document.getElementById("chat") as HTMLDivElement
const inputWrapper = document.getElementById("input-wrapper") as HTMLDivElement

interface Holiday {
  name: string
  image?: string
}

interface AnswerOption {
  answer: string
  nextQuestion: number | Holiday
}

interface Question {
  id: number
  question: string
  answerOptions: AnswerOption[]
}

//Variables:
let currentQuestion: number = 0
const holidays: Holiday[] = [
  {
    name: "Kräftpremiär",
    image: "krafta.png",
  },
  {
    name: "Surströmmingspremiär",
    image: "stromming.png",
  },
  {
    name: "Midsommar",
    image: "midsummer.png",
  },
  {
    name: "Jul",
    image: "christmas.png",
  },
  {
    name: "Påsk",
    image: "easter.png",
  },
  {
    name: "Mårten Gås",
    image: "goose.png",
  },
  {
    name: "Thanksgiving",
    image: "thanksgiving.png",
  },
  {
    name: "Våffeldagen",
    image: "waffle.png",
  },
  {
    name: "Fössta tossdan i mass",
    image: "cake.png",
  },
  {
    name: "Fettisdagen",
    image: "semla.png",
  },
  {
    name: "Lucia",
    image: "lucia.png",
  },
  {
    name: "Kanelbullens dag",
    image: "cinnamon.png",
  },
  {
    name: "Alla hjärtans dag",
    image: "valentine.png",
  },
  {
    name: "Halloween",
    image: "pumpkin.png",
  },
  {
    name: "Black Friday",
    image: "shopping.png",
  },
  {
    name: "Nyårsdagen",
    image: "pizza.png",
  },
  {
    name: "Första maj",
    image: "protest.png",
  },
  {
    name: "Kristi Himmelfärd",
    image: "angel.png",
  },
  {
    name: "Advent",
    image: "candle.png",
  },
  {
    name: "Trettondagen",
    image: "wise.png",
  },
  {
    name: "Nationaldagen",
    image: "sweden.png",
  },
  {
    name: "Alla helgons dag",
    image: "headstone.png",
  },
  {
    name: "Nyårsafton",
    image: "new-year.png",
  },
  {
    name: "Valborgsmässoafton",
    image: "fire.png",
  },
]

const questions: Question[] = [
  {
    id: 0,
    question: "Hej! Vill du ta reda på vilken högtid vi firar?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 1 },
      {
        answer: "Nej",
        nextQuestion: {
          name: "Tråkigt. Då har du ingen användning av mig.",
        },
      },
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
      {
        answer: "Nej",
        nextQuestion: holidays.find((day) => day.name === "Kräftpremiär") || 0,
      },
    ],
  },
  {
    id: 3,
    question: "Luktar fisken illa?",
    answerOptions: [
      {
        answer: "Ja",
        nextQuestion: holidays.find((day) => day.name === "Surströmmingspremiär") || 0
      },
      { answer: "Nej", nextQuestion: 4 },
    ],
  },
  {
    id: 4,
    question: "Dricker man must?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 5 },
      {
        answer: "Nej",
        nextQuestion: holidays.find((day) => day.name === "Midsommar") || 0
      },
    ],
  },
  {
    id: 5,
    question: "Tittar man på TV kl. 15.00?",
    answerOptions: [
      {
        answer: "Ja",
        nextQuestion: holidays.find((day) => day.name === "Jul") || 0
      },
      {
        answer: "Nej",
        nextQuestion: holidays.find((day) => day.name === "Påsk") || 0
      },
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
      {
        answer: "Ja, om Skåne är svenskt",
        nextQuestion: holidays.find((day) => day.name === "Mårten Gås") || 0
      },
      {
        answer: "Tveksamt",
        nextQuestion: holidays.find((day) => day.name === "Thanksgiving") || 0 
      },
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
      {
        answer: "Ja",
        nextQuestion: holidays.find((day) => day.name === "Våffeldagen") || 0
      },
      { answer: "Nej", nextQuestion: 11 },
    ],
  },
  {
    id: 11,
    question: "Tårta eller bulle?",
    answerOptions: [
      {
        answer: "Tårta",
        nextQuestion: holidays.find((day) => day.name === "Fössta tossdan i mass") || 0 
      },
      {
        answer: "Bulle",
        nextQuestion: holidays.find((day) => day.name === "Fettisdagen") || 0
      },
    ],
  },
  {
    id: 12,
    question: "Russin i bullen?",
    answerOptions: [
      {
        answer: "Ja",
        nextQuestion: holidays.find((day) => day.name === "Lucia") || 0
      },
      {
        answer: "Nej",
        nextQuestion: holidays.find((day) => day.name === "Kanelbullens dag") || 0
      },
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
      {
        answer: "Rosor",
        nextQuestion: holidays.find((day) => day.name === "Alla hjärtans dag") || 0
      },
      {
        answer: "Pumpor",
        nextQuestion: holidays.find((day) => day.name === "Halloween") || 0
      },
      {
        answer: "Allt möjligt",
        nextQuestion: holidays.find((day) => day.name === "Black Friday") || 0
      },
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
      {
        answer: "Ja",
        nextQuestion: holidays.find((day) => day.name === "Nyårsdagen") || 0
      },
      {
        answer: "Nej",
        nextQuestion: holidays.find((day) => day.name === "Första maj") || 0
      },
    ],
  },
  {
    id: 17,
    question: "Är det något med Jesus?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 22 },
      { answer: "Nej", nextQuestion: 23 },
    ],
  },
  {
    id: 18,
    question: "Jesus födelse?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 19 },
      {
        answer: "Nej",
        nextQuestion: holidays.find((day) => day.name === "Kristi Himmelfärd") || 0 
      },
    ],
  },
  {
    id: 19,
    question: "Ska vi tända ljus?",
    answerOptions: [
      {
        answer: "Ja",
        nextQuestion: holidays.find((day) => day.name === "Advent") || 0
      },
      {
        answer: "Nej",
        nextQuestion: holidays.find((day) => day.name === "Trettondagen") || 0
      },
    ],
  },
  {
    id: 20,
    question: "Är det något som brinner?",
    answerOptions: [
      { answer: "Ja", nextQuestion: 21 },
      {
        answer: "Nej",
        nextQuestion: holidays.find((day) => day.name === "Nationaldagen") || 0
      },
    ],
  },
  {
    id: 21,
    question: "Vad brinner?",
    answerOptions: [
      {
        answer: "Ljus på gravar",
        nextQuestion: holidays.find((day) => day.name === "Alla helgons dag") || 0
      },
      {
        answer: "Fyrverkerier",
        nextQuestion: holidays.find((day) => day.name === "Nyårsafton") || 0
      },
      {
        answer: "Brasor",
        nextQuestion: holidays.find((day) => day.name === "Valborgsmässoafton") || 0
      },
    ],
  },
  {
    id: 22,
    question: "Är du säker på att man inte äter fisk?",
    answerOptions: [
      { answer: "Jo, sill!", nextQuestion: 4 },
      { answer: "Nä, det gör vi inte", nextQuestion: 18 },
    ],
  },
  {
    id: 23,
    question: "Ivanhoe på TV?",
    answerOptions: [
      {
        answer: "Ja",
        nextQuestion: holidays.find((day) => day.name === "Nyårsdagen") || 0
      },
      { answer: "Nej", nextQuestion: 24 },
    ],
  },
  {
    id: 24,
    question: "Trafikomläggningar?",
    answerOptions: [
      {
        answer: "Ja",
        nextQuestion: holidays.find((day) => day.name === "Första maj") || 0
      },
      { answer: "Nej", nextQuestion: 20 },
    ],
  },
]

// Selects three random holiday-images and turns them into HTML
const threeRandomHolidayPictures = (): string => {
  const images: string[] = []
  let imageRow: string = "<div class='image-row'>"
  for (let i = 0; i < 3; i++) {
    const randomNumber: number = Math.floor(Math.random() * holidays.length)
    images.push(holidays[randomNumber].image || "robot.png")
  }
  images.forEach((pic) =>
    imageRow += `<img src="assets/holidays/${pic}" alt="Holiday icon"/>`
  )
  imageRow += "</div>"
  return imageRow
}

// Adds a chat bubble in the correct place based on who the sender is
const showMessage = (message: string, sender: string, addRandomImages = true): void => {
  //Checks if the sender is the user and adds posted message from the user
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/mulled-wine.png" alt="User icon" /> 
      </section>
    `
  //Checks if the sender is the bot and adds posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/robot.png" alt="Bot icon" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
    {addRandomImages && (
      chat.innerHTML += threeRandomHolidayPictures()
    )}
  }
  //Makes the chat scroll to the last message when there are many
  chat.scrollTop = chat.scrollHeight
}

// Clears the chat window
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
    showMessage(answerToHandle.nextQuestion.name, "bot", false)
    inputWrapper.innerHTML = `
      <button id="start" class="chat-btn" type="submit">Börja om</button>
    `
    if (answerToHandle.nextQuestion.image) {
      chat.innerHTML += `
        <img class="holiday-icon" src="assets/holidays/${answerToHandle.nextQuestion.image}" alt="Icon related to the holiday" />
      `
    }
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
