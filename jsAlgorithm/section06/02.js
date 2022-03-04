function delParenthesisArr (strings) {
    let result = [];
    let stack = [];

    for (let x of strings) {
        if (x === ")") {
            while (stack.pop() !== "(");
        } 
        else stack.push(x);
    }
    result = stack.join('');

    return result;
}

let strings = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

console.log(delParenthesisArr(strings));
