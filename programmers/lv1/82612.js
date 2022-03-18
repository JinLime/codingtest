function solution(price, money, count) {
    let cntArr = Array.from({ length: count }, (_, i) => (i + 1) * price).reduce((v, i) => v + i);
    console.log(cntArr);
    return cntArr - money < 0 ? 0 : cntArr - money;
}

console.log(solution(3, 20, 4));
