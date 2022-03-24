function solution(n) {
    const nArr = Array.from(String(n), Number)
        .sort((a, b) => b - a)
        .join("");
    return Number(nArr);
}

console.log(solution(12345));
