/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let res = dummy

    while (list1 && list2) {

            if (list1.val < list2.val) {
                dummy.next = list1
                list1 = list1.next
            } else {
                dummy.next = list2
                list2 = list2.next
            }

        dummy = dummy.next
    }

    if (list1) {
        dummy.next = list1
    }

    else if (list2) {
        dummy.next = list2
    }

    return res.next
};