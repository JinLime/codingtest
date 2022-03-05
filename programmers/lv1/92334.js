function solution(id_list, report, k) {
    let answer = [];
    let reports = report.map(x => x.split(' '));
    
    let counts = new Map();
    for (let x of reports){
        counts.set(x[1],counts.get(x[1]) + 1 || 1);
    }
    console.log(counts);

    let good = new Map();
    for(let x of reports){
        if(counts.get(x[1])>=k){
            good.set(x[0],good.get(x[0]) + 1 || 1)
            console.log(good);
        }
    }
    
    answer = id_list.map(a=>good.get(a) || 0)
    return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
let k = 2;

console.log(solution(id_list, report, k));