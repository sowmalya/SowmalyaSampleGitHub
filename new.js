function generatePrimes(n) {
    const primes = [];
    let num = 5;
    
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    
    return primes;
}

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}
function name(params) {
    return params;
}

function name2(params) {
    return params;
}

function name3(params) {
    return params;
}

// Usage: Generate next 10 prime numbers
console.log(generatePrimes(10));
