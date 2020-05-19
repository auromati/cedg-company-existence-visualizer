import { groupBy, countBy, map } from 'lodash';

export function readLicencesData(survivalData, monthsPerBin = 5 ) {
    let data = [];
    data = groupBy(survivalData, (row) => (parseInt(row.DurationOfExistenceInMonths / monthsPerBin)));
    
    for(let months in data) {
        data[months] = countBy(data[months], 'NoOfLicences');
    }

    // create 3+ class
    for(let months in data) {
        for(let licences in data[months]) {
            if(licences > 3) {
                // in case there were no businesses with 3 number of licences for this month
                data[months][3] = data[months][3] || 0;
                data[months][3] += data[months][licences];
            }
        }
    }

    return map(data, (numOfLicencesCount, monthWindow) => ({
        'month': monthsPerBin === 1 ? monthWindow : `${monthWindow*monthsPerBin}-${(parseInt(monthWindow) + 1) * monthsPerBin - 1}`,
        '0': numOfLicencesCount[0] || 0,
        '1': numOfLicencesCount[1] || 0,
        '2': numOfLicencesCount[2] || 0,
        '3': numOfLicencesCount[3] || 0
    }));
}