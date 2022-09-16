
function validAnagram(first,second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};
    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        //if letter exists, increment. otherwise, set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        //cant find letter or letter is zero, the it isnt an anagram
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

//this function will first add the values to the 'lookup' object as keys and increment the values for however many times its in the first string. then, on the second loop, it will subtract the found letters until its left with 0. if the letter isnt found as a key, it will return false.