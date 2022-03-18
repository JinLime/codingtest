function strBig(a, b) {
    return (a < b) - (a > b);
}

function solution(s) {
    let sArr = s.split("").sort((a, b) => {
        return strBig(a, b);
    });

    return sArr.join("");
}

console.log(solution("Zbcdefg"));
