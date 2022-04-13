function solution(arr) {
    let arrSum = arr.reduce((v, i) => v + i);
    let n = arr.length;
    let result = [];

    function DFS(L, sum) {
        if (L === n) {
            if (arrSum > sum) {
                result.push(sum);
            }
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }

    DFS(0, 0);
    console.log(result.length);
    return Math.max(...result);
}

console.log(solution([81, 58, 42, 33, 61]));
