function getPrime(n) {
	const primes = [];

	for (let i = 2; primes.length < n; i++) {
        let flag = true;
        for (let counter = 0; counter < i; counter++) {
            if (i % counter === 0) {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            primes.push(i)
        };
	}

    return primes;
}

console.time()
const n = Number(process.argv2);
const primes = getPrime(n);
console.log(primes);
console.timeEnd()