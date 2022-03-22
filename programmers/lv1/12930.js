function solution(s) {
    const sArr = s.split("");
    let cnt = 0;
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        let num = sArr[i].charCodeAt();

        if (cnt % 2 === 0 && isNaN(sArr[i])) {
            answer += String.fromCharCode(num - 32);
            cnt++;
        } else if (cnt % 2 === 1 && isNaN(sArr[i])) {
            answer += sArr[i];
            cnt++;
        }

        if (!isNaN(sArr[i])) {
            answer += sArr[i];
            cnt = 0;
        }
    }

    return answer;
}

console.log(solution("try hello  world "));
