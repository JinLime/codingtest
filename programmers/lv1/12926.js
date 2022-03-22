function solution(s, n) {
    const lowerAlphabat = "abcdefghijklmnopqrstuvwxyz".split("");
    const upperAlphabat = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const sArr = s.split("");

    let answer = [];

    for (let i = 0; i < sArr.length; i++) {
        let pl = lowerAlphabat.indexOf(sArr[i]);
        let pu = upperAlphabat.indexOf(sArr[i]);

        if (lowerAlphabat.includes(sArr[i])) {
            answer.push(lowerAlphabat[(pl + n) % 26]);
        } else if (upperAlphabat.includes(sArr[i])) {
            answer.push(upperAlphabat[(pu + n) % 26]);
        } else answer.push(" ");
    }

    return answer.join("");
}

console.log(solution("z", 1));
