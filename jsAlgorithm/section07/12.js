function count(stable, dist) {
    let cnt = 1,
        ep = stable[0];
    for (let i = 0; i < stable.length; i++) {
        if (stable[i] - ep >= dist) {
            cnt++;
            ep = stable[i];
        }
    }
    return cnt;
}

function setStable(c, stable) {
    let answer;
    stable.sort((a, b) => a - b);
    let low = 1;
    let high = stable[stable.length - 1];
    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (count(stable, mid) >= c) {
            answer = mid;
            low = mid + 1;
        } else high = mid - 1;
    }
    return answer;
}

console.log(setStable(3, [5, 6, 8, 12, 14]));
