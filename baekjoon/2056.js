const fs = require("fs");

// 백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = "input.txt";
// let input = fs.readFileSync(readFileSyncAddress).toString().trim().split(/[\n\r]+/);

// 인풋 처리
const arr = input[1].split(' ').map(Number);

oxQuiz(arr);

function oxQuiz (arr) {
    let answer = 0;
    let cnt = 0;

    for (let x of arr) {
        if (x ===1) {
            cnt++;
            answer += cnt;
        }
        else cnt = 0;
    }

    console.log(answer);
};
