namespace KlareWorte {

    export function loadQuestion(_catalogue: Question[], _index: number): void {
        let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
        let button: HTMLDivElement = document.createElement("div");
        wrapper.innerHTML = "";
        if (_index < _catalogue.length) {
            let question: HTMLDivElement = document.createElement("div");
            let questWrap: HTMLDivElement = document.createElement("div");

            question.id = "question";
            questWrap.id = "questWrap";

            questWrap.innerHTML = "";

            answers = [];
            selectedAnswers = 0;
            question.innerText = _catalogue[_index].question;

            for (let answer of _catalogue[_index].answers) {
                answers.push(answer);
            }

            while (answers.length > 0) {
                console.log("midde");
                if (answers.length > 1) {
                    let x: number = Math.floor(Math.random() * answers.length);
                    let displayQuestion: HTMLDivElement = document.createElement("div");
                    let text: HTMLParagraphElement = document.createElement("p");
                    let response: HTMLParagraphElement = document.createElement("p");

                    displayQuestion.classList.add("selectable", `${answers[x].value}`);
                    displayQuestion.addEventListener("click", selectAnswer);

                    text.innerText = answers[x].answer;
                    response.innerText = answers[x].response;
                    text.classList.add("answer");
                    response.classList.add("response");
                    displayQuestion.append(text, response);

                    questWrap.append(displayQuestion);
                    answers.splice(x, 1);

                } else if (answers.length == 1) {
                    let displayQuestion: HTMLDivElement = document.createElement("div");
                    let text: HTMLParagraphElement = document.createElement("p");
                    let response: HTMLParagraphElement = document.createElement("p");

                    displayQuestion.classList.add("selectable", `${answers[0].value}`);
                    displayQuestion.addEventListener("click", selectAnswer);

                    text.innerText = answers[0].answer;
                    response.innerText = answers[0].response;
                    text.classList.add("answer");
                    response.classList.add("response");
                    displayQuestion.append(text, response);

                    questWrap.append(displayQuestion);
                    answers.splice(0, 1);
                }
            }
            button.classList.add("button");
            button.id = "submit";
            button.innerText = "OK";
            button.addEventListener("click", submitAnswers);

            wrapper.append(question, questWrap, button);

        } else {
            wrapper.innerText = "Das war das Quiz! Schau dir gerne wieder unsere Videos an!"
            activeQuestion = 0;
        }
    }

    export function selectAnswer(): void {
        this.classList.replace("selectable", "selected");
        this.removeEventListener("click", selectAnswer);
        this.addEventListener("click", deselectAnswer)
    }

    function deselectAnswer(): void {
        this.classList.replace("selected", "selectable");
        this.removeEventListener("click", deselectAnswer);
        this.addEventListener("click", selectAnswer)
    }

    export function submitAnswers(): void {
        let answered: HTMLCollection | null = document.getElementsByClassName("selected");
        let unanswered: HTMLCollection | null = document.getElementsByClassName("selectable");
        let button = document.getElementById("submit");

        if (answered.length == 0) {
            window.alert("Auswählen nicht vergessen! ;)");
        } else {
            for (let answer of answered) {
                let response = answer.getElementsByClassName("response")[0];
                if (answer.classList.contains("true")) {
                    console.log("Winner Winner")
                    answer.setAttribute("style", "border-color: green;");
                } else {
                    console.log("Chicken Dinner")
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
            button.innerText = "WEITER"
        }
    }

    export function nextQuestion(): void {
        let button = document.getElementById("submit");
        activeQuestion++;
        loadQuestion(quizQuestion, activeQuestion)
        button.removeEventListener("click", nextQuestion);
        button.addEventListener("click", submitAnswers);
        button.innerText = "OK"
    }
}

