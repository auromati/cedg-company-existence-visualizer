import { countBy, map, filter } from 'lodash';

export function readShareHolderData(survivalData, isShareHolder, monthsPerBin=5) {
    let data = [];
    data = filter(survivalData, (row) => row.ShareholderInOtherCompanies === isShareHolder)
    const grouped = countBy(data, (d) => parseInt(d.DurationOfExistenceInMonths / monthsPerBin) );
    if(monthsPerBin === 1) {
        return map(grouped,(count, months) => ({count, months}));
    }
    return map(grouped, (count, months) => ({ 
        count,
        months: `${months*monthsPerBin}-${(parseInt(months) + 1) * monthsPerBin - 1}`
    }));
}