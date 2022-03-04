function correctParenthesis (strings) {
    let result = "YES";
    let stack = [];

    for (let x of strings) {
        if (x === '(') stack.push(x);
        else {
            if (stack.length === 0) return "NO";
            stack.pop();
        }
    }
    if (stack.length > 0) return "NO";
    
    return result;
}

let strings = "(()(()))(()";

console.log(correctParenthesis(strings));
