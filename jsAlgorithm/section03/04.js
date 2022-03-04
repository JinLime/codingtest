const shortStrDistance = function (str, t) {
    let answer = [];
    let flag = 100;
    
    // 왼쪽에서 오른쪽으로
    for(let x of str) {
        if (x === t) {
            flag = 0;
            answer.push(flag);
        } else {
            flag += 1;
            answer.push(flag);
        }
    }

    flag = 100;

    // 오른쪽에서 왼쪽으로
    for (let i = str.length-1; i >= 0; i--) {
        if(str[i] === t) {
            flag = 0;
        } else {
            flag += 1;
            answer[i] = Math.min(answer[i], flag);
        }
    }

    return answer;
};

let str = "teachermode";

console.log(shortStrDistance(str, "e"));
