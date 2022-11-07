"use strict";
function reverse(str) {
    let result = '';
    let strArr = str.split('');
    strArr.forEach(c => {
        result = c + result;
    });
    return result;
}
console.log(reverse("hello"));
// fibonaci
const calculateValue = (input) => {
    if (input < 1)
        return 0;
    if (input < 2)
        return 1;
    return calculateValue(input - 2) + calculateValue(input - 1);
};
// Usage example:
for (let n = 0; n < 10; ++n) {
    const value = calculateValue(n);
    console.log('f(' + n + ')=' + value);
}
