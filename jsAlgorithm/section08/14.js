function solution(n, m) {
    let result = [];
    let tmp = Array.from({ length: m }, () => 0);

    function DFS(L, s) {
        if (L === m) {
            result.push(tmp.slice());
        } else {
            for (let i = s; i <= n; i++) {
                tmp[L] = i;
                DFS(L + 1, i + 1);
            }
        }
    }
    DFS(0, 1);

    return result;
}

console.log(solution(4, 2));
