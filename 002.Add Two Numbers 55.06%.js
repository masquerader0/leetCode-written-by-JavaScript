/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var List=new ListNode(0);
    var head=List;
    var carry=0;
    var sum=0;
    while(l1||l2||sum>0)
        {
            if(l1)
                {
                    sum += l1.val;
                    l1=l1.next;
                }
            if(l2)
                {
                    sum += l2.val;
                    l2=l2.next;
                }
            if(sum>=10)
                {
                    carry=1;
                    sum=sum-10;
                }
            head.next=new ListNode(sum);
            head=head.next;
            sum=carry;
            carry=0;
        }
    return List.next;
};