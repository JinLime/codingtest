function mergeRegExp(...regexps) {
    return new RegExp("(" + regexps.map((regexp) => regexp.source).join("|") + ")");
}

function SDT(domain) {
    switch (domain) {
        case "S":
            return 1;
        case "D":
            return 2;
        case "T":
            return 3;
    }
}

function optionScore(answer, option) {
    const last = answer.length - 1;
    if (option === "*") {
        answer[last] *= 2;
        if (answer[last - 1] !== undefined) answer[last - 1] *= 2;
    } else {
        answer[last] *= -1;
    }
}

function solution(dartResult) {
    const score = /\d{2}|\d{1}/;
    const domain = /[SDT]/;
    const option = /[*#]/;
    const regexp = mergeRegExp(score, domain, option);
    const dartArr = dartResult.split(regexp).filter((v) => v);
    const answer = [];

    dartArr.forEach((v, i) => {
        if (score.test(v)) answer.push(Number(v));
        if (domain.test(v)) answer[answer.length - 1] **= SDT(v);
        if (option.test(v)) optionScore(answer, v);
    });

    return answer.reduce((a, b) => a + b);
}

console.log(solution("1D2S#10S"));
