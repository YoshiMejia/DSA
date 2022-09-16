// Frequency counters use objects/sets to collect values/frequencies. This often avoids the need for nested loops or O(n2) operations with arrays/strings

//same will check if the values in one array are the square root values for the first array
function same(arr1, arr2){
//immediately check if the lengths are the same, return false if not.
    if(arr1.length !== arr2.length){
        return false;
    }
    // define 2 empty objects to hold the checked values of each array
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        //for each element in arr1, check if it exists inside of frequencyCounter1 as a key. If frequencyCounter1[val] is truthy it will return its value OR(||) if there is no value for frequencyCounter1[val] the 0 is returned. Then whichever value is returned, +1 is will be added
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    //now loop through the freq1 obj
    for(let key in frequencyCounter1){
        //if the squared value isn't found in the other freq obj, immediately return false
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}