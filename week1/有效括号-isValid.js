function isValid(s) {
    let stack = [];
    let tmpDict = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    for(let i = 0; i < s.length; i++) {
        if(stack.length > 0) {
            if(stack[stack.length - 1] == tmpDict[s[i]]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length == 0;
}
