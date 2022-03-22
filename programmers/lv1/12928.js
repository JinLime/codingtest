function solution(n) {
    // const sArr = Array.from({ length: n / 2 }, (_, i) => i + 1);
    let answer = n;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) answer += i;
    }

    return answer;
}

console.log(solution(12));
