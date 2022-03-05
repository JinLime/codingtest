function solution(n, stages) {
    const countStages = Array.from({ length: n }, () => ({fail: 0, clear: 0}));

    stages.forEach(stage => {
        const stageI = stage - 1;
        if(stageI < n) {
            countStages[stageI].fail += 1;
            countStages[stageI].clear += 1;
        }
        countStages.some((stage, i) => {
            if(i === stageI) return true;
            countStages[i].clear += 1;
        });
    });
    
    const stagesFailRate = countStages.map((count, i) => ({
        index: i + 1,
        failR: count.fail || count.clear ? (count.fail / count.clear) : 0
        // fail 또는 clear 이(가) false면 0
    }));
    console.log(stagesFailRate);

    stagesFailRate.sort((a, b) => {
        console.log(a,'|',b);
        if (a.failR < b.failR) return 1;
        if (a.failR > b.failR) return -1;
        return a.index - b.index;
    });
    console.log(stagesFailRate);

    return result = stagesFailRate.map(v => v.index);;
}

let stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(5, stages));