var chat = document.getElementById("chat");
var inputWrapper = document.getElementById("input-wrapper");
//Variables:
var currentQuestion = 0;
var questions = [
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
            { answer: "Brasor", nextQuestion: "Valborgsmässoafton" }
        ],
    },
];
// Adds a chat bubble in the correct place based on who the sender is
var showMessage = function (message, sender) {
    //Checks if the sender is the user and adds posted message from the user
    if (sender === "user") {
        chat.innerHTML += "\n      <section class=\"user-msg\">\n        <div class=\"bubble user-bubble\">\n          <p>".concat(message, "</p>\n        </div>\n        <img src=\"assets/user.png\" alt=\"User\" />  \n      </section>\n    ");
        //Checks if the sender is the bot and adds posted message from the bot
    }
    else if (sender === "bot") {
        chat.innerHTML += "\n      <section class=\"bot-msg\">\n        <img src=\"assets/bot.png\" alt=\"Bot\" />\n        <div class=\"bubble bot-bubble\">\n          <p>".concat(message, "</p>\n        </div>\n      </section>\n    ");
    }
    //Makes the chat scroll to the last message when there are many
    chat.scrollTop = chat.scrollHeight;
};
// Clears the chat window and adds button to start over
var clearWindow = function () {
    chat.innerHTML = "";
};
// Adds buttons for answering
var addButtons = function (buttons) {
    inputWrapper.innerHTML = "";
    buttons.forEach(function (button) {
        inputWrapper.innerHTML += "\n      <button id=\"".concat(button.answer, "\" class=\"chat-btn\" type=\"submit\">").concat(button.answer, "</button>\n    ");
    });
    var buttonOne = document.getElementById(buttons[0].answer);
    var buttonTwo = document.getElementById(buttons[1].answer);
    if (buttonOne) {
        buttonOne.addEventListener("click", function () { return handleAnswer(0); });
    }
    if (buttonTwo) {
        buttonTwo.addEventListener("click", function () { return handleAnswer(1); });
    }
    if (buttons.length > 2) {
        var buttonThree = document.getElementById(buttons[2].answer);
        if (buttonThree) {
            buttonThree.addEventListener("click", function () { return handleAnswer(2); });
        }
    }
};
// Handle the answer
var handleAnswer = function (answerIndex) {
    var answerToHandle = questions[currentQuestion].answerOptions[answerIndex];
    showMessage(answerToHandle.answer, "user");
    if (typeof answerToHandle.nextQuestion === "number") {
        currentQuestion = answerToHandle.nextQuestion;
        setTimeout(function () { return askQuestion(); }, 1000);
    }
    else {
        showMessage(answerToHandle.nextQuestion, "bot");
        inputWrapper.innerHTML = "\n      <button id=\"start\" class=\"chat-btn\" type=\"submit\">B\u00F6rja om</button>\n    ";
        var startButton = document.getElementById("start");
        if (startButton) {
            startButton.addEventListener("click", function () {
                clearWindow();
                currentQuestion = 0;
                askQuestion();
            });
        }
    }
};
// Bot asks current question
var askQuestion = function () {
    showMessage(questions[currentQuestion].question, "bot");
    addButtons(questions[currentQuestion].answerOptions);
};
// Calls for the greeting function one second after the website is loaded.
setTimeout(askQuestion, 1000);
