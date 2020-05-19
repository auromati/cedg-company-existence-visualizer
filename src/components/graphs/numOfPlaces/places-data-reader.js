import { countBy, groupBy, map } from 'lodash';

export function readPlacesData(survivalData, monthsPerBin = 5 ) {
    let data = [];
    data = groupBy(survivalData, (row) => (parseInt(row.DurationOfExistenceInMonths / monthsPerBin)));
    
    for(let months in data) {
        data[months] = countBy(data[months], 'NoOfAdditionalPlaceOfTheBusiness');
    }

    // create 5+ class
    for(let months in data) {
        for(let places in data[months]) {
            if(places > 5) {
                // in case there were no businesses with 5 number of places for this month
                data[months][5] = data[months][5] || 0;
                data[months][5] += data[months][places];
            }
        }
    }

    data = map(data, (numOfPlacesCount, monthWindow) => ({
        'month': monthsPerBin === 1 ? monthWindow : `${monthWindow*monthsPerBin}-${(parseInt(monthWindow) + 1) * monthsPerBin - 1}`,
        '1': numOfPlacesCount[0] || 0,
        '2': numOfPlacesCount[1] || 0,
        '3': numOfPlacesCount[2] || 0,
        '4': numOfPlacesCount[3] || 0,
        '5': numOfPlacesCount[4] || 0,
        '6+': numOfPlacesCount[5] || 0
    }));
    
    let sumOfValues = {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6+': 0
    }

    for(let dataDict of data) {
        sumOfValues['1'] += dataDict['1'];
        sumOfValues['2'] += dataDict['2'];
        sumOfValues['3'] += dataDict['3'];
        sumOfValues['4'] += dataDict['4'];
        sumOfValues['5'] += dataDict['5'];
        sumOfValues['6+'] += dataDict['6+'];
    }
    for(let dataDict of data) {
        dataDict['0'] = 100 * dataDict['0'] / sumOfValues['0'];
        dataDict['1'] = 100 * dataDict['1'] / sumOfValues['1'];
        dataDict['2'] = 100 * dataDict['2'] / sumOfValues['2'];
        dataDict['3'] = 100 * dataDict['3'] / sumOfValues['3'];
        dataDict['4'] = 100 * dataDict['4'] / sumOfValues['4'];
        dataDict['5'] = 100 * dataDict['5'] / sumOfValues['5'];
        dataDict['6+'] = 100 * dataDict['6+'] / sumOfValues['6+'];
    }

    return data;
}