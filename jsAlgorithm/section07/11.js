function count(songs, volume) {
    let cnt = 1,
        sum = 0;
    for (let x of songs) {
        if (sum + x > volume) {
            cnt++;
            sum = x;
        } else sum += x;
    }
    return cnt;
}

function musicVideo(m, songs) {
    let answer;
    let low = Math.max(...songs);
    let high = songs.reduce((a, b) => a + b);

    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (count(songs, mid) <= m) {
            answer = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    return answer;
}

console.log(musicVideo(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
