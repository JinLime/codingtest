function leastRecentlyUsed(s, tasks) {
    let cacheMem = Array.from({ length: s }, () => 0);

    tasks.forEach((x) => {
        let pos = -1;
        for (let i = 0; i < s; i++) {
            if (x === cacheMem[i]) pos = i;
        }
        if (pos === -1) {
            for (let i = s - 1; i >= 1; i--) {
                cacheMem[i] = cacheMem[i - 1];
            }
            cacheMem[0] = x;
        } else {
            for (let i = pos; i >= 1; i--) {
                cacheMem[i] = cacheMem[i - 1];
            }
        }
        cacheMem[0] = x;
    });
    return cacheMem;
}

let tasks = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(leastRecentlyUsed(5, tasks));
