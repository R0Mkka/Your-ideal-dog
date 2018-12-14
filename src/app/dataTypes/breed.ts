export interface IBreed {
    name: string;
    country: string;
    image: string;
    trainingSkills: number;
    security: number;
    mind: number;
    size: number;
    agility: number;
    woolLength: number;
    moult: number;
    cost: string;
    attitudeToChildren: number;
    groups: string[];
    hunter?: boolean;
    decorative?: boolean;
    watchdog?: boolean;
    forFamily?: boolean;
    fighting?: boolean;
    hypoallergenic?: boolean;
    points: number;
}