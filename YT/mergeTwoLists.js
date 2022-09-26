const mergeTwoLists = (l1, l2) => {
    //initialize a node element
    const dummy = new ListNode(-Infinity);
    //pointer to reference dummy node to return at end
    let prev = dummy;
    //ensure both values are truthy, while they are...
    while(l1 && l2) {
        if(l1.val <= l2.val){
            prev.next = l1;
            prev = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            prev = l2;
            l2 = l2.next;
        }
    }
    if(!l1) prev.next = l2;
    if(!l2) prev.next = l1;

    return dummy.next;
}

//https://www.youtube.com/watch?v=IHY6qcVq9Wo&t=646s