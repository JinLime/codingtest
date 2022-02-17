const continuousPartsSequence1 = (arr, m) => {
    let answer = 0;
    let lt = 0;
    rt = 0;
    sum = 0;

    while (rt < arr.length) {
        sum += arr[rt++];
        if (sum === m) answer++;
        while (sum >= m) {
            sum -= arr[lt++];
            if (sum === m) answer++;
        }
    }

    return answer;
};

let arr = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(continuousPartsSequence1(arr, 6));
