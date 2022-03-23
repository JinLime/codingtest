function solution(s) {
    return Array.from(String(s), Number).reduce((v,i) => v+i);
}

console.log(solution(123));
