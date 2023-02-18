var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let current = head;
  while (current.next !== null) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
