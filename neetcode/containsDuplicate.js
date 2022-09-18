const containsDuplicate = (nums) => {
    //Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
    return new Set(nums).size !== nums.length;
};

