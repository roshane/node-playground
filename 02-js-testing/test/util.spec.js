import {formatCustomerName} from '../src/index';


describe("formatCustomerName", () => {

    it('formatCustomerName should return full name for non-empty first & last name', () => {
        const actual = formatCustomerName('Jake', 'Sei');
        expect(actual).toBe('Jake Sei');
    });

    it('formatCustomerName should omit undefined input', () => {
        const actual = formatCustomerName('Jake');
        expect(actual).toBe('Jake');
    });


    it('formatCustomerName should omit null input', () => {
        const actual = formatCustomerName('Jake', null);
        expect(actual).toBe('Jake');
    });

    it('formatCustomerName should return empty string for undefiend arguments', () => {
        const actual = formatCustomerName();
        expect(actual).toBe('');
    });

});
