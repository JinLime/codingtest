function decodeMap(arr) {
    return arr.map((line) => {
        const binary = line.toString(2);
        const empty = "0".repeat(arr.length - binary.length);
        return (empty + binary).split("").map(Number);
    });
}

function mergeMap(arr1, arr2) {
    const space = " ";
    const wall = "#";
    return arr1.map((line, lIndex) => {
        console.log(line, lIndex);
        return line
            .map((block, bIndex) => {
                console.log(block, bIndex);
                return block + arr2[lIndex][bIndex] ? wall : space;
            })
            .join("");
    });
}

function solution(n, arr1, arr2) {
    const decodeArr1 = decodeMap(arr1);
    const decodeArr2 = decodeMap(arr2);
    console.log(decodeArr1);
    console.log(decodeArr2);
    return mergeMap(decodeArr1, decodeArr2);
}

const arr1 = [7, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(5, arr1, arr2));
