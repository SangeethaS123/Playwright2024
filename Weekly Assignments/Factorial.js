/**
 * 
1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer, 
and returns its factorial. 
2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative 
number is passed, the function should throw an error. 
3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer 
from 2 up to `n`. 
4. Include example calls to the `factorial` function with different integers to demonstrate the 
function’s functionality. Include at least one example where an error is thrown due to a negative 
input.
 */
//General factorial
/* let n = 5;

function testfactorial(n) {
    let result = 1
    if (n < 0){
        return -1;
     }
     else if(n == 0){
        return 1;
     }
    for(let x= 2; x <= n; x++){
        result = result * x;
    }
    return result;
   
}
console.log(testfactorial(n)); */

function fact(n) {
    let result=1;
    if(n<0){
        return -1;
    }
        else if(n==0){
            return 1;
        }
            for(let i=n;i>1;i--){
                result=result*i;            
               
                
        }
        console.log(result);
    }

console.log(fact(5));
console.log(fact(6));
console.log(fact(3));
console.log(fact(-1));
console.log(fact(0));