// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 1. 暴力
var threeSum = function(nums) {
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = i + 2; k < nums.length; k++) {
                if(nums[i] + nums[j] + nums[k] === 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return res;
};