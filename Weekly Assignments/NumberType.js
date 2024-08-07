/**
1. Create a function named that takes a number as a parameter. 
2. Declare and initialize the variable. 
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, 
and to handle the case when the number is zero. 
4. Return the corresponding string value for each case. 
5. Call the function and print the result. 
 */

let num=0;
function numType(num){
    
    if(num>0){
        return "number "+num+" is positive";
    }   else if(num==0){
        return "number "+num+" is zero";
    }
        else{
            return  "number "+num+" is negative";
        }
}

console.log(numType(num));
console.log(numType(10));
console.log(numType(-8));