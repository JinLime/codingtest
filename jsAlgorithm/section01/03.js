const pencilDozen = function (n) {
    let answer = n / 12;
    if ((n % 12) > 0) {
        answer += 1;
    }
    return Math.floor(answer)
}

const pencilDozen2 = function (n) {
    let answer = Math.ceil(n/12);
    return answer;
}

console.log(pencilDozen(26));
console.log(pencilDozen(178));
console.log(pencilDozen2(25));
console.log(pencilDozen2(178));