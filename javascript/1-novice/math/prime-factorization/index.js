// Time complexity: O(sqrt(n))

function primeFactors(n){
    var result = '';
    while(n%2 == 0){
        result = result + '2 '
        n = n/2;
    }
    for (var i = 3; i*i <= n; i = i+2) {
        while (n % i == 0){
            result = result + `${i} `
            n = n/i;
        }
    }

    if (n > 2) {
        result = result + `${n} `
    }
    
    return result;
}

var n = 10;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 100;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 101;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 1000;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 1001;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 10000;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 10001;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 100000;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 100001;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 1000000;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 1000001;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 10000000;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 10000001;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 100000000;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = 100000001;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);

n = Number.MAX_SAFE_INTEGER;
console.log(`Prime factors of ${n}: ${primeFactors(n)}`);