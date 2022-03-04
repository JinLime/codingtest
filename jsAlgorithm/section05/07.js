const  anagram = (arr1, arr2) => {
    let answer = 'YES';

    const ana = new Map();
    for (let x of arr1) {
        ana.set(x, ana.get(x) + 1 || 1);
    }

    for (let x of arr2) {
        if (!ana.has(x) || ana.get(x) === 0) return 'NO';
        ana.set(x, ana.get(x) - 1);
    }

    return answer;
};

let arr1 = 'AbaAeCe';
let arr2 = 'baeeACA';

console.log(anagram(arr1, arr2));
