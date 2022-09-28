// linked list looks like this
// Node {
//       val: 5,
//       next: Node { val:6, next: Node { val: 7, next: null }}}

//the goal is to reverse the .next pointers

// create prev set to null so that we can take what was the head (5) and set its next property to prev (null)
// so with each iteration we'll set the next property for each node to the nodes that came before it

const reverseLinked = (head) => {
    let next = null;
    //set to null bc it'll be the new tail
    let prev = null;
    while(head !== null){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    //when we get to the tail, it'll be the new head so we return prev
    return prev;
}

// console.log'ing of the above while loop 

// next = head.next #=> [2,3,4,5]
// head.next = prev #=> null
// prev = head #=> [1]
// head = next #=> [2,3,4,5]

// next = head.next #=> [3,4,5]
// head.next = prev #=> [1]
// prev = head #=> [2,1]
// head = next #=> [3,4,5]

// next = head.next #=> [4,5]
// head.next = prev #=> [2,1]
// prev = head #=> [3,2,1]
// head = next #=> [4,5]

// next = head.next #=> [5]
// head.next = prev #=> [3,2,1]
// prev = head #=> [4,3,2,1]
// head = next #=> [5]

// next = head.next #=> null
// head.next = prev #=> [4,3,2,1]
// prev = head #=> [5,4,3,2,1]
// head = next #=> null
