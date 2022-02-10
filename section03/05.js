const compressedStr = function (str) {
    let answer = [];
    let cnt = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) cnt += 1;
        else if (str[i] !== str[i+1] && cnt > 1) {
            answer.push(str[i]);
            answer.push(cnt);
            cnt = 1;
        } else { 
            answer.push(str[i]);
        }
    }
    answer = answer.join('');

    return answer;
};

let str = "KKHSSSSSSSEESS";

console.log(compressedStr(str));
