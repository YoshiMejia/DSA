const recFunc = (num) => {
    if(num <= 0){
        console.log('All done!')
        return;
    }
    console.log(num)
    num--;
    recFunc(num)
}

recFunc(5);