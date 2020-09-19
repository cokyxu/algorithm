// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

// 1. 暴力法
var maxArea1 = function(height) {
    let max = 0;;
    for(let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            max = Math.max(max,  Math.min(height[i], height[j]) * (j - i));
        }
    }
    return max;
};

// 2. 只移动最短的垂线
var maxArea2 = function(height) {
    let minx = 0;
    let maxx = height.length - 1;
    let max = 0;
    while(minx < maxx) {
        if(height[minx] < height[maxx]) {
            max = Math.max(max, height[minx] * (maxx - minx));
            minx++;
        } else {
            max = Math.max(max, height[maxx] * (maxx - minx));
            maxx--;
        }
    }
    return max;
};

// 3. 超精简的解法（与 2 本质相同）
var maxArea2 = function(height) {
    let i1 = 0;
    let i2 = height.length - 1;
    let max = 0;
    while(i1 < i2) {
        max = height[i1] < height[i2] ?
            Math.max(max, height[i1++] * (i2 - i1)):
            Math.max(max, height[i2--] * (i2 - i1))
    }
    return max;
};
