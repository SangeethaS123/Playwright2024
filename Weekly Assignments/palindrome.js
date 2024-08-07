/* Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false */

let originalString = "rotator";
let reverse = originalString.split("").reverse().join('');
console.log("Shortcut for reverse:" + reverse);

function checkPalindrome(str2){
    
    if(str2===reverse){
        console.log("String is palindrome:"+str2);
    }
        else {
            console.log("String is not palindrome:"+str2);
        }
    }
checkPalindrome('rotator');
//console.log(checkPalindrome('rotator'));




