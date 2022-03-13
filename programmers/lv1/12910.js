const solution = function (arr, divisor) {
    let result = [];

    for (let x of arr) {
        if (x % divisor === 0) result.push(x);
    }

    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
};

let arr = [3, 2, 6];

console.log(solution(arr, 5));

// console.log(5 % 5);
