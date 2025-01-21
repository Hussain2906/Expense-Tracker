// function fibonacci (n){
//     const fib = [1,2]
//     for(let i = 2; i<=n; i++){
//         fib[i] = fib[i-1]+ fib[i-2]
//     }
//     return fib;
// }

// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))

// function isPrime (n) {
//     let result = n;
//     if(result <=2){
//         return false
//     }
//     if (result %2 === 0){
//         return false
//     }
//     return true;
// }
// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))
// console.log(isPrime(7))


// function isPowerOfTwo ( n ) {
//     for(let i=n; i<=1; i--){
//         if(n %2===0 && i === 1){
//             return ('it is power of 2')
//         }
//         return false
        
//     }
    
// }
// console.log(isPowerOfTwo(8))
// console.log(isPowerOfTwo(3))


function recurssiveFibonnaci ( n) {
    if (n <  2) {
        return n;
    }
    return recurssiveFibonnaci(n - 1) + recurssiveFibonnaci(n-2)
}
console.log(recurssiveFibonnaci(2))
console.log(recurssiveFibonnaci(4))
console.log(recurssiveFibonnaci(10))