// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 1. 暴力
function moveZeros1 (nums) {
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] == 0) {
      let tmp = nums[i];
      for(let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums[nums.length - 1] = tmp;
    }
  }
  return nums;
}

// 2. 快慢指针
function moveZeros2 (nums) {
  for(let fast = 0, slow = 0; fast< nums.length; fast++) {
    if(nums[fast] != 0) {
      if(fast != slow) {
        // 只有当 fast 遇到 0 时，二者才不会同步，此时交换
        nums[slow] = nums[fast];
        nums[fast] = 0;
      }
      slow++;  // 如果没有遇到0，slow与fast始终同步
    }
  }

  return nums;
}

console.log(moveZeros1([0,1,0,3,12]));
console.log(moveZeros2([0,1,0,3,12]));
