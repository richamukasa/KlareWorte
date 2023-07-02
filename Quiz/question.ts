namespace KlareWorte {
    
    export class Question {
        public question: string;
        public answers: Answer[];

        constructor (_question: string, _answers: Answer[] ) {
            this.question = _question;
            this.answers = _answers;
        }
    }
}