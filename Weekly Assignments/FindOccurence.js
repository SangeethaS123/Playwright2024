/**
Assignment Details:  
Find the number of occurrences. 
Given the array, const nums = [2,4,5,2,1,2]; 
if const k = 2, then output >> 3 
 
Assignment Requirements:  
1. Initialize count to 0. 
2. Loop through the array `nums`. 
3. If the element equals `k`, increment count. 
4. Return the count of `k` in `nums`.
 */

 const nums = [2,4,5,2,1,2,5];

 let result={};

 for (let i = 0; i < nums.length; i++) {
       
    if(!result[nums[i]])
        result[nums[i]] = 0;
    // ++result[num[i]];
    result[nums[i]]++;

}
 /* let result ={};

    for (let k of nums) {
        if(result[k]){
            result[k] += 1;
        } else {
            result[k] = 1;
        }
    }  */
    console.log(result[2]); 
 

    

 