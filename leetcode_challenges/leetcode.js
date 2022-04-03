/* Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

var twoSum = function(nums, target) {


    for(let i =0; i < nums.length; i++){
        for(let j = i +1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                // return the INDEX of i and j 
               return [i,j];
           }
        }
        
    }

};

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

*/
var romanToInt = function(s) {
    
    // MAP all keys and val
    let symb = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    
    let val = 0;
    
    for(let i = 0; i < s.length; i++){
        //if the next roman numeral is larger, then we know we have to subtract this number
        if(symb[s[i]] < symb[s[i+1]]){
            val -= symb[s[i]]; 
        }
        else{
               //otherwise, add like normal. 
            val += symb[s[i]];
        }
    }

  return val; 
    
};

/* 
Given the head of a singly linked list, return true if it is a palindrome.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false

Revision point 1: A linked list is a data structure that consists of two properties; next which points to the next node in the list, and val which tells you the current node’s value.

Revision point 2: A palindrome is something that is the same when reversed. For example, “dad” is a palindrome, as is “12321”, but “test” is not, and nor is “123”.



*/

var isPalindrome = function(head) {


  // Store all values from the LINKED LIST in an array
    let arr= []; 
    while(head){
        arr.push(head.val);
        head = head.next;
    }

    // Check if the list of values are a palindrome
    let left = 0;
    let right = arr.length -1;
    while (left < right){
        if(arr[left] != arr[right]){
            return false;
        }
        // if it's false then continue transvering. left --> right  <---
        left++;
        right--;
    }
    return true;
    
    
    
    
    
};