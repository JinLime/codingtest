const nxnMaxSum = function (arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let row = 0,
        col = 0;

    // 행,열 최대값 구하기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            row += arr[i][j];
            col += arr[j][i];
        }
        answer = Math.max(answer, row, col);
        row = 0;
        col = 0;
    }

    // 대각선 최대값 구하기
    for (let i = 0; i < n; i++) {
        row += arr[i][i];
        col += arr[i][n - i - 1];
    }
    answer = Math.max(answer, row, col);
    return answer;
};

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];

console.log(nxnMaxSum(arr));
