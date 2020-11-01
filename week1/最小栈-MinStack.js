/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.mStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.mStack.length > 0) {
        if(x <= this.mStack[this.mStack.length - 1]) {
            this.mStack.push(x);
        }
    } else {
        this.mStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let p = this.stack.pop();
    if(this.mStack.length > 0) {
        if(p == this.mStack[this.mStack.length - 1]) {
            this.mStack.pop();
        }
    }
    return p;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mStack[this.mStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

