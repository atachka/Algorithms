var merge = function (nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    if (m > -1 && n > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    } else if (n > -1) {
      nums1[i] = nums2[n];
      n--;
    }
    i--;
  }
  return nums1;
};
