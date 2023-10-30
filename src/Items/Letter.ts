import {PostItem} from "./PostItem";

export class Letter extends PostItem {
    static readonly price: number = 1.99;

    constructor(address: string, postedDate: Date) {
        super(address, postedDate);
    }
}
