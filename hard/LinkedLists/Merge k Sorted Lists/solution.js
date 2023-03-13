let mergeKLists = (list) => {
  if (list.length === 0) {
    return null;
  }
  let i = 0;
  while (true) {
    let a = list[i];
    let b = list[i + 1];
    let mergedAB = mergeList(a, b);
    if (list[i] === undefined || list[i + 1] === undefined) break;
    list.push(mergedAB);
    i += 2;
  }
  return list[list.length - 1] || null;
};

let mergeList = (a, b) => {
  let newList = new ListNode(0);
  let current = newList;
  while (a && b) {
    if (a.val > b.val) {
      current.next = b;
      b = b.next;
    } else {
      current.next = a;
      a = a.next;
    }
    current = current.next;
  }
  current.next = a || b;

  return newList.next;
};
