import { countBy, map, filter } from 'lodash';

export function readVoivodeshipData(survivalData, isVoivodeshipCorrect, monthsPerBin=5) {
    let data = [];
    isVoivodeshipCorrect = isVoivodeshipCorrect ? 1 : 0;
    data = filter(survivalData, (row) => row.IsVoivodeshipCorrect === isVoivodeshipCorrect);
    let terminatedData = filter(data, (row) => row.Terminated === 1);
    data = filter(data, (row) => row.Terminated === 0);

    const grouped = countBy(data, (d) => parseInt(d.DurationOfExistenceInMonths / monthsPerBin) );
    const groupedTerminated = countBy(terminatedData, (d) => parseInt(d.DurationOfExistenceInMonths / monthsPerBin) );

    const mergeByMonth = (a1, a2) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.months === itm.months) && item),
        ...itm
    }));

    if(monthsPerBin === 1) {
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

    let nonTerminated = map(grouped, (count, months) => ({ 
        'Przetrwały': count,
        months: `${months*monthsPerBin}-${(parseInt(months) + 1) * monthsPerBin - 1}`
    }));
    let terminated = map(groupedTerminated, (count, months) => ({ 
        'Upadły': count,
        months: `${months*monthsPerBin}-${(parseInt(months) + 1) * monthsPerBin - 1}`
    }));
    let returnVal = mergeByMonth(terminated, nonTerminated);
    for(let item of nonTerminated) {
        if(!returnVal.find((itm) => (itm.months === item.months))) {
            returnVal.push(item);
        }
    }
    return returnVal;
}