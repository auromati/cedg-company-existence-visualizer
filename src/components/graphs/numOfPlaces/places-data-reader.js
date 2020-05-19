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

    return map(data, (numOfPlacesCount, monthWindow) => ({
        'month': monthsPerBin === 1 ? monthWindow : `${monthWindow*monthsPerBin}-${(parseInt(monthWindow) + 1) * monthsPerBin - 1}`,
        '0': numOfPlacesCount[0] || 0,
        '1': numOfPlacesCount[1] || 0,
        '2': numOfPlacesCount[2] || 0,
        '3': numOfPlacesCount[3] || 0,
        '4': numOfPlacesCount[4] || 0,
        '5': numOfPlacesCount[5] || 0
    }));
}