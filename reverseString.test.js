const reverseString = require('./reverseString');

test('take abcd and return dcba', () => {
    expect(reverseString('abcd')).toBe('dcba');
});

test('take Step on no pets and return step on no petS', () => {
    expect(reverseString('Step on no pets')).toBe('step on no petS');
});

test("take ' ' and return ' '", () => {
    expect(reverseString(' ')).toBe(' ');
});