const calculator = (() => {
    const add = (addend1, addend2) => addend1 + addend2;
    const subtract = (minuend, subtrahend) => minuend - subtrahend;
    const multiply = (multiplicand1, multiplicand2) => multiplicand1 * multiplicand2;
    const divide = (dividend, divisor) => dividend / divisor;
    
    return {
        add,
        subtract,
        multiply,
        divide
    }
})();

module.exports = calculator;