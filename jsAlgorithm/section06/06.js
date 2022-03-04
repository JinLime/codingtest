function savePrincess(n, k) {
    let result = 0;
    let queue = Array.from({ length: n }, (v, i) => i + 1);

    while (queue.length) {
        for (let i = 1; i < k; i++) queue.push(queue.shift());
        queue.shift();
        if (queue.length === 1) result = queue.shift();
    }

    return result;
}

console.log(savePrincess(8, 3));
