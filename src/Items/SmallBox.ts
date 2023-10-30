import {Box} from "./Box";

export class SmallBox extends Box {
    static readonly price: number = 7.99;

    constructor(address: string, postedDate: Date, weight: number) {
        super(address, postedDate, weight);
    }
}
