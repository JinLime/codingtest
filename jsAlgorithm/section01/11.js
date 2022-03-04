const findCapitalLetters = function (str) {
    let answer = 0;

    for (let i of str) {
        // if (i === i.toUpperCase()) answer += 1;

        // ASCII 풀이
        // 대문자 = 65~90, 소문자 = 97~122
        let num = i.charCodeAt();
        if (num >= 65 && num <= 90) answer += 1;
    }

    return answer;
};

let str = "KoreaTimeGood";

console.log(findCapitalLetters(str));
