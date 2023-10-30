import {Letter} from '../src/Items/Letter';
import {SmallBox} from '../src/Items/SmallBox';
import {BigBox} from '../src/Items/BigBox';
import {PostItem} from "./Items/PostItem";

export class PostOffice {
    postedItems: PostItem[];

    constructor() {
        this.postedItems = [];
    }

    storeItem(item: PostItem) {
        this.postedItems.push(item);
    }

    listItemsByDate(date: Date) {
        const itemsOnDate = this.postedItems.filter(
            (item) => item.postedDate.toDateString() === date.toDateString()
        );
        return itemsOnDate;
    }

    calculateTotalIncome(type: string) {
        let totalIncome = 0;
        if (type === 'letter') {
            totalIncome = this.postedItems.filter((item) => item instanceof Letter).length * Letter.price;
        } else if (type === 'small box') {
            totalIncome = this.postedItems.filter((item) => item instanceof SmallBox).length * SmallBox.price;
        } else if (type === 'big box') {
            for (const item of this.postedItems) {
                if (item instanceof BigBox) {
                    totalIncome += (item as BigBox).calculatePrice();
                }
            }
        }
        return totalIncome;
    }
}
