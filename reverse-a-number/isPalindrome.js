/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let number = x;
    
    let lastDigit = 0, result = 0;
    while(number > 0) {
        lastDigit = number % 10; // get the last digit
        result = (result * 10) + lastDigit; // append last digit to reverse
        number = number / 10; // get rid of last digit
    }
    
    return result === x;
};