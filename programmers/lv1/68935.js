function solution(n) {
    // 10진법 -> 3진법
    const tenToThree = n.toString(3).split('').reverse().join('');
    // 3진법 -> 10진법
    const threeToTen = parseInt(tenToThree, 3);

    return threeToTen;
}

console.log(solution(5));