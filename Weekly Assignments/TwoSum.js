/* Assignment Details: 
Given the array, const nums = [2, 4, 7, 8, 11, 14]; 
const target = 18;
return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5)
Assignment Requirements: 
1. Initialize an empty array `results`.
2. Use a nested loop to iterate over `nums` array elements.
3. Check if the sum of two distinct elements equals `target`.
4. If true, add their indices to `results`.
5. Return `results` containing pairs of indices. */

/* what is two sum ?
Two Sum Problem in JavScript equals finding a pair of indices present in the array of numbers given as an input that adds up to the target
sum which is also provided as an input by the user.
Given an array of integers and target sum , we will traverse the array of numbers to find out the pair of numbers ,
there can be one or more pairs of numbers that sums up to the target value given as an input source . Once the pair of numbers are found
we can look for their indices to solve the problem statement in whole.
The small catch here is each input value present in an array of numbers can be used once only
and you cannot use the same element twice for summing up , where the resultant pairs can be returned in any order.
*/

const nums = [2, 4, 7, 8, 11, 14]; 
//const target = 18;
let result =[];

function TwoSum(target) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
              if(nums[i]+nums[j]===target){
                return result=[i,j];
        }
    } 
    
    }
   
 }
console.log(TwoSum(18));
console.log(TwoSum(15));
