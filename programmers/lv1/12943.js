function solution(n) {
    let cnt = 0;

    while (cnt < 500 && n != 1) {
        cnt++;
        if (n % 2 === 0) n /= 2;
        else n = n * 3 + 1;

        if (n === 1) return cnt;
    }
    return n === 1 ? cnt : -1;
}

console.log(solution(1));
