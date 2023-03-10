var buddyStrings = function (s, goal) {
  if (s.length != goal.length) {
    return false;
  }
  let [dif, chars] = [[], new Set(s)];
  for (i in s) {
    if (s[i] != goal[i]) {
      dif.push([s[i], goal[i]]);
    }
  }
  return (
    (dif.length == 2 && dif[0].join() == dif[1].reverse().join()) ||
    (dif.length == 0 && chars.size != s.length)
  );
};
