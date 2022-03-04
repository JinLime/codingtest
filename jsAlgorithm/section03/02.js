const validPalindrom = function (str) {
    let answer = "YES";
    str = str.toLowerCase().replace(/[^a-z]/g, ''); // ^ = 부정

    if(str.split('').reverse().join('') !== str) return "NO";

    return answer;
};

let str = "found7, time: study; Yduts; emit, 7Dnuof";

console.log(validPalindrom(str));
