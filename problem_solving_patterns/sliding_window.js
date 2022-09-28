//this pattern involves creating a window which can either be an array or number from one position to another
//depending on a certain condition, the window either increases or closes (and a new window is created)

// define the maxSubarraySum function which accepts an array of integers and a number called n

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    //immediately return null if the arg entered is larger than the array
    if(arr.length < num) return null;
    // set the max sum to the first "window" sum
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    //temporary reference to the sum we just got
    tempSum = maxSum;
    // now that the first window was added under max sum, create a loop that begins at the element right outside the window established above
    for(let i = num; i < arr.length; i++){
        // tempsum is now removing the first element from the maxSum sum ( - arr[i - num]) and adding the next element( + arr[i]), thus *sliding* the window
        tempSum = tempSum - arr[i - num] + arr[i];
        //Math.max returns whichever is largest of these two args
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,4,5,6,8,5,3,5,5,7,9], 3))