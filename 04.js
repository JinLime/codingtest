const ontToN = function (n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer += i;
    }
    return answer;
}

console.log(ontToN(6));
console.log(ontToN(10));