const fs = require("fs");

// 백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = "input.txt";
// let input = fs.readFileSync(readFileSyncAddress).toString().split(/[\n\r]+/);

// 인풋 처리
[n, ...strings] = input;

correctParenthesis(strings);

function correctParenthesis(strings) {
    for (let x of strings) {
        let result = "YES";
        let cnt = 0;
        for (let y of x) {
            if (y === "(") cnt++;
            else cnt--;

            if (cnt < 0) {
                result = "NO"
                break;
            } 
        }
        if (cnt !== 0) result = "NO"
        console.log(result);
    }
}
