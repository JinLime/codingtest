function solution(numbers, target) {
    let result = 0;

    function DFS(L, sum) {
        if (L === numbers.length) {
            if (sum === target) {
                result += 1;
            }
        } else {
            DFS(L + 1, sum + numbers[L]);
            DFS(L + 1, sum - numbers[L]);
        }
    }

    DFS(0, 0);
    return result;
}

console.log(solution([4, 1, 2, 1], 4));
