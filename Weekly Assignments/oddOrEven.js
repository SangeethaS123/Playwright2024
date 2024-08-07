/**
1. Create a function named `isOddOrEven` that takes a number as a parameter   
2. Declare and initialize the variable   
3.  Use a conditional statement to check if the number is divisible by 2  
4. Call the function and print the result 
 */
const n=5;
function isOddOrEven(n){
    
    if(n%2==0){
        console.log("The given number "+n+" is : even");
    }
    else{
    console.log("The given number "+n+" is : odd");
    }
    
}

isOddOrEven(n);
isOddOrEven(10);
isOddOrEven(-1);
isOddOrEven(0.07);
isOddOrEven(1.206);