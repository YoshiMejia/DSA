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