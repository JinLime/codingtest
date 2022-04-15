function solution(arr, limit) {
    let result = [];

    function DFS(L, time, sum) {
        if (L === arr.length) {
            if (time <= limit) {
                result.push(sum);
            }
        } else {
            DFS(L + 1, time + arr[L][1], sum + arr[L][0]);
            DFS(L + 1, time, sum);
        }
    }
    DFS(0, 0, 0);

    return Math.max(...result);
}

console.log(
    solution(
        [
            [10, 5],
            [25, 12],
            [15, 8],
            [6, 3],
            [7, 4],
        ],
        20
    )
);
