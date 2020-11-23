function arrayAnalysis(array) {
    const total = array.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    const length = array.length;
    const average = total / length;
    
    return {
        average: average,
        min: Math.min(...array),
        max: Math.max(...array),
        length: length
    }
}

module.exports = arrayAnalysis;