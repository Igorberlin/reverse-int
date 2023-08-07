module.exports = function reverse(n) {
    const string = n.toString().replace(/-/g, "");
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result.push(string[string.length - 1 - i]);
    }
    return result.toString().replace(/,/g, "");
};
