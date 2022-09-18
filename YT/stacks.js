let letters = [] // this is our stack

let word = 'racecar'

let reversed = ''

//adding letters from input to stack
for (let i = 0; i < word.length; i++){
    letters.push(word[i])
}

//use pop to remove letters from stack in reverse order
for (let i = 0; i < word.length; i++){
    reversed += letters.pop();
}

if (reversed === word){
    console.log(word + 'is a palindrome')
}else{
    console.log(word + 'is not a palindrome')
}