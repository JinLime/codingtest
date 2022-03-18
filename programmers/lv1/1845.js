function solution(nums) {
    const nSelect = nums.length / 2;
    const numSet = [...new Set(nums)];

    // if (numSet.length < nSelect) return numSet.length;
    // else return nSelect;

    return numSet.length < nSelect ? numSet.length : nSelect;
}

let nums = [3, 1, 2, 3];

console.log(solution(nums));
