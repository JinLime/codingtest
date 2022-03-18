function solution(s) {
    let answer = s;
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for (let i = 0; i < numArr.length; i++) {
        let arr = answer.split(numArr[i]);
        console.log(arr);
        answer = arr.join(i);
    }

    return Number(answer);
}

let s = "23four5six7";

console.log(solution(s));
