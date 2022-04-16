function solution(arr, m) {
    let result = [];
    let ch = Array.from({ length: arr.length }, () => 0);
    let tmp = Array.from({ length: m }, () => 0);

    function DFS(L) {
        if (L === m) {
            result.push(tmp.slice());
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    tmp[L] = arr[i];
                    DFS(L + 1);
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return result;
}

console.log(solution([3, 6, 9], 2));
