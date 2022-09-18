//Given 2 strings 's' and 't' return true if 't' is an anagram of 's' and 'false' otherwise

const validAnagram = (s,t) => {
    //immediately return false if the lengths are not equal, as this cannot be a valid anagram
    if(s.length !== t.length){
        return false
    }

    const sLetters = {}
    //define an empty object to hold each string characters
    
    //loop through the first string input
    for(let char of s){
        //if the current character does not already exist in the object
        if(!sLetters[char]){
            //set it equal to 1, meaning it has appeared once in the string
            sLetters[char] = 1
        }else {
            //else, if it already exists in this obj, increment it
            sLetters[char]++
        }
    }
    //now, iterate through the second input string
    for(let char of t){
        //if this letter is not found in the obj, return false. if its not in the other obj at all it cannot be a valid anagram.
        if(!sLetters[char]){
            return false
        }
        
        //if its in the obj, decrement the count
        if(sLetters[char]){
            sLetters[char]--
        }
        //if the instance count for this character is 0, erase the key/pair value 
        if(sLetters[char] === 0){
            delete sLetters[char]
        }
    }
    //this is a boolean, if sLetters obj is empty once the function exits both loops, then it will return true. if it still have a value it will return false 
    return Object.keys(sLetters).length === 0

}