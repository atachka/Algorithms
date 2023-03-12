let mergeKLists = (list) => {
  if (list.length === 0) {
    return null;
  }
  while (list.length > 1) {
    let a = list.shift();
    let b = list.shift();
    let mergedAB = mergeList(a, b);
    list.push(mergedAB);
  }
  return list[0];
};

let mergeList = (a, b) => {
  let newList = new ListNode();
  let current = newList;

  while (a !== null && b !== null) {
    if (a.val > b.val) {
      current.next = a;
      b = b.next;
    } else {
      current.next = b;
      a = a.next;
    }
  }
  current.next = a || b;

  return newList.next;
};
