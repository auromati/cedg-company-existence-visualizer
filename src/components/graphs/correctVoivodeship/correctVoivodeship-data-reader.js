import { countBy, map, filter } from 'lodash';

export function readVoivodeshipData(survivalData, isVoivodeshipCorrect, monthsPerBin=5) {
    let data = [];
    data = filter(survivalData, (row) => row.IsVoivodeshipCorrect === isVoivodeshipCorrect)
    const grouped = countBy(data, (d) => parseInt(d.DurationOfExistenceInMonths / monthsPerBin) );
    if(monthsPerBin === 1) {
        return map(grouped,(count, months) => ({count, months}));
    };
    console.log(survivalData);

    return map(grouped, (count, months) => ({ 
        count,
        months: `${months*monthsPerBin}-${(parseInt(months) + 1) * monthsPerBin - 1}`
    }));
}