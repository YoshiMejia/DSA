//this pattern involves creating a window which can either be an array or number from one position to another
//depending on a certain condition, the window either increases or closes (and a new window is created)

// define the maxSubarraySum function which accepts an array of integers and a number called n

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,4,5,6,8,5,3,5,5,7,9], 3))