function solution(n) {
    console.log(n);
    return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : "";
}

console.log(solution(1));
