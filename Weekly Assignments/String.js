/* Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.*/

let str1 = "Hello World";
let splitStr1 = str1.split(" ");
console.log("The last Word is :" +splitStr1[1]);
//console.log("pop: "+splitStr1.pop());
let lastWordLength = splitStr1[1].length;
console.log(`Length of last word is ${lastWordLength}`);


/*Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.*/

let str2 = " fly me to the moon ";
let trimStr2=str2.trim().split(" ");
console.log(trimStr2);
console.log(`Last word is ${trimStr2[trimStr2.length-1]}`);
console.log(`Last word length is ${trimStr2[trimStr2.length-1].length}`);

/*Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. */


let param1 = "kivisha"
let param2 = "shakivi"
param1 = param1.split("").sort();
param2 = param2.split("").sort();

if(param1.length === param2.length)
{
for (let index = 0; index < param1.length; index++) {
    if(param1[index]!==param2[index]){
    console.log(`Its not an Anagram : ${param1} and ${param2}`);
    return false;
    }
    
}
console.log(`Its an Anagram : ${param1} and ${param2}`);
return true;
}
else{
    console.log("No of characters mismatch: Not an Anagram");
}