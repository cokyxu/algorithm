// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶


// 1. 笨方法，找最近重复，得到 f(n) = f(n - 1) + f(n - 2)，然后递归
var climbStairs1 = function(n) {
    if(n == 1) {
        return 1;
    }
    if(n == 2) {
        return 2;
    }

    return climbStairs1(n - 1) + climbStairs1(n - 2)
};

// 2. 非递归解法（递归会爆栈）
var climbStairs2 = function(n) {
    if(n == 1) {
        return 1;
    }
    if(n == 2) {
        return 2;
    }

    let last2 = 1;
    let last1 = 2;
    let types = 0;

    for(let i = 3; i <= n; i++) {
        types = last2 + last1;
        last2 = last1;
        last1 = types;
    }

    return types;
};
