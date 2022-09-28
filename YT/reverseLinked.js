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