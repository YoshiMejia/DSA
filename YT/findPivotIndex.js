// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

 

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3

// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11


// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.


// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

const findPivotIndex = (nums) => {
    let totalSum = 0;
    let leftSum = 0;
    //calculate total of the entire array
    nums.forEach((num) =>{
        totalSum += num
    })
    //for loop dependent on the length of the array
    for(let i = 0; i < nums.length; i++){
        //if the totalSum minus the current value of leftsum and minus the current number being iterated on from nums equal to the left sum?
        if(totalSum - leftSum - nums[i] === leftSum){
            //if it is equal, return the index of that number
            return i
        }
        //if not, that conditional is skipped and the line below runs, which adds the current element to the leftSum's value
        leftSum += nums[i]
    }
    // if this line is reached, it means the if statement wasn't hit and there is no index that satisfies those conditions
    return -1;
}

//https://www.youtube.com/watch?v=lIliBTgIGrQ