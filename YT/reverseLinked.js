// linked list looks like this
// Node {
//       val: 5,
//       next: Node { val:6, next: Node { val: 7, next: null }}}

const reverseLinked = (head) => {
    let next = null;
    let prev = null;
    while(head !== null){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// console.log'ing of the above while loop 
// next = head.next [2,3,4,5]
// head.next = prev null
// prev = head [1]
// head = next [2,3,4,5]
// next = head.next [3,4,5]
// head.next = prev [1]
// prev = head [2,1]
// head = next [3,4,5]
// next = head.next [4,5]
// head.next = prev [2,1]
// prev = head [3,2,1]
// head = next [4,5]
// next = head.next [5]
// head.next = prev [3,2,1]
// prev = head [4,3,2,1]
// head = next [5]
// next = head.next null
// head.next = prev [4,3,2,1]
// prev = head [5,4,3,2,1]
// head = next null
