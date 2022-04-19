function solution(n, k, arr, m) {
    let result = 0;

    function DFS(L, s, sum) {
        if (L === k) {
            if (sum % m === 0) result++;
        } else {
            for (let i = s; i < n; i++) {
                DFS(L + 1, i + 1, sum + arr[i]);
            }
        }
    }

    DFS(0, 0, 0);
    return result;
}

const arr = [2, 4, 5, 8, 12];

console.log(solution(5, 3, arr, 6));
