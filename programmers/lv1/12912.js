function solution(a, b) {
    a > b ? [a,b] = [b,a] : null;
    return Array.from({length:b-a+1}, (_,i) => i + a).reduce((v,i) => v+i);
}

console.log(solution(5, 3));