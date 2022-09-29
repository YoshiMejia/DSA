const recFunc = (num) => {
    if(num <= 0){
        console.log('All done!')
        // return statement here is for breaking out of the loop, it doesn't return anything
        return;
    }
    // log the curr value of num
    console.log(num)
    // decrease it for the next function call
    num--;
    // call this function again until the conditional above is true
    recFunc(num)
}

recFunc(5);