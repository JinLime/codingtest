function solution(s) {
    let p = 0;
    const sArr = s.split("").reduce((acc, cur) => {
        const accL = acc.length;
        if (accL === 0) acc.push(cur);
        else {
            const preCur = acc[accL - 1];

            if (preCur === cur) acc.pop();
            else acc.push(cur);
        }
        return acc;
    }, []);
    return sArr.length === 0 ? 1 : 0;
}
