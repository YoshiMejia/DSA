
const isIsomorphic = function(s, t) {
    //define 2 empty objects to hold the letters and index counts
    const objS = {},
        objT = {}
    for(let i = 0; i < s.length; i++){
        // if the character found at s[i] is NOT inside of objS, and the character at t[i] is NOT in objT
        if(!(s[i] in objS) && !(t[i] in objT)){
            //set the count at that key in the object to the index of the other string at the current index
            objS[s[i]] = t[i],
            objT[t[i]] = s[i]
        } else {
            //else, if those characters ARE found in the objects
            // if the value associated to the key in this current index for string S is NOT EQUAL to the character at string T, return false
            if(objS[s[i]] !== t[i]) return false
        }
    }
    // return true if all other tests have passed
    return true
};

