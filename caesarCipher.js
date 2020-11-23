function isLetter(character) {
    const pattern = new RegExp('[A-Za-z]');
    return pattern.test(character);
}

function transformLetter(character, offset) {
    const isLowerCase = (character == character.toLowerCase()) ? true : false;
    const tempTransformToUpperCase = character.toUpperCase(); // calculate offset in uppercase for ease
                                                              
    const charCode = tempTransformToUpperCase.charCodeAt();   // edge cases: 'A' is 65 and 'Z' is 90
    let offsetCharCode = charCode + offset;
    
    if (offsetCharCode > 90) offsetCharCode = (offsetCharCode - 91) + 65; //for wrapping around
    if (offsetCharCode < 65) offsetCharCode = 91 - (65 - offsetCharCode);
    
    const newChar = String.fromCharCode(offsetCharCode);
    return (isLowerCase) ? newChar.toLowerCase() : newChar.toUpperCase();
}

function caesarCipher(string, offset) {
    if (string.length == 0) return '';
    
    let currentChar = string.slice(0, 1);
    if (isLetter(currentChar)) {
        currentChar = transformLetter(currentChar, offset);
    }
    
    return currentChar + caesarCipher(string.slice(1), offset);
}

module.exports = caesarCipher;