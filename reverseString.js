function reverseString(string) {
    if (string.length == 0) return '';
    
    const lastLetter = string.slice(-1);
    const rest = string.slice(0, -1);
    return lastLetter + reverseString(rest);
}

module.exports = reverseString;