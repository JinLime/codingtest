function getCombinations(arr, num) {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((cur, index, array) => {
        const rest = array.slice(index + 1);
        const combinations = getCombinations(rest, num - 1);
        const attached = combinations.map((v) => [cur, ...v]);
        results.push(...attached);
    });
    return results;
}

function solution(orders, course) {
    const result = [];
    let ordersSort = orders.map((v) => v.split("").sort().join(""));
    const orderMap = new Map();

    for (let x of ordersSort) {
        let order = x.split("");
        for (let y of course) {
            let comOrder = getCombinations(order, y);
            for (let z of comOrder) {
                orderMap.set(z.join(""), orderMap.get(z.join("")) + 1 || 1);
            }
        }
    }
    //  세트 1개짜리 제거
    for (const [index, v] of orderMap.entries()) {
        if (orderMap.get(index) === 1) orderMap.delete(index);
    }

    const cntArr = Array.from({ length: course.length }, (v) => 0);
    // 코스 별 최대 메뉴
    for (const [index, v] of orderMap.entries()) {
        for (let i = 0; i < course.length; i++) {
            if (index.length === course[i]) cntArr[i] = Math.max(cntArr[i], v);
        }
    }

    for (let i = 0; i < course.length; i++) {
        for (const [index, v] of orderMap.entries()) {
            if (index.length === course[i] && v === cntArr[i]) result.push(index);
        }
    }

    return result.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];

console.log(solution(orders, course));
