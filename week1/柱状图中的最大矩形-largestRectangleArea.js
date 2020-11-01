 
 /*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start，加入哨兵，精简代码
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // 加入哨兵，这样就不需要特殊处理了
    heights.unshift(0);
    heights.push(0);
    let stack = [0];
    var area = 0;

    for(let i = 0; i < heights.length; i++) {
        // 因为第一个元素是 0， 所以stack中始终有值
        while(heights[i] < heights[stack[stack.length - 1]]) {
            let curHeight = heights[stack.pop()];
            let curWidth = i - stack[stack.length - 1] - 1;
            area = Math.max(area, curHeight * curWidth);
        }
        // 因为heights最后一个元素是0，所以也不用考虑最后一个元素的处理
        stack.push(i);
    }

    return area;
};
 
 
 
 
 
 
 
 
 
 
 
 // 我的已通过的垃圾代码
 // 借用一个栈来缓存，思路参考：https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/bao-li-jie-fa-zhan-by-liweiwei1419/
 var largestRectangleArea = function(heights) {
    let stack = [];
    var area = 0;

    for(let i = 0; i < heights.length; i++) {
        while(stack.length != 0 && heights[i] < heights[stack[stack.length - 1]] ) {
            let top = stack.pop();
            let lastIndex = stack.length != 0 ? stack[stack.length - 1] : -1;
            area = Math.max(area, heights[top] * (i - lastIndex - 1));
        }
        stack.push(i);
    }

    while(stack.length > 0) {
        if(stack.length == 1) {
            let h = heights[stack.pop()];
            area = Math.max(area, h * heights.length);
        } else {
            let top = stack.pop();
            let lastIndex = stack.length != 0 ? stack[stack.length - 1] : -1;
            area = Math.max(area, heights[top] * (heights.length - lastIndex - 1));
        }
    }

    return area;
};


// 暴力
// var largestRectangleArea = function(heights) {
//   let area = 0;
//   for(let i = 0; i < heights.length; i++) {
//     let leftWidth = 0;
//     let rightWidth = 0;
//     for(let leftIndex = i - 1; leftIndex >= 0; leftIndex--) {
//       if(heights[leftIndex] < heights[i]) {
//         break;
//       }
//       leftWidth++;
//     }

//     for(let rightIndex = i + 1; rightIndex < heights.length; rightIndex++) {
//       if(heights[rightIndex] < heights[i]) {
//         break;
//       }
//       rightWidth++;
//     }

//     area = Math.max((leftWidth + rightWidth + 1) * heights[i], area);
//   }

//   return area;
// };