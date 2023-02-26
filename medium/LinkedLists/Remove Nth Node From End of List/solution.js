let removeNthFromEnd = function (head, n) {
  const root = new ListNode(0);
  root.next = head;
  let front = root;
  let back = root;
  while (n >= 0) {
    front = front.next;
    n--;
  }
  while (front) {
    front = front.next;
    back = back.next;
  }
  back.next = back.next.next;
  return root.next;
};
