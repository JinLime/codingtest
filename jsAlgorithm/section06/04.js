function postfixCalculation (strings) {
    let result = 0;
    let stack = [];

    for (let x of strings) {
        if (!isNaN(x)) stack.push(Number(x));
        else {
            let rt = stack.pop();
            let lt = stack.pop();
            if (x === '+') stack.push(lt + rt);
            else if (x === '-') stack.push(lt - rt);
            else if (x === '*') stack.push(lt * rt);
            else if (x === '/') stack.push(lt / rt)
        }
    }
    result = stack[0];

    return result;
}

let strings = "352+*9-";

console.log(postfixCalculation(strings));
