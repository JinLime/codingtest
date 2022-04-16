function solution(arr, n) {
    let result = Number.MAX_SAFE_INTEGER;

    function DFS(L, sum) {
        if (sum > n) return;
        if (L > result) return;
        if (sum === n) {
            result = Math.min(result, L);
            return;
        } else {
            for (let i = 0; i < arr.length; i++) {
                DFS(L + 1, sum + arr[i]);
            }
        }
    }

    DFS(0, 0);

    return result;
}

console.log(solution([1, 2, 5], 15));
