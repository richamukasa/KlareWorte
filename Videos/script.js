var KlareWorte;
(function (KlareWorte) {
    let chapterOne = ["Kapitel_1/1.0 Intro Wie wir die Welt wahrnehmen/Wie-wir-die-welt-wahrnehmen.mp4", "Kapitel_1/1.1 Unsere Wahrnehmung der Welt/Unsere-Wahrnehmung-der-Welt.mp4", "Kapitel_1/1.2 Die Wahrnehmung dient dem Überleben/Die-Wahrnehmung-dient-dem-ueberleben.mp4", "Kapitel_1/1.4 Die Ableitung für Designer/Ableitung-fuer-Designer.mp4"];
    let chapterOneOgg = ["Kapitel_1/1.0 Intro Wie wir die Welt wahrnehmen/Wie-wir-die-welt-wahrnehmen.ogg", "Kapitel_1/1.1 Unsere Wahrnehmung der Welt/Unsere-Wahrnehmung-der-Welt.ogg", "Kapitel_1/1.2 Die Wahrnehmung dient dem Überleben/Die-Wahrnehmung-dient-dem-ueberleben.ogg", "Kapitel_1/1.4 Die Ableitung für Designer/Ableitung-fuer-Designer.ogg"];
    let chapterOneText = ["Intro", "Die Wahrnehmung dient dem Überleben", "Unsere Wahrnehmung der Welt", "Die Wahrnehmung dient dem Überleben", "Ableitung für Designer"];
    let chapterTwo = ["Kapitel_2/2.0 Intro/Kapitel_2.0_Intro.mp4", "Kapitel_2/2.1 Wahrnehmung/Kapitel_2.1.mp4", "Kapitel_2/2.2 Gestaltgesetze/Kapitel_2.2.mp4", "Kapitel_2/2.3 Die stimmige Atmosphäre/Stimmige-Atmosphare.mp4", "Kapitel_2/2.4 Isomorphie/Isomorphie.mp4"];
    let chapterTwoOgg = ["Kapitel_2/2.0 Intro/Kapitel_2.0_Intro.ogg", "Kapitel_2/2.1 Wahrnehmung/Kapitel_2.1.ogg", "Kapitel_2/2.2 Gestaltgesetze/Kapitel_2.2.ogg", "Kapitel_2/2.3 Die stimmige Atmosphäre/Stimmige-Atmosphare.ogg", "Kapitel_2/2.4 Isomorphie/Isomorphie.ogg"];
    let chapterTwoText = ["Intro", "Unsere Wahrnehmung", "Die Gestaltgesetze", "Die stimmige Atmosphäre", "Isomorphie"];
    let chapterFour = ["Kapitel_4/4.0 Intro/Ist-Design-nicht-Geschmackssache_Intro.mp4", "Kapitel_4/4.1 Ist Design nicht Geschmackssache/Ist-Design-nicht-Geschmackssache.mp4", "Kapitel_4/4.2 Das Stimmigkeitsempfinden/Stimmigkeitsempfinden.mp4", "Kapitel_4/4.3 Die drei Gestaltungsprinzipien/3-Gestaltungsprinzipien.mp4", "Kapitel_4/4.4 Die Unterschiede der Betrachter/Die-Unterschiede-der-Betrachter.mp4", "Kapitel_4/4.5 Vermeintlich schlechte Geschmäcker/Vermeintlich-schlechte-Geschmäcker.mp4", "Kapitel_4/4.6 Grundprinzipien des Designs/Grundprinzipien-des-Designs.mp4", "Kapitel_4/4.7 Outro/Ist-Design-nicht-Geschmackssache_Outro.mp4"];
    let chapterFourOgg = ["Kapitel_4/4.0 Intro/Ist-Design-nicht-Geschmackssache_Intro.ogg", "Kapitel_4/4.1 Ist Design nicht Geschmackssache/Ist-Design-nicht-Geschmackssache.ogg", "Kapitel_4/4.2 Das Stimmigkeitsempfinden/Stimmigkeitsempfinden.ogg", "Kapitel_4/4.3 Die drei Gestaltungsprinzipien/3-Gestaltungsprinzipien.ogg", "Kapitel_4/4.4 Die Unterschiede der Betrachter/Die-Unterschiede-der-Betrachter.ogg", "Kapitel_4/4.5 Vermeintlich schlechte Geschmäcker/Vermeintlich-schlechte-Geschmäcker.ogg", "Kapitel_4/4.6 Grundprinzipien des Designs/Grundprinzipien-des-Designs.ogg", "Kapitel_4/4.7 Outro/Ist-Design-nicht-Geschmackssache_Outro.ogg"];
    let chapterFourText = ["Intro", "Ist Design nicht Geschmackssache?", "Das Stimmigkeitsempfinden", "Die drei Gestaltungsprinzipien", "Die Unterschiede der Betrachter", "Vermeintlich schlechte Geschmäcker", "Grundprinzipien des Designs", "Outro"];
    function hndLoad() {
        let selection = document.querySelector("#selection");
        let quizButton = document.createElement("div");
        loadChapter(1, chapterOneText, chapterOne, chapterOneOgg);
        loadChapter(2, chapterTwoText, chapterTwo, chapterTwoOgg);
        loadChapter(4, chapterFourText, chapterFour, chapterFourOgg);
        KlareWorte.quiz();
        quizButton.className = "chapter";
        quizButton.id = "quiz";
        quizButton.innerText = "Teste dein Wissen!";
        quizButton.addEventListener("click", () => {
            KlareWorte.loadQuestion(KlareWorte.quizQuestion, KlareWorte.activeQuestion);
        });
        selection.append(quizButton);
    }
    function loadVideo(_src, _ogg) {
        let wrapper = document.querySelector("#wrapper");
        let video = document.createElement("video");
        let mpSource = document.createElement("source");
        let oggSource = document.createElement("source");
        wrapper.innerHTML = "";
        video.width = 1280;
        video.height = 720;
        video.controls = true;
        mpSource.type = "video/mp4";
        mpSource.src = _src;
        oggSource.type = "video/ogg";
        oggSource.src = _ogg;
        video.append(mpSource);
        wrapper.append(video);
    }
    function loadChapter(_index, _text, _link, _oggLink) {
        let selection = document.querySelector("#selection");
        let chapterWrap = document.createElement("div");
        let chapter = document.createElement("div");
        let vidSelection = document.createElement("div");
        vidSelection.id = `c${_index}`;
        for (let i = 0; i < _link.length; i++) {
            let link = document.createElement("div");
            link.innerText = _text[i];
            link.classList.add("link", `chapter${_index}`);
            link.addEventListener("click", () => {
                loadVideo(_link[i], _oggLink[i]);
            });
            vidSelection.append(link);
        }
        chapter.classList.add("chapter");
        chapter.id = `chapter${_index}`;
        chapter.innerHTML = `Kapitel ${_index}`;
        chapter.addEventListener("click", () => {
            openChapter(_index);
        });
        chapterWrap.append(chapter, vidSelection);
        selection.append(chapterWrap);
    }
    function openChapter(_chapterId) {
        console.log("Bruder");
        let vidSelection = document.querySelector(`#c${_chapterId}`);
        let chapter = document.querySelector(`#chapter${_chapterId}`);
        chapter.removeEventListener("click", () => {
            openChapter(_chapterId);
        });
        chapter.addEventListener("click", () => {
            closeChapter(_chapterId);
        });
        vidSelection.style.display = "block";
    }
    function closeChapter(_chapterId) {
        console.log("Schwester");
        let vidSelection = document.querySelector(`#c${_chapterId}`);
        let chapter = document.querySelector(`#chapter${_chapterId}`);
        chapter.removeEventListener("click", () => {
            closeChapter(_chapterId);
        });
        chapter.addEventListener("click", () => {
            openChapter(_chapterId);
        });
        vidSelection.style.display = "none";
    }
    window.addEventListener("load", hndLoad);
})(KlareWorte || (KlareWorte = {}));
//# sourceMappingURL=script.js.map