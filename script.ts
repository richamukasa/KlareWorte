interface Answers {
    answer: string,
    value: string,
    response: string,
    id: string
}

let firstAnswers: string[] = ["Tastsinn", "Sehen", "Hören", "Gleichgewichtssinsn"];
let firstValues: string[] = ["correct", "incorrect", "incorrect", "correct"];
let firstResponses: string[] = ["Sehr gut!", "Natürlich ist das Sehen wichtig, im Zusammenhang mit dem Körpergefühl hier aber falsch.", "Natürlich ist das Hören wichtig, im Zusammenhang mit dem Körpergefühl hier aber falsch.", "Richtig!"];
let selectedAnswers: number = 0;
let answers: Answers[] = [];
let responses: string[] = [];

function handleLoad(): void {
    console.log("baba haft");
    generateQuiz("Welche Sinne wirken sich im Zusammenhang mit dem Körpergefühl auf die Wahrnehmung eines Designs aus?", firstAnswers, firstValues, firstResponses);
}

window.addEventListener("load", handleLoad);

function generateQuiz(_question: string, _answers: string[], _values: string[], _response: string[]): void {
    console.log("start");
    let wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    let question: HTMLDivElement | null = document.querySelector("#question");
    let button: HTMLDivElement = document.createElement("div");

    answers = [];
    selectedAnswers = 0;
    question.innerText = _question;

    
    for (let i: number = 0; i < _answers.length; i++) {
        let answer: Answers = {
            value: _values[i], 
            answer: _answers[i],
            response: _response[i],
            id: `answer${i + 1}`
        };

        answers.push(answer);
    }

    while (answers.length > 0) {
        console.log("midde");
        if (answers.length > 1) {
            let x: number = Math.floor(Math.random() * answers.length);
            let displayQuestion: HTMLDivElement = document.createElement("div");
            displayQuestion.id = answers[x].id;
            displayQuestion.classList.add("selectable", answers[x].value);
            displayQuestion.innerText = answers[x].answer;
            displayQuestion.nodeValue = answers[x].response;
            displayQuestion.addEventListener("click", selectAnswer);

            wrapper.append(displayQuestion);
            answers.splice(x, 1);
            console.log(displayQuestion.nodeValue);

        } else if (answers.length == 1) {
            let displayQuestion: HTMLDivElement = document.createElement("div");
            displayQuestion.id = answers[0].id;
            displayQuestion.classList.add("selectable", answers[0].value);
            displayQuestion.innerText = answers[0].answer;
            displayQuestion.nodeValue = answers[0].response;
            displayQuestion.addEventListener("click", selectAnswer);

            wrapper.append(displayQuestion);
            answers.splice(0, 1);
        }
    }

    button.classList.add("button");
    button.innerText = "OK";
    button.addEventListener("click", submitAnswers);

    wrapper.append(button);

    console.log("ende");
}

function selectAnswer(): void {
    this.classList.replace("selectable", "selected");
    this.removeEventListener("click", selectAnswer);
    this.addEventListener("click", deselectAnswer)
}

function deselectAnswer(): void {
    this.classList.replace("selected", "selectable");
    this.removeEventListener("click", deselectAnswer);
    this.addEventListener("click", selectAnswer)
}

function submitAnswers(): void {
    let answers: HTMLCollection | null = document.getElementsByClassName("selected");
    if (answers.length == 0) {
        window.alert("Na hörma, jetzt wähl auch was aus!");
    } else {
        for (let i: number = 0; i < answers.length; i++) {
            answers[i].innerHTML = answers[i].nodeValue;
        }
    }
}

