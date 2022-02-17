const continuousPartsSequence2 = (arr, m) => {
    let answer = 0;
    let sum = 0,
        lt = 0,
        rt = 0;

    while (rt < arr.length) {
        sum += arr[rt];
        while (sum > m) {
            sum -= arr[lt++];
        }
        answer += rt - lt + 1;
        rt++;
    }
    return answer;
};

let arr = [1, 3, 1, 2, 3];

console.log(continuousPartsSequence2(arr, 5));
