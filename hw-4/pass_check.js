function getPasswordChecker(password) {
    return function(guess) {
        if (password === guess) {
            return true;
        }
        return false;
    }
}

const check = getPasswordChecker('1234');

console.log(check('111'));
console.log(check('222'));
console.log(check('1234'));