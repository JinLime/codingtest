function solution(n, arr) {
    let result = [];
    let graph = Array.from(Array(n + 1), () => Array());
    let ch = Array.from({ length: n + 1 }, () => 0);
    let path = []; // 경로

    // 인접리스트 생성
    for (let [a, b] of arr) {
        graph[a].push(b);
    }

    function DFS(v) {
        if (v === n) {
            result++;
            console.log(path);
        } else {
            for (let i = 0; i <= graph[v].length; i++) {
                if (ch[graph[v][i]] === 0) {
                    ch[graph[v][i]] = 1;
                    path.push(graph[v][i]);
                    DFS(graph[v][i]);
                    ch[graph[v][i]] = 0;
                    path.pop();
                }
            }
        }
    }
    path.push(1);
    ch[1] = 1;
    DFS(1);

    return result;
}

const arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));
