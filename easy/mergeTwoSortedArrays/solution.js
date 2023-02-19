var merge = function (nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    console.log(nums1);
    if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    } else if (n > -1) {
      nums1[i] = nums2[n--];
    }
    i--;
  }
};
