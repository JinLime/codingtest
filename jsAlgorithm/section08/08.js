function solution(N, M) {
    let result = [];
    let tmp = Array.from({ length: M }, (_) => 0);

    function DFS(L, sum) {
        if (L === M) {
            result.push(tmp.slice());
            return;
        } else {
            for (let i = 1; i <= N; i++) {
                tmp[L] = i;
                DFS(L + 1);
            }
        }
    }

    DFS(0, 0);
    return result;
}

console.log(solution(3, 2));
