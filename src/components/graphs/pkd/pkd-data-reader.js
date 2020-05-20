import { countBy, map } from 'lodash';

export function readPkdData(survivalData, pkd) {
    let data = survivalData.filter(c => c.Terminated === 0);
    let terminatedData = survivalData.filter(c => c.Terminated === 1);
    
    data = data.filter(c => c.PKD && c.PKD.startsWith(pkd));
    terminatedData = terminatedData.filter(c => c.PKD && c.PKD.startsWith(pkd));
    
    const grouped = countBy(data, 'DurationOfExistenceInMonths');
    const groupedTerminated = countBy(terminatedData, 'DurationOfExistenceInMonths');

    const mergeByMonth = (a1, a2) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.months === itm.months) && item),
        ...itm
    }));

    let nonTerminated = map(grouped,(count, months) => ({'Przetrwały':count, months}));
    let terminated = map(groupedTerminated,(count, months) => ({'Upadły':count, months}));
    let returnVal = mergeByMonth(terminated, nonTerminated);
    for(let item of nonTerminated) {
        if(!returnVal.find((itm) => (itm.months === item.months))) {
            returnVal.push(item);
        }
    }
    return returnVal;
}