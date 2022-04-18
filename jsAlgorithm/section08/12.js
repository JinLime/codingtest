// nCr = n-1Cr-1 + n-1Cr 공식 사용
function solution(n, r) {
    function DFS(n, r) {
        if (r === 0 || n === r) return 1;
        else return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }

    return DFS(n, r);
}

// 메모이제이션
function memoization(n, r) {
    let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

    function DFS(n, r) {
        if (dy[n][r] > 0) return dy[n][r];
        if (r === 0 || n === r) return 1;
        else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }

    return DFS(n, r);
}

console.log(solution(33, 19));
console.log(memoization(33, 19));
