const numFilter = function (str) {
    let answer = 0;
    
    str = str.replace(/[a-zA-Z]/g,'');

    answer = parseInt(str);

    return answer;
};

let str = "g0en2T0s8eSoft";

console.log(numFilter(str));
