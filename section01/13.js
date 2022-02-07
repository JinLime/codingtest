const changeUpperAndLower = function (str) {
    let answer = "";

    for (i of str) {
        // if (i === i.toUpperCase()) answer += i.toLowerCase();
        // else answer += i.toUpperCase();

        // ASCII 풀이
        // 대문자 = 65~90, 소문자 = 97~122
        let num = i.charCodeAt();
        if (num >= 65 && num <= 90) answer += String.fromCharCode(num + 32);
        if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    }

    return answer;
};

let str = "StuDY";

console.log(changeUpperAndLower(str));
