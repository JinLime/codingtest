const graduationGift = (gift) => {
    let answer = 0;
    let n = arr.length; // 5
    let m = 28;

    gift.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let i = 0; i < n; i++) {
        let money = m - (gift[i][0] / 2 + gift[i][1]);
        let cnt = 1;
        for (let j = 0; j < n; j++) {
            if (j !== i && gift[j][0] + gift[j][1] > money) break;
            if (j !== i && gift[j][0] + gift[j][1] <= money) {
                money -= gift[j][0] + gift[j][1];
                cnt += 1;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
};

let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];

console.log(graduationGift(arr));
