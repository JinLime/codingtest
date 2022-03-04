const standardizationCapitalLetter = function (str) {
    let answer = "";

    for (let i of str) {
        // if (i === i.toLowerCase()) answer += i.toUpperCase();
        // else answer += i;

        // ASCII 풀이
        // 대문자 = 65~90, 소문자 = 97~122
        let num = i.charCodeAt();
        if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += i;
    }

    return answer;
};

let str = "ItisTimeToStudy";

console.log(standardizationCapitalLetter(str));
