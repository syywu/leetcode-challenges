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
                // return the INDEICES -i and j 
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

/* 
Random Notes

Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 
Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

*/

// OBJECT/HASHMAP

var canConstruct = function(ransomNote, magazine) {
    
    //create an obj to keep count of letters of magazine
    //  { key : character , value: countOfOccurrence};
    let storage ={};
    
    //for loop to transverse down magazine
    // 1st: Create the Map with magazine's character occurrence and count.
    for(let i = 0; i < magazine.length; i++){
        let magChar = magazine[i];
        storage[magChar] = storage[magChar] || 0;
        storage[magChar]++;
        };
    
//for loop to transverse through ransomNote
// 1. find values of ransom note's characters in the map        
    for(let j = 0; j < ransomNote.length; j++){
        let ranChar = ransomNote[j];
        if(!storage[ranChar]){
            return false;    
        }
        // 2. Reduce the count of the character(key)'s value by 1
        storage[ranChar]--;
    }
    return true;
};



/* 
1762. Buildings With an Ocean View
Medium

There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.

The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.

Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

 

Example 1:

Input: heights = [4,2,3,1]
Output: [0,2,3]
Explanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.
Example 2:

Input: heights = [4,3,2,1]
Output: [0,1,2,3]
Explanation: All the buildings have an ocean view.
Example 3:

Input: heights = [1,3,2,4]
Output: [3]
Explanation: Only building 3 has an ocean view.
 

Constraints:

1 <= heights.length <= 105
1 <= heights[i] <= 109
*/

function oceanView(buildings){

    for(let i = 0
    ; i < buildings.length; i++){
        if(buildings[i] > building[i+1]){
            return [i, i+1];
        }
    }

}

/* 
66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.


*/

var plusOne = function(digits) {

    //loop backwards to get to the last elem first and in the event of a carry on
    // digits.length -1 as we are looping through index
   for(let i = digits.length -1; i >= 0; i--){
       if(digits[i] < 9){
           digits[i]++;
         return digits;
            //do nothing further and return digits immediately
       }
       else{
           //if digit is 9 then return 0
               digits[i] = 0;
           }
   }
    // add 1 to the beginning of an arr in the event of [9,9] ---> [1,0,0]
    digits.unshift(1);
    return digits;
};

// solution 2

const plusOne = (digits) => {
    for(i=digits.length -1; i>=0; i--) {
        digits[i]++;
        // if digits is 10 then digits is 0
        const takeOne = digits[i] === 10
        if(takeOne) {
            digits[i] = 0;
            // if digit is 0 then add in to start of array
            if(i === 0) {
                digits.unshift(1);
            }
        } else {
            break;
        }
    }
    return digits;
};

//solution 3

function plusOne(digits){
    for(let i = digits.length -1; i >= 0; i--){
        digits[i]++;
        if(digits < 10){
            return digits; 
        }
        else{
            //49
            //if it's 9 then digits[i] is 0. 4 + 1 = 5. sice 5 is less than 10 it will return digits arr immediately
            digits[i] = 0; 
        }
    }
    //199
    digits.unshift(1);
    return digits;
}

