const calculator = require('./calculator');

test('Addition test', () => {
    expect(calculator.add(4, 6)).toBe(10);
});

test('Subtraction test', () => {
    expect(calculator.subtract(3, 5)).toBe(-2);
});

test('Multiplication test 1', () => {
    expect(calculator.multiply(7, 8)).toBe(56);
});

test('Multiplication test 2', () => {
    expect(calculator.multiply(10, 0)).toBe(0);
});

test('Division test 1', () => {
    expect(calculator.divide(25, 5)).toBe(5);
});

test('Division test 1', () => {
    expect(calculator.divide(77, 13)).toBeCloseTo(5.92);
});


