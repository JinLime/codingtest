const getCommonElement = (arr1, arr2) => {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexof(arr1[i])) answer.push(arr1[i]);
    }

    return answer.sort();
};

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];

console.log(getCommonElement(arr1, arr2));
