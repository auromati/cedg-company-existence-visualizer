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

    data = map(data, (numOfLicencesCount, monthWindow) => ({
        'month': monthsPerBin === 1 ? monthWindow : `${monthWindow*monthsPerBin}-${(parseInt(monthWindow) + 1) * monthsPerBin - 1}`,
        '0': numOfLicencesCount[0] || 0,
        '1': numOfLicencesCount[1] || 0,
        '2': numOfLicencesCount[2] || 0,
        '3+': numOfLicencesCount[3] || 0
    }));

    let sumOfValues = {
        '0': 0,
        '1': 0,
        '2': 0,
        '3+': 0
    }

    for(let dataDict of data) {
        sumOfValues['0'] += dataDict['0'];
        sumOfValues['1'] += dataDict['1'];
        sumOfValues['2'] += dataDict['2'];
        sumOfValues['3+'] += dataDict['3+'];
    }
    for(let dataDict of data) {
        dataDict['0'] = 100 * dataDict['0'] / sumOfValues['0'];
        dataDict['1'] = 100 * dataDict['1'] / sumOfValues['1'];
        dataDict['2'] = 100 * dataDict['2'] / sumOfValues['2'];
        dataDict['3+'] = 100 * dataDict['3+'] / sumOfValues['3+'];
    }
    return data;
}