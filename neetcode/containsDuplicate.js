const containsDuplicate = (nums) => {
    //Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
    return new Set(nums).size !== nums.length;
};

let nums = [1,2,2,2,3,4,5]
new Set(nums) // #=> Set(5) {1, 2, 3, 4, 5}
//therefore the .size !== nums.length; boolean statement would return true/false 

