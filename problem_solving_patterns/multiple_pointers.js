// //definition: creating pointers/values that correspond to an index/position and move towards the beginning/end/middle based on a certain condition.
// //very efficient for solving problems w minimal space complexity

// //write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. return an array that includes both values tha sum to zero OR undefined if a pair does not exist.

// * in the second statement else if (sum > 0) the function applies the logic that, if the sum is greater than 0, it needs to pick a lesser number, IE, a number to the left of the currently picked number represented by the right index in the array arr. If the comparison number in the arr that the right variable indexes is say 4, it should pick the next lesser currently available number in the array, decreasing the right variable.

// * the last comparison knowing that sum is greater than 0, tries to approach the 0 value increasing the left variable/pointer, thus increasing the value that left will point in the arr array.

function sumZero(arr){
    //left will be the index for the first element in the array
    let left = 0;
    //right will be the last element's index
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}