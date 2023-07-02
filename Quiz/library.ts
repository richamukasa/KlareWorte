namespace KlareWorte {
    export let selectedAnswers: number = 0;
    export let activeQuestion: number = 0;
    export let answers: Answer[] = [];
    export let responses: string[] = [];
    export let quizQuestion: Question[] = [];

    let questions: string[] = ["Welche Dinge nehmen wir in der echten Welt wahr?", "Worauf muss man als Designer achten?", "Was spielt eine wichtige Rolle für unsere Wahrnehmung?", "Welche Gestalten gehören zu den grundlegenden Gestalten?", "Was unterscheidet Vorstellungsbildern von realen Dingen?", "Welches Gestaltgesetz beeinflusst unsere Sicht auf die Rubin‘sche Vase?", "Welche Antwort ist korrekt?", "Was trifft auf die Isomorphie zu?", "Die stimmige Atmosphäre ist…", "Welche Symmetrie ist eine gute Wahl für ein Design?", "Wie nennt man das Prinzip des Ausgleichs von Gegenständen?", "Was muss der Designer im Hinterkopf behalten, wenn er ein Design erstellen will?", "Welche Grundprinzipien machen manchmal einen Unterschied zwischen einem gelungenen Design und einem nicht gelungenen Design?", "Welche Gruppe muss der Designer immer beachten?", "Wofür wird der Stil „Camp“ genutzt?"];
    let allAnswers = [];
    let allQuestions: Question[] = [];

    let chapterOneFirstAnswers: Answer[] = [];
    let chapterOneSecondAnswers: Answer[] = [];
    let chapterTwoFirstAnswers: Answer[] = [];
    let chapterTwoSecondAnswers: Answer[] = [];
    let chapterTwoThirdAnswers: Answer[] = [];
    let chapterTwoFourthAnswers: Answer[] = [];
    let chapterTwoFifthAnswers: Answer[] = [];
    let chapterTwoSixthAnswers: Answer[] = [];
    let chapterTwoSeventhAnswers: Answer[] = [];
    let chapterFourFirstAnswers: Answer[] = [];
    let chapterFourSecondAnswers: Answer[] = [];
    let chapterFourThirdAnswers: Answer[] = [];
    let chapterFourFourthAnswers: Answer[] = [];
    let chapterFourFifthAnswers: Answer[] = [];
    let chapterFourSixthAnswers: Answer[] = [];


    let cOneQuesOneAns: string[] = ["Alle Dinge.", "Nur die Dinge, die für unser Überleben wichtig sind.", "All die Dinge, die in unsere „innere“ Welt hineinpassen."];
    let cOneQuesOneRes: string[] = ["Falsch! Wir nehmen nur die Dinge wahr, die für unser Überleben wichtig sind und alle anderen Dinge blenden wir aus.", "Korrekt!", "Falsch! Wir nehmen nur die Dinge wahr, die für unser Überleben wichtig sind, sonst würden wir in der Welt nicht überleben können."];
    let cOneQuesOneVal: boolean[] = [false, true, false];

    let cOneQuesTwoAns: string[] = ["Dass man den Betrachter motiviert, die Designs lange anzuschauen.", "Dass man verschiedene Reaktionen beim Betrachter auslösen muss.", "Das man den Betrachter mit all seinen Sinnen, Gedanken und Gefühlen ansprechen soll."];
    let cOneQuesTwoRes: string[] = ["Falsch! Der Designer sollte die Gedanken, Sinnen und Gefühlen des   Betrachters ansprechen, denn dann bringt er ihn dazu, seine Designs lange anzuschauen.", "Falsch! Erst durch das Ansprechen der Gedanken, Sinnen und Gefühlen des Betrachters kann der Designer verschiedene Reaktionen bei ihm auslösen.", "Korrekt!"];
    let cOneQuesTwoVal: boolean[] = [false, false, true];
    

    let cTwoQuesOneAns: string[] = ["Was wir wahrnehmen und erkennen, wird durch unsere Erfahrungen geprägt.", "Die Beziehung der Einzelteile zueinander", "Die Detektorzellen."];
    let cTwoQuesOneRes: string[] = ["Super, die Antwort ist richtig.", "Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Unsere Wahrnehmung wird durch unsere Erfahrungen und die Beziehung der Einzelteile zueinander geprägt."];
    let cTwoQuesOneVal: boolean[] = [true, true, false];

    let cTwoQuesTwoAns: string[] = ["Ein Quadrat.", "Ein Auto.", "Ein Hund.", "Ein Kreis.", "Eine Vase.", "Ein Trapez."];
    let cTwoQuesTwoRes: string[] = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Die Gestalt eines Autos gehört zu den komplexen Gestalten.", "Leider ist die Antwort falsch. Die Gestalt eines Hundes gehört zu den komplexen Gestalten.", "Super, die Antwort ist richtig.", "Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Die Gestalt einer Vase gehört zu den komplexen Gestalten.", "Super, die Antwort ist richtig."];
    let cTwoQuesTwoVal: boolean[] = [true, false, false, true, false, true];

    let cTwoQuesThreeAns: string[] = ["Ein Vorstellungsbild kann sich je nach Person trotz des gleichen Gegenstands unterscheiden.", "Die Unschärfetoleranz.", "Es gibt keinen Unterschied."];
    let cTwoQuesThreeRes: string[] = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Ein Vorstellungsbild kann sich je nach Person trotz des gleichen Gegenstandes unterscheiden und die Unschärfetoleranz spielt keine Rolle dabei.", "Leider ist die Antwort falsch. Ein Vorstellungsbild kann sich je nach Person trotz des gleichen Gegenstandes unterscheiden."];
    let cTwoQuesThreeVal: boolean[] = [true, false, false];

    let cTwoQuesFourAns: string[] = ["Das Gesetz der gemeinsamen Region.", "Das Figur-Grund-Verhältnis.", "Das Gesetz der Geschlossenheit"];
    let cTwoQuesFourRes: string[] = ["Leider ist die Antwort falsch. Das Figur-Grund-Verhältnis beeinflusst unsere Sicht auf die Rubin’sche Vase.", "Super, die Antwort ist richtig.", " Leider ist die Antwort falsch. Das Figur-Grund-Verhältnis beeinflusst unsere Sicht auf die Rubin’sche Vase."];
    let cTwoQuesFourVal: boolean[] = [false, true, false];

    let cTwoQuesFiveAns: string[] = ["Die Atmosphäre entsteht am Ende des Betrachtens.", "Die Atmosphäre ist der Gesamteindruck, der durch das Ganze eines Designs entsteht", ""];
    let cTwoQuesFiveRes: string[] = ["Leider ist die Antwort falsch. Die Atmosphäre entsteht am Anfang des Betrachtens.", "Super, die Antwort ist richtig.", "Die Atmosphäre entsteht ausschließlich durch die Komposition."];
    let cTwoQuesFiveVal: boolean[] = [false, true, false];

    let cTwoQuesSixAns: string[] = ["Sie ist das Erkennen von Strukturähnlichkeiten von Gestalten?", "Sie entsteht auch, wenn das Strukturgerüst nicht richtig getroffen wird?", "Die Unschärfetoleranz besagt, dass wir Menschen Gemeinsamkeiten zwischen Gestalten, die sich oberflächlich überhaupt nicht ähneln, erkennen können."];
    let cTwoQuesSixRes: string[] = ["Super, die Antwort ist richtig.", "Antwort: Leider ist die Antwort falsch. Sie entsteht nur, wenn das Strukturgerüst richtig getroffen wird.", "Super, die Antwort ist richtig."];
    let cTwoQuesSixVal: boolean[] = [true, false, true];

    let cTwoQuesSevenAns: string[] = ["Eine bestimmte Stimmung, die sich über das ganze Design hinwegzieht.", "Etwas, das den Geschmack des Betrachters trifft.", "Umso eher vorhanden, je geringer die Vielfältigkeit des Bildes ist."];
    let cTwoQuesSevenRes: string[] = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Das ist zwar möglich, aber nicht zwangsläufig so.", "Leider ist die Antwort falsch. Je größer der Detailreichtum ist, desto eher entsteht eine stimmige Atmosphäre beim Betrachter."];
    let cTwoQuesSevenVal: boolean[] = [true, false, false];


    let cFourQuesOneAns: string[] = ["Die perfekte Symmetrie.", "Die Asymmetrie.", "Die Empfindungssymmetrie."];
    let cFourQuesOneRes: string[] = ["Leider ist die Antwort falsch. Die perfekte Symmetrie wirkt in den meisten Fällen starr, leblos und langweilig.", "Leider ist die Antwort falsch. Die Asymmetrie wirkt in den meisten Fällen unausgewogen und durcheinander.", "Super, die Antwort ist richtig."];
    let cFourQuesOneVal: boolean[] = [false, false, true];

    let cFourQuesTwoAns: string[] = ["Palintropos Harmonia.", "Relinquere Harmonia.", "Periculum Harmonia."];
    let cFourQuesTwoRes: string[] = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Es ist Palintropos Harmonia.", "Leider ist die Antwort falsch. Es ist Palintropos Harmonia."];
    let cFourQuesTwoVal: boolean[] = [true, false, false];
    
    let cFourQuesThreeAns: string[] = ["Dass es Unterschiede bei den Betrachtern gibt.", "Dass das Design für die Betrachter auffällig sein muss.", "Dass das Design nicht komplex sein darf."];
    let cFourQuesThreeRes: string[] = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Die Designs können nicht für jeden Betrachter auffällig sein, denn es gibt immer Unterschiede bei den verschiedenen Betrachter.", "Leider ist die Antwort falsch. Die Designs dürfen auch für die Betrachter komplex sein, denn es gibt Betrachter, die es mögen und Betrachter, die es nicht mögen."];
    let cFourQuesThreeVal: boolean[] = [true, false, false];

    let cFourQuesFourAns: string[] = ["Die Grundprinzipien des Designs.", "Die Grundprinzipien der Ästhetik.", "Die Grundprinzipien der Wahrnehmung."];
    let cFourQuesFourRes: string[] = [" Leider ist die Antwort falsch. Die Grundprinzipien des Design sind die Grundbausteine eines Designs.", "Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Die Grundprinzipien der Wahrnehmung sind Vorgänge, die im Gehirn passieren, wenn wir etwas wahrnehmen."];
    let cFourQuesFourVal: boolean[] = [false, true, false];

    let cFourQuesFiveAns: string[] = ["Die Kritiker.", "Die Künstler.", "Seine Zielgruppe."];
    let cFourQuesFiveRes: string[] = ["Leider ist die Antwort falsch. Jeder Kritiker hat einen eigenen Geschmack und man kann als Designer nicht jeden zufriedenstellen.", "Leider ist die Antwort falsch. Jeder Künstler hat einen eigenen Geschmack und man kann als Designer nicht jeden zufriedenstellen.", "Super, die Antwort ist richtig."];
    let cFourQuesFiveVal: boolean[] = [false, false, true];

    let cFourQuesSixAns: string[] = [" Für einen bestimmten Tanzstil.", "Als Protest gegen geltende soziale Normen.", "Für bestimmte Veranstaltungen."];
    let cFourQuesSixRes: string[] = [" Leider ist die Antwort falsch. Camp hat nichts mit Tanzen zu tun, sondern wird als eine Art Protest genutzt.", "Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Camp hat nichts mit Veranstaltungen zu tun, sondern wird als eine Art Protest genutzt."];
    let cFourQuesSixVal: boolean[] = [false, true, false];

    export function quiz(): void {

        for (let i: number = 0; i < cOneQuesOneAns.length; i++) {
            let newAnswer: Answer = new Answer(cOneQuesOneAns[i], cOneQuesOneRes[i], cOneQuesOneVal[i]);
            chapterOneFirstAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cOneQuesTwoAns.length; i++) {
            let newAnswer: Answer = new Answer(cOneQuesTwoAns[i], cOneQuesTwoRes[i], cOneQuesTwoVal[i]);
            chapterOneSecondAnswers.push(newAnswer);
        }


        for (let i: number = 0; i < cTwoQuesOneAns.length; i++) {
            let newAnswer: Answer = new Answer(cTwoQuesOneAns[i], cTwoQuesOneRes[i], cTwoQuesOneVal[i]);
            chapterTwoFirstAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cTwoQuesTwoAns.length; i++) {
            let newAnswer: Answer = new Answer(cTwoQuesTwoAns[i], cTwoQuesTwoRes[i], cTwoQuesTwoVal[i]);
            chapterTwoSecondAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cTwoQuesThreeAns.length; i++) {
            let newAnswer: Answer = new Answer(cTwoQuesThreeAns[i], cTwoQuesThreeRes[i], cTwoQuesThreeVal[i]);
            chapterTwoThirdAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cTwoQuesFourAns.length; i++) {
            let newAnswer: Answer = new Answer(cTwoQuesFourAns[i], cTwoQuesFourRes[i], cTwoQuesFourVal[i]);
            chapterTwoFourthAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cTwoQuesFiveAns.length; i++) {
            let newAnswer: Answer = new Answer(cTwoQuesFiveAns[i], cTwoQuesFiveRes[i], cTwoQuesFiveVal[i]);
            chapterTwoFifthAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cTwoQuesSixAns.length; i++) {
            let newAnswer: Answer = new Answer(cTwoQuesSixAns[i], cTwoQuesSixRes[i], cTwoQuesSixVal[i]);
            chapterTwoSixthAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cTwoQuesSevenAns.length; i++) {
            let newAnswer: Answer = new Answer(cTwoQuesSevenAns[i], cTwoQuesSevenRes[i], cTwoQuesSevenVal[i]);
            chapterTwoSeventhAnswers.push(newAnswer);
        }


        for (let i: number = 0; i < cFourQuesOneAns.length; i++) {
            let newAnswer: Answer = new Answer(cFourQuesOneAns[i], cFourQuesOneRes[i], cFourQuesOneVal[i]);
            chapterFourFirstAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cFourQuesTwoAns.length; i++) {
            let newAnswer: Answer = new Answer(cFourQuesTwoAns[i], cFourQuesTwoRes[i], cFourQuesTwoVal[i]);
            chapterFourSecondAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cFourQuesThreeAns.length; i++) {
            let newAnswer: Answer = new Answer(cFourQuesThreeAns[i], cFourQuesThreeRes[i], cFourQuesThreeVal[i]);
            chapterFourThirdAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cFourQuesFourAns.length; i++) {
            let newAnswer: Answer = new Answer(cFourQuesFourAns[i], cFourQuesFourRes[i], cFourQuesFourVal[i]);
            chapterFourFourthAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cFourQuesFiveAns.length; i++) {
            let newAnswer: Answer = new Answer(cFourQuesFiveAns[i], cFourQuesFiveRes[i], cFourQuesFiveVal[i]);
            chapterFourFifthAnswers.push(newAnswer);
        }

        for (let i: number = 0; i < cFourQuesSixAns.length; i++) {
            let newAnswer: Answer = new Answer(cFourQuesSixAns[i], cFourQuesSixRes[i], cFourQuesSixVal[i]);
            chapterFourSixthAnswers.push(newAnswer);
        }
        

        allAnswers.push(chapterOneFirstAnswers, chapterOneSecondAnswers, chapterTwoFirstAnswers, chapterTwoSecondAnswers, chapterTwoThirdAnswers, chapterTwoFourthAnswers, chapterTwoFifthAnswers, chapterTwoSixthAnswers, chapterTwoSeventhAnswers, chapterFourFirstAnswers, chapterFourSecondAnswers, chapterFourThirdAnswers, chapterFourFourthAnswers, chapterFourFifthAnswers, chapterFourSixthAnswers);

        for (let i: number = 0; i < questions.length; i++) {
            let newQuestion: Question = new Question(questions[i], allAnswers[i]);
            allQuestions.push(newQuestion);
        }

        while (allQuestions.length > 1) {
            let x: number = Math.floor(Math.random() * allQuestions.length);
            quizQuestion.push(allQuestions[x]);
            allQuestions.splice(x, 1);
        }

        if (allQuestions.length == 1) {
            quizQuestion.push(allQuestions[0]);
            allQuestions.pop();
        }
    }
}