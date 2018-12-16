import { IBreed } from './breed';

export interface ITableItem {
    breeds: IBreed[];
    answersAmount: number;
    testTime: number | string;
    date: string;
    time: string,
    rating: number;
}