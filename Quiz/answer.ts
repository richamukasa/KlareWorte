namespace KlareWorte {
    
    export class Answer {
        public answer: string;
        public response: string;
        public value: boolean;

        constructor (_answer: string, _response: string, _value: boolean) {
            this.answer = _answer;
            this.response = _response;
            this.value = _value;
        }
    }
}