function solution(arr) {
    let result = "NO";
    let total = arr.reduce((v, i) => v + i);
    let n = arr.length;
    let flag = 0;

    // (Level, sum)
    function DFS(L, sum) {
        if (flag) return;
        if (L === n) {
            if (total - sum === sum) {
                result = "YES";
                flag = 1;
            }
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }

    DFS(0, 0);
    return result;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
