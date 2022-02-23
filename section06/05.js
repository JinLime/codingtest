function ironStick (strings) {
    let result = 0;
    let stack = [];

    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === '(') stack.push(strings[i]);
        else {
            stack.pop();
            if (strings[i-1] === '(') result += stack.length;
            else result += 1;
        }
    }

    return result;
}

let strings = "()(((()())(())()))(())";

console.log(ironStick(strings));
