function solution(n) {
    if (n.length === 0 || n.length === 1) return [-1];
    else {
        const n_copy = [...n];
        n_copy.sort((a, b) => a - b);
        n.splice(n.indexOf(n_copy[0]), 1);

        return n;
    }
}

console.log(solution([4, 3, 2, 1, 5]));
