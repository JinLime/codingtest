const fs = require("fs");

// 백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';
let input = fs.readFileSync(readFileSyncAddress).toString().trim();

// VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = "input.txt";
// let input = fs.readFileSync(readFileSyncAddress).toString();

// 인풋 처리
let strings = input;

ironStick(strings);

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

    console.log(result);
}