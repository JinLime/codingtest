function solution(array, commands) {
    let answer = [];

    for (let x of commands) {
        const [i, j, k] = x;
        let slicedArr = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(slicedArr[k - 1]);
    }

    return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];

console.log(solution(array, commands));
