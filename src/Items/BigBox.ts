import {Box} from "./Box";

export class BigBox extends Box {
    static readonly basePrice: number = 10.29;
    static readonly pricePerGram: number = 0.29;

    constructor(address: string, postedDate: Date, weight: number) {
        super(address, postedDate, weight);
    }

    calculatePrice(): number {
        return BigBox.basePrice + BigBox.pricePerGram * this.weight;
    }
}
