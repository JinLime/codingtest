const kBigNum = (card, k) => {
    let answer = 0;
    let n = card.length;
    let temp = new Set();

    for (let i = 0; i < n - 2; i++) {
        for (let j = n - 2; j > i; j--) {
            for (let k = n - 1; k > j; k--) {
                temp.add(card[i] + card[j] + card[k]);
            }
        }
    }

    let a = Array.from(temp).sort((a, b) => b - a);
    answer = a[k - 1];

    return answer;
};

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(kBigNum(arr, 3));
