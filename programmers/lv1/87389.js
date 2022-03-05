function solution(n) {
    for (let i = 2; i <= Number.MAX_SAFE_INTEGER; i++) {
        if (n % i === 1) return i;
    }
}

console.log(solution(12));
