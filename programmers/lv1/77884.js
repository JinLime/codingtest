function getDivisor(num) {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) cnt++;
    }
    return cnt
}

function solution(left, right) {
    let result = 0;
    const leftToRight = Array.from({length:right-left+1}).map((v,i) => i+left);

    for (let x of leftToRight) {
        if(getDivisor(x) % 2 === 0) result += x;
        else result -= x;
    }

    return result;
}

console.log(solution(10, 28));