function coordinateSort(c) {
    return c.sort((a,b) => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    });
}

let list = [[2,7],[1,3],[1,2],[2,5],[3,6]];

console.log(coordinateSort(list));
