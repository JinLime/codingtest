function solution(num) {
    return num % 2 === 1 || num % 2 === -1 ? "Odd" : "Even";
}

console.log(solution(-1));
