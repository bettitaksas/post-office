import { PostOffice } from '../src/PostOffice';
import { Letter } from '../src/Items/Letter';
import { SmallBox } from '../src/Items/SmallBox';
import { BigBox } from '../src/Items/BigBox';

// Test for listItemsByDate method
describe('PostOffice listItemsByDate method', () => {
    const postOffice = new PostOffice();
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const letterToday = new Letter('Some Address', today);
    const letterYesterday = new Letter('Another Address', yesterday);
    postOffice.storeItem(letterToday);
    postOffice.storeItem(letterYesterday);

    test('should return all items posted today', () => {
        const itemsOnToday = postOffice.listItemsByDate(today);
        expect(itemsOnToday.length).toBe(1);
        expect(itemsOnToday[0].postedDate.toDateString()).toBe(today.toDateString());
    });

    test('should return all items posted yesterday', () => {
        const itemsOnYesterday = postOffice.listItemsByDate(yesterday);
        expect(itemsOnYesterday.length).toBe(1);
        expect(itemsOnYesterday[0].postedDate.toDateString()).toBe(yesterday.toDateString());
    });
});


// Test for calculateTotalIncome method
describe('PostOffice calculateTotalIncome method', () => {
    const postOffice = new PostOffice();
    const today = new Date();

    const letter1 = new Letter('Some Address', today);
    const letter2 = new Letter('Another Address', today);
    const smallBox1 = new SmallBox('Address 1', today, 200);
    const smallBox2 = new SmallBox('Address 2', today, 300);
    const bigBox1 = new BigBox('Address X', today, 1000);
    const bigBox2 = new BigBox('Address Y', today, 1500);

    postOffice.storeItem(letter1);
    postOffice.storeItem(letter2);
    postOffice.storeItem(smallBox1);
    postOffice.storeItem(smallBox2);
    postOffice.storeItem(bigBox1);
    postOffice.storeItem(bigBox2);

    test('should calculate total income for letters', () => {
        const totalIncomeLetters = postOffice.calculateTotalIncome('letter');
        expect(totalIncomeLetters).toBe(2 * Letter.price);
    });

    test('should calculate total income for small boxes', () => {
        const totalIncomeSmallBoxes = postOffice.calculateTotalIncome('small box');
        expect(totalIncomeSmallBoxes).toBe(2 * SmallBox.price);
    });

    test('should calculate total income for big boxes', () => {
        const totalIncomeBigBoxes = postOffice.calculateTotalIncome('big box');
        const expectedIncome = bigBox1.calculatePrice() + bigBox2.calculatePrice();
        expect(totalIncomeBigBoxes).toBe(expectedIncome);
    });
});
