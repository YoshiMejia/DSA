const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode(0);
    // use as reference to be returned at end
    let head = dummy
    // init while loop with conditional ensuring that both lists are not null
    while (l1 && l2){
        //check if the val of l1 is less or equal to l2
        if(l1.val <= l2.val){
            //if the val for l1 is less than or equal to l2, set the 'next' node reference for the dummy list to l1
            dummy.next = l1;
            //by making l1 equal to it's 'next' node, you're clearing out the current head on l1 and adding onto the tail
            l1 = l1.next;
        } else {
            //else, if the val for l2 is greater, make that value the next node for the dummy list
            dummy.next = l2;
            //by making l2 equal to it's 'next' node, you're clearing out the current head on l2
            l2 = l2.next;
        }
        //update dummy to its next val so we can add onto the tail of dummy
        dummy = dummy.next;
    }
    //now, outside of the while loop, this means that either l1 or l2 is now null
    //check if either is null and then set the rest of its list to the rest of the dummy list
    //since theyre both sorted lists, you can add all the rest of either list to finish it off
    if(!l1) dummy.next = l2;
    if(!l2) dummy.next = l1;
    //return the reference list at end
    return head.next;
}
//https://www.youtube.com/watch?v=cXxf46pbvOI


// const mergeTwoLists = (l1, l2) => {
//     //initialize a node element
//     const dummy = new ListNode(-Infinity);
//     //pointer to reference dummy node to return at end
//     let prev = dummy;
//     //ensure both values are truthy, while they are...
//     while(l1 && l2) {
//         if(l1.val <= l2.val){
//             prev.next = l1;
//             prev = l1;
//             l1 = l1.next;
//         } else {
//             prev.next = l2;
//             prev = l2;
//             l2 = l2.next;
//         }
//     }
//     if(!l1) prev.next = l2;
//     if(!l2) prev.next = l1;

//     return dummy.next;
// }

// //https://www.youtube.com/watch?v=IHY6qcVq9Wo&t=646s