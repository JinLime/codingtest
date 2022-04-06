function solution(progresses, speeds) {
    const result = [];

    while (progresses.length) {
        let cnt = 0;
        let j = 0;

        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }

        for (let i = 0; i < progresses.length; i++) {
            if (progresses[j] >= 100 && progresses[i] >= 100) {
                cnt++;
                j++;
            }
        }

        if (cnt !== 0) {
            progresses.splice(0, cnt);
            speeds.splice(0, cnt);
            result.push(cnt);
        }
    }
    return result;
}

console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7]));
