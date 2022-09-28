//https://www.youtube.com/watch?v=HfIH3czXc-8

const unique = (arr) => {
    let mySet = new Set();
    for(let i = 0; i < arr.length; i++){
        mySet.add(arr[i])
    }
    return Array.from(mySet);
}