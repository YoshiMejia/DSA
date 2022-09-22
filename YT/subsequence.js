const subsequence = (s,t) => {
    let j = 0; //a pointer for t string
    for(let i = 0;i < s.length; i++){
        if(j > t.length) return false; // if the len(t) is less than pointer j value the subseq is not possible
        if(s[i] !== t[j]){ // if the values at the pointers do not match decrease i to stay at same letter and inc j to next value
            i--;
        }
        j++;
    }
    return true // if end is reached return true
}