const standardizationCapitalLetter = function (str) {
    let answer = "";

    for (let i of str) {
        // if (i === i.toLowerCase()) answer += i.toUpperCase();
        // else answer += i;

        let num = i.charCodeAt();
        if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += i;
    }

    return answer;
};

let str = "ItisTimeToStudy";

console.log(standardizationCapitalLetter(str));
