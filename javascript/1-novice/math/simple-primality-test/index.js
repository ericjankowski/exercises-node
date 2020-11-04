// O(n) complexity
function isPrime(n){
    if (n <= 1){
        return false;
    }
    for (var i = 2; i < n; i++){
        if (n%i == 0){
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
var n = 2111111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 21111111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 211111111;
console.log(`${n} is prime: ${isPrime(n)}`);
var n = 2111111111;
console.log(`${n} is prime: ${isPrime(n)}`);

var n = Number.MAX_SAFE_INTEGER;
console.log(`${n} is prime: ${isPrime(n)}`);