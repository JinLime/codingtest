function getGcd(n, m) {
    let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    return gcd(n, m);
}
// (가로 + 세로 - 최대공약수)가 대각선을 지나는 사각형의 개수
function solution(w, h) {
    return w * h - (w + h - getGcd(w, h));
}

console.log(solution(3, 9));
