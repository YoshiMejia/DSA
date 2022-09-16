//implement countUniqueValues. accepts a sorted array and counts the unique values in the array. there can be negative numbers but it will always be sorted.

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

i
[1,1,2,3,3,4,5,6,6,7]
    j