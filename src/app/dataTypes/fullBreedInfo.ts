import { IBreed } from './breed';
import { IBreedDescription } from './breedDescription';

export interface IFullBreedInfo {
    name: string;
    breed: IBreed;
    description: IBreedDescription;
}