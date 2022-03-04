function solution(sizes) {
    let size = [0, 0];

    sizes.map((v) => {
        v.sort((a, b) => a - b);
        if (v[0] > size[0]) size[0] = v[0];
        if (v[1] > size[1]) size[1] = v[1];
        return v;
    });

    return size.reduce((v, i) => v * i);
}

let sizes = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
];

console.log(solution(sizes));
