/*
    Difficulty: Easy    

    Extend your linked list class with a new method that returns the node at the mid point of the linked list using no more than one loop.

    Tip: 
    1) If linked list contains an even number of items, returning the one before or one after the center is acceptable.

    Samples:
    1) if linked list contains "1, 2, 3, 4, 5"
    list.centerNode() == 3;
    2) if linked list contains "1, 2, 3, 4"
    list.centerNode() == 3 || list.centerNode() == 2;
    3) if linked list contains English alphabet
    list.centerNode() == m || list.centerNode() == "n";
*/
//import {LinkedListNode, LinkedList} from './linkedList';

let list = new LinkedList();
let prev = null;
for (let letter of "12345") {
    let node = new LinkedListNode(letter);
    if (prev) {
        //let predecessor  = prev;
        prev.next = node;
    } else {
        list.start = node;
    }

    prev = node;
}

//console.log(`list:`, list);
console.log(`print nodes:`, list.printNodes());
console.log(`find mid node:`, list.findMidNode());
