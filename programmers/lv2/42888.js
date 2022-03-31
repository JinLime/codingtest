function solution(record) {
    const answer = [];
    const name = [];

    for (let x of record) {
        if (x.indexOf('Leave') > -1);
        else name.push(x);
    }

    const changeName = name.map(x => x.split(' ').splice(1,3));

    let mapName = new Map();
    for (let x of changeName) {
        mapName.set(x[0], x[1]);
    }

    const result = [];

    for (let x of record) {
        if (x.indexOf('Change') > -1);
        else result.push(x);
    }

    const changeResult = result.map(x => x.split(' ').splice(0,2));

    for (let i = 0; i < changeResult.length; i++) {
        changeResult[i][1] = mapName.get(changeResult[i][1]);
        if (changeResult[i][0] === 'Enter') answer.push(`${changeResult[i][1]}님이 들어왔습니다.`);
        else answer.push(`${changeResult[i][1]}님이 나갔습니다.`);
    }
    
    return answer;
}

const records = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

console.log(solution(records));
