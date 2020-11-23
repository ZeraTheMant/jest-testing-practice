const caesarCipher = require('./caesarCipher');

test("take aloha with offset 2 and return cnqjc", () => {
    expect(caesarCipher('aloha', 2)).toBe('cnqjc');
});

test("take Bond, James Bond. with offset 3 and return Erqg, Mdphv Erqg., ignoring punctuation", () => {
    expect(caesarCipher('Bond, James Bond.', 3)).toBe('Erqg, Mdphv Erqg.');
});

test("take za with offset 1 and return ab", () => {
    expect(caesarCipher('za', 1)).toBe('ab');
});

test("take az with offset -1 and return zy", () => {
    expect(caesarCipher('az', -1)).toBe('zy');
});