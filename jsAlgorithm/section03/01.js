const palindrom = function (str) {
    let answer = "YES";
    str = str.toLowerCase();

    // for (let i = 0; i < Math.floor(str.length / 2); i++) {
    //     if (str[i] !== str[str.length - i - 1]) return "NO";
    // }

    // reverse 함수 사용해서 비교
    if (str.split("").reverse().join("") !== str) return "NO";

    return answer;
};

let str = "good";

console.log(palindrom(str));
