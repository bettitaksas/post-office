import {PostItem} from "./PostItem";

export class Box extends PostItem {
    weight: number;

    constructor(address: string, postedDate: Date, weight: number) {
        super(address, postedDate);
        this.weight = weight;
    }
}
