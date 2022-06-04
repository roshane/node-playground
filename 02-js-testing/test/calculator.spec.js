const { addTwoNumbers } = require('../src/calculator');

test('addTwoNumbers(1,2) should return sum = 3', () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
});