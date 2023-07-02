var KlareWorte;
(function (KlareWorte) {
    function loadQuestion(_catalogue, _index) {
        let wrapper = document.querySelector("#wrapper");
        let button = document.createElement("div");
        wrapper.innerHTML = "";
        if (_index < _catalogue.length) {
            let question = document.createElement("div");
            let questWrap = document.createElement("div");
            question.id = "question";
            questWrap.id = "questWrap";
            questWrap.innerHTML = "";
            KlareWorte.answers = [];
            KlareWorte.selectedAnswers = 0;
            question.innerText = _catalogue[_index].question;
            for (let answer of _catalogue[_index].answers) {
                KlareWorte.answers.push(answer);
            }
            while (KlareWorte.answers.length > 0) {
                console.log("midde");
                if (KlareWorte.answers.length > 1) {
                    let x = Math.floor(Math.random() * KlareWorte.answers.length);
                    let displayQuestion = document.createElement("div");
                    let text = document.createElement("p");
                    let response = document.createElement("p");
                    displayQuestion.classList.add("selectable", `${KlareWorte.answers[x].value}`);
                    displayQuestion.addEventListener("click", selectAnswer);
                    text.innerText = KlareWorte.answers[x].answer;
                    response.innerText = KlareWorte.answers[x].response;
                    text.classList.add("answer");
                    response.classList.add("response");
                    displayQuestion.append(text, response);
                    questWrap.append(displayQuestion);
                    KlareWorte.answers.splice(x, 1);
                }
                else if (KlareWorte.answers.length == 1) {
                    let displayQuestion = document.createElement("div");
                    let text = document.createElement("p");
                    let response = document.createElement("p");
                    displayQuestion.classList.add("selectable", `${KlareWorte.answers[0].value}`);
                    displayQuestion.addEventListener("click", selectAnswer);
                    text.innerText = KlareWorte.answers[0].answer;
                    response.innerText = KlareWorte.answers[0].response;
                    text.classList.add("answer");
                    response.classList.add("response");
                    displayQuestion.append(text, response);
                    questWrap.append(displayQuestion);
                    KlareWorte.answers.splice(0, 1);
                }
            }
            button.classList.add("button");
            button.id = "submit";
            button.innerText = "OK";
            button.addEventListener("click", submitAnswers);
            wrapper.append(question, questWrap, button);
        }
        else {
            wrapper.innerText = "Das war das Quiz! Schau dir gerne wieder unsere Videos an!";
            KlareWorte.activeQuestion = 0;
        }
    }
    KlareWorte.loadQuestion = loadQuestion;
    function selectAnswer() {
        this.classList.replace("selectable", "selected");
        this.removeEventListener("click", selectAnswer);
        this.addEventListener("click", deselectAnswer);
    }
    KlareWorte.selectAnswer = selectAnswer;
    function deselectAnswer() {
        this.classList.replace("selected", "selectable");
        this.removeEventListener("click", deselectAnswer);
        this.addEventListener("click", selectAnswer);
    }
    function submitAnswers() {
        let answered = document.getElementsByClassName("selected");
        let unanswered = document.getElementsByClassName("selectable");
        let button = document.getElementById("submit");
        if (answered.length == 0) {
            window.alert("Auswählen nicht vergessen! ;)");
        }
        else {
            for (let answer of answered) {
                let response = answer.getElementsByClassName("response")[0];
                if (answer.classList.contains("true")) {
                    console.log("Winner Winner");
                    answer.setAttribute("style", "border-color: green;");
                }
                else {
                    console.log("Chicken Dinner");
                    answer.setAttribute("style", "border-color: red;");
                }
                answer.removeEventListener("click", deselectAnswer);
                response.setAttribute("style", "display: block;");
            }
            for (let answer of unanswered) {
                if (answer.classList.contains("true")) {
                    answer.setAttribute("style", "border-color: #ff0;");
                }
                answer.removeEventListener("click", selectAnswer);
            }
            button.removeEventListener("click", submitAnswers);
            button.addEventListener("click", nextQuestion);
            button.innerText = "WEITER";
        }
    }
    KlareWorte.submitAnswers = submitAnswers;
    function nextQuestion() {
        let button = document.getElementById("submit");
        KlareWorte.activeQuestion++;
        loadQuestion(KlareWorte.quizQuestion, KlareWorte.activeQuestion);
        button.removeEventListener("click", nextQuestion);
        button.addEventListener("click", submitAnswers);
        button.innerText = "OK";
    }
    KlareWorte.nextQuestion = nextQuestion;
})(KlareWorte || (KlareWorte = {}));
//# sourceMappingURL=script.js.map