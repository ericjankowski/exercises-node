// O(sqrt(n)) time complexity
function isPrime(n){
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0){
        return false;
    }
    for (var i = 5; i*i<n; i = i+6){
        if (n % i == 0 || n%(i+2) == 0){
            return false;
        }
    }
    return true;
}

var n = 2;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 21;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 211
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 2111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 27277;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 211111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 1112921;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 2111111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 21111111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 11117077;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 211110707;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 211111111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 2111109937;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 2111111111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 21111110723;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 21111111111;
console.log(`${n} is prime: ${isPrime(n)}`);

var n = Number.MAX_SAFE_INTEGER;
console.log(`${n} is prime: ${isPrime(n)}`);