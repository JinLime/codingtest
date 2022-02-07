const findString = function (arr, x) {
    let answer = 0;

    for (let i of arr) {
        if (i === x) answer += 1;
    }

    return answer;
};

let arr = "COMPUTERPROGRAMMING";

console.log(findString(arr, "R"));
