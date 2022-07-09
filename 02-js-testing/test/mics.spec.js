import {Customer} from '../src/index';

describe("MicsTest", () => {

    it("should verify customers in the array", () => {
        const customerList = [
            new Customer('roshane', 20),
            new Customer('perera', 23)
        ];

        expect(customerList).toEqual(
            expect.arrayContaining([new Customer('roshane', 20)])
        );

    })
});