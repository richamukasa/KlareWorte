var KlareWorte;
(function (KlareWorte) {
    KlareWorte.selectedAnswers = 0;
    KlareWorte.activeQuestion = 0;
    KlareWorte.answers = [];
    KlareWorte.responses = [];
    KlareWorte.quizQuestion = [];
    let questions = ["Welche Dinge nehmen wir in der echten Welt wahr?", "Worauf muss man als Designer achten?", "Was spielt eine wichtige Rolle für unsere Wahrnehmung?", "Welche Gestalten gehören zu den grundlegenden Gestalten?", "Was unterscheidet Vorstellungsbildern von realen Dingen?", "Welches Gestaltgesetz beeinflusst unsere Sicht auf die Rubin‘sche Vase?", "Welche Antwort ist korrekt?", "Was trifft auf die Isomorphie zu?", "Die stimmige Atmosphäre ist…", "Welche Symmetrie ist eine gute Wahl für ein Design?", "Wie nennt man das Prinzip des Ausgleichs von Gegenständen?", "Was muss der Designer im Hinterkopf behalten, wenn er ein Design erstellen will?", "Welche Grundprinzipien machen manchmal einen Unterschied zwischen einem gelungenen Design und einem nicht gelungenen Design?", "Welche Gruppe muss der Designer immer beachten?", "Wofür wird der Stil „Camp“ genutzt?"];
    let allAnswers = [];
    let allQuestions = [];
    let chapterOneFirstAnswers = [];
    let chapterOneSecondAnswers = [];
    let chapterTwoFirstAnswers = [];
    let chapterTwoSecondAnswers = [];
    let chapterTwoThirdAnswers = [];
    let chapterTwoFourthAnswers = [];
    let chapterTwoFifthAnswers = [];
    let chapterTwoSixthAnswers = [];
    let chapterTwoSeventhAnswers = [];
    let chapterFourFirstAnswers = [];
    let chapterFourSecondAnswers = [];
    let chapterFourThirdAnswers = [];
    let chapterFourFourthAnswers = [];
    let chapterFourFifthAnswers = [];
    let chapterFourSixthAnswers = [];
    let cOneQuesOneAns = ["Alle Dinge.", "Nur die Dinge, die für unser Überleben wichtig sind.", "All die Dinge, die in unsere „innere“ Welt hineinpassen."];
    let cOneQuesOneRes = ["Falsch! Wir nehmen nur die Dinge wahr, die für unser Überleben wichtig sind und alle anderen Dinge blenden wir aus.", "Korrekt!", "Falsch! Wir nehmen nur die Dinge wahr, die für unser Überleben wichtig sind, sonst würden wir in der Welt nicht überleben können."];
    let cOneQuesOneVal = [false, true, false];
    let cOneQuesTwoAns = ["Dass man den Betrachter motiviert, die Designs lange anzuschauen.", "Dass man verschiedene Reaktionen beim Betrachter auslösen muss.", "Das man den Betrachter mit all seinen Sinnen, Gedanken und Gefühlen ansprechen soll."];
    let cOneQuesTwoRes = ["Falsch! Der Designer sollte die Gedanken, Sinnen und Gefühlen des   Betrachters ansprechen, denn dann bringt er ihn dazu, seine Designs lange anzuschauen.", "Falsch! Erst durch das Ansprechen der Gedanken, Sinnen und Gefühlen des Betrachters kann der Designer verschiedene Reaktionen bei ihm auslösen.", "Korrekt!"];
    let cOneQuesTwoVal = [false, false, true];
    let cTwoQuesOneAns = ["Was wir wahrnehmen und erkennen, wird durch unsere Erfahrungen geprägt.", "Die Beziehung der Einzelteile zueinander", "Die Detektorzellen."];
    let cTwoQuesOneRes = ["Super, die Antwort ist richtig.", "Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Unsere Wahrnehmung wird durch unsere Erfahrungen und die Beziehung der Einzelteile zueinander geprägt."];
    let cTwoQuesOneVal = [true, true, false];
    let cTwoQuesTwoAns = ["Ein Quadrat.", "Ein Auto.", "Ein Hund.", "Ein Kreis.", "Eine Vase.", "Ein Trapez."];
    let cTwoQuesTwoRes = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Die Gestalt eines Autos gehört zu den komplexen Gestalten.", "Leider ist die Antwort falsch. Die Gestalt eines Hundes gehört zu den komplexen Gestalten.", "Super, die Antwort ist richtig.", "Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Die Gestalt einer Vase gehört zu den komplexen Gestalten.", "Super, die Antwort ist richtig."];
    let cTwoQuesTwoVal = [true, false, false, true, false, true];
    let cTwoQuesThreeAns = ["Ein Vorstellungsbild kann sich je nach Person trotz des gleichen Gegenstands unterscheiden.", "Die Unschärfetoleranz.", "Es gibt keinen Unterschied."];
    let cTwoQuesThreeRes = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Ein Vorstellungsbild kann sich je nach Person trotz des gleichen Gegenstandes unterscheiden und die Unschärfetoleranz spielt keine Rolle dabei.", "Leider ist die Antwort falsch. Ein Vorstellungsbild kann sich je nach Person trotz des gleichen Gegenstandes unterscheiden."];
    let cTwoQuesThreeVal = [true, false, false];
    let cTwoQuesFourAns = ["Das Gesetz der gemeinsamen Region.", "Das Figur-Grund-Verhältnis.", "Das Gesetz der Geschlossenheit"];
    let cTwoQuesFourRes = ["Leider ist die Antwort falsch. Das Figur-Grund-Verhältnis beeinflusst unsere Sicht auf die Rubin’sche Vase.", "Super, die Antwort ist richtig.", " Leider ist die Antwort falsch. Das Figur-Grund-Verhältnis beeinflusst unsere Sicht auf die Rubin’sche Vase."];
    let cTwoQuesFourVal = [false, true, false];
    let cTwoQuesFiveAns = ["Die Atmosphäre entsteht am Ende des Betrachtens.", "Die Atmosphäre ist der Gesamteindruck, der durch das Ganze eines Designs entsteht", ""];
    let cTwoQuesFiveRes = ["Leider ist die Antwort falsch. Die Atmosphäre entsteht am Anfang des Betrachtens.", "Super, die Antwort ist richtig.", "Die Atmosphäre entsteht ausschließlich durch die Komposition."];
    let cTwoQuesFiveVal = [false, true, false];
    let cTwoQuesSixAns = ["Sie ist das Erkennen von Strukturähnlichkeiten von Gestalten?", "Sie entsteht auch, wenn das Strukturgerüst nicht richtig getroffen wird?", "Die Unschärfetoleranz besagt, dass wir Menschen Gemeinsamkeiten zwischen Gestalten, die sich oberflächlich überhaupt nicht ähneln, erkennen können."];
    let cTwoQuesSixRes = ["Super, die Antwort ist richtig.", "Antwort: Leider ist die Antwort falsch. Sie entsteht nur, wenn das Strukturgerüst richtig getroffen wird.", "Super, die Antwort ist richtig."];
    let cTwoQuesSixVal = [true, false, true];
    let cTwoQuesSevenAns = ["Eine bestimmte Stimmung, die sich über das ganze Design hinwegzieht.", "Etwas, das den Geschmack des Betrachters trifft.", "Umso eher vorhanden, je geringer die Vielfältigkeit des Bildes ist."];
    let cTwoQuesSevenRes = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Das ist zwar möglich, aber nicht zwangsläufig so.", "Leider ist die Antwort falsch. Je größer der Detailreichtum ist, desto eher entsteht eine stimmige Atmosphäre beim Betrachter."];
    let cTwoQuesSevenVal = [true, false, false];
    let cFourQuesOneAns = ["Die perfekte Symmetrie.", "Die Asymmetrie.", "Die Empfindungssymmetrie."];
    let cFourQuesOneRes = ["Leider ist die Antwort falsch. Die perfekte Symmetrie wirkt in den meisten Fällen starr, leblos und langweilig.", "Leider ist die Antwort falsch. Die Asymmetrie wirkt in den meisten Fällen unausgewogen und durcheinander.", "Super, die Antwort ist richtig."];
    let cFourQuesOneVal = [false, false, true];
    let cFourQuesTwoAns = ["Palintropos Harmonia.", "Relinquere Harmonia.", "Periculum Harmonia."];
    let cFourQuesTwoRes = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Es ist Palintropos Harmonia.", "Leider ist die Antwort falsch. Es ist Palintropos Harmonia."];
    let cFourQuesTwoVal = [true, false, false];
    let cFourQuesThreeAns = ["Dass es Unterschiede bei den Betrachtern gibt.", "Dass das Design für die Betrachter auffällig sein muss.", "Dass das Design nicht komplex sein darf."];
    let cFourQuesThreeRes = ["Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Die Designs können nicht für jeden Betrachter auffällig sein, denn es gibt immer Unterschiede bei den verschiedenen Betrachter.", "Leider ist die Antwort falsch. Die Designs dürfen auch für die Betrachter komplex sein, denn es gibt Betrachter, die es mögen und Betrachter, die es nicht mögen."];
    let cFourQuesThreeVal = [true, false, false];
    let cFourQuesFourAns = ["Die Grundprinzipien des Designs.", "Die Grundprinzipien der Ästhetik.", "Die Grundprinzipien der Wahrnehmung."];
    let cFourQuesFourRes = [" Leider ist die Antwort falsch. Die Grundprinzipien des Design sind die Grundbausteine eines Designs.", "Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Die Grundprinzipien der Wahrnehmung sind Vorgänge, die im Gehirn passieren, wenn wir etwas wahrnehmen."];
    let cFourQuesFourVal = [false, true, false];
    let cFourQuesFiveAns = ["Die Kritiker.", "Die Künstler.", "Seine Zielgruppe."];
    let cFourQuesFiveRes = ["Leider ist die Antwort falsch. Jeder Kritiker hat einen eigenen Geschmack und man kann als Designer nicht jeden zufriedenstellen.", "Leider ist die Antwort falsch. Jeder Künstler hat einen eigenen Geschmack und man kann als Designer nicht jeden zufriedenstellen.", "Super, die Antwort ist richtig."];
    let cFourQuesFiveVal = [false, false, true];
    let cFourQuesSixAns = [" Für einen bestimmten Tanzstil.", "Als Protest gegen geltende soziale Normen.", "Für bestimmte Veranstaltungen."];
    let cFourQuesSixRes = [" Leider ist die Antwort falsch. Camp hat nichts mit Tanzen zu tun, sondern wird als eine Art Protest genutzt.", "Super, die Antwort ist richtig.", "Leider ist die Antwort falsch. Camp hat nichts mit Veranstaltungen zu tun, sondern wird als eine Art Protest genutzt."];
    let cFourQuesSixVal = [false, true, false];
    function quiz() {
        for (let i = 0; i < cOneQuesOneAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cOneQuesOneAns[i], cOneQuesOneRes[i], cOneQuesOneVal[i]);
            chapterOneFirstAnswers.push(newAnswer);
        }
        for (let i = 0; i < cOneQuesTwoAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cOneQuesTwoAns[i], cOneQuesTwoRes[i], cOneQuesTwoVal[i]);
            chapterOneSecondAnswers.push(newAnswer);
        }
        for (let i = 0; i < cTwoQuesOneAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cTwoQuesOneAns[i], cTwoQuesOneRes[i], cTwoQuesOneVal[i]);
            chapterTwoFirstAnswers.push(newAnswer);
        }
        for (let i = 0; i < cTwoQuesTwoAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cTwoQuesTwoAns[i], cTwoQuesTwoRes[i], cTwoQuesTwoVal[i]);
            chapterTwoSecondAnswers.push(newAnswer);
        }
        for (let i = 0; i < cTwoQuesThreeAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cTwoQuesThreeAns[i], cTwoQuesThreeRes[i], cTwoQuesThreeVal[i]);
            chapterTwoThirdAnswers.push(newAnswer);
        }
        for (let i = 0; i < cTwoQuesFourAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cTwoQuesFourAns[i], cTwoQuesFourRes[i], cTwoQuesFourVal[i]);
            chapterTwoFourthAnswers.push(newAnswer);
        }
        for (let i = 0; i < cTwoQuesFiveAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cTwoQuesFiveAns[i], cTwoQuesFiveRes[i], cTwoQuesFiveVal[i]);
            chapterTwoFifthAnswers.push(newAnswer);
        }
        for (let i = 0; i < cTwoQuesSixAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cTwoQuesSixAns[i], cTwoQuesSixRes[i], cTwoQuesSixVal[i]);
            chapterTwoSixthAnswers.push(newAnswer);
        }
        for (let i = 0; i < cTwoQuesSevenAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cTwoQuesSevenAns[i], cTwoQuesSevenRes[i], cTwoQuesSevenVal[i]);
            chapterTwoSeventhAnswers.push(newAnswer);
        }
        for (let i = 0; i < cFourQuesOneAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cFourQuesOneAns[i], cFourQuesOneRes[i], cFourQuesOneVal[i]);
            chapterFourFirstAnswers.push(newAnswer);
        }
        for (let i = 0; i < cFourQuesTwoAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cFourQuesTwoAns[i], cFourQuesTwoRes[i], cFourQuesTwoVal[i]);
            chapterFourSecondAnswers.push(newAnswer);
        }
        for (let i = 0; i < cFourQuesThreeAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cFourQuesThreeAns[i], cFourQuesThreeRes[i], cFourQuesThreeVal[i]);
            chapterFourThirdAnswers.push(newAnswer);
        }
        for (let i = 0; i < cFourQuesFourAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cFourQuesFourAns[i], cFourQuesFourRes[i], cFourQuesFourVal[i]);
            chapterFourFourthAnswers.push(newAnswer);
        }
        for (let i = 0; i < cFourQuesFiveAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cFourQuesFiveAns[i], cFourQuesFiveRes[i], cFourQuesFiveVal[i]);
            chapterFourFifthAnswers.push(newAnswer);
        }
        for (let i = 0; i < cFourQuesSixAns.length; i++) {
            let newAnswer = new KlareWorte.Answer(cFourQuesSixAns[i], cFourQuesSixRes[i], cFourQuesSixVal[i]);
            chapterFourSixthAnswers.push(newAnswer);
        }
        allAnswers.push(chapterOneFirstAnswers, chapterOneSecondAnswers, chapterTwoFirstAnswers, chapterTwoSecondAnswers, chapterTwoThirdAnswers, chapterTwoFourthAnswers, chapterTwoFifthAnswers, chapterTwoSixthAnswers, chapterTwoSeventhAnswers, chapterFourFirstAnswers, chapterFourSecondAnswers, chapterFourThirdAnswers, chapterFourFourthAnswers, chapterFourFifthAnswers, chapterFourSixthAnswers);
        for (let i = 0; i < questions.length; i++) {
            let newQuestion = new KlareWorte.Question(questions[i], allAnswers[i]);
            allQuestions.push(newQuestion);
        }
        while (allQuestions.length > 1) {
            let x = Math.floor(Math.random() * allQuestions.length);
            KlareWorte.quizQuestion.push(allQuestions[x]);
            allQuestions.splice(x, 1);
        }
        if (allQuestions.length == 1) {
            KlareWorte.quizQuestion.push(allQuestions[0]);
            allQuestions.pop();
        }
    }
    KlareWorte.quiz = quiz;
})(KlareWorte || (KlareWorte = {}));
//# sourceMappingURL=library.js.map