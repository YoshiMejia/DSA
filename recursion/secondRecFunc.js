function sumRange(num){
    //base case
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

sumRange(3);
//this will call the sumRange function recursively until the Base Case (the conditional on line2) is met

// so the call stack on this will be as follows

// sumRange(3) is called
// #=> 3 + sumRange (2)
            // 2 + sumRange(1)
                    // 1 
// Final output === (6);                    