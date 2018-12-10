export interface IQuestion {
    id: number;
    text: string;
    answers: string[];
    chosenAnswer: number | number[];
    comment?: string;
}