const arrayAnalysis = require('./arrayAnalysis');

test('array assignment to object', () => {
    const array = [1, 8, 3, 4, 2, 6];
    const obj = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    
    expect(arrayAnalysis(array)).toEqual(obj);
});

