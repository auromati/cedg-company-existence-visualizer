import { groupBy, map } from 'lodash';
export const readPolandData = (survivalData) => {
    const grouped = groupBy(survivalData, 'voivodeshipId');
    const mapped = map(grouped, (arr, id) => {
        const sum = arr.reduce((prev, curr) => prev + curr.DurationOfExistenceInMonths, 0);
        return sum / arr.length;
    });
    const mapped2 = mapped.slice(0, -1);

    return mapped2;
}

export const readMedian = (survivalData) => {
    const grouped = groupBy(survivalData, 'voivodeshipId');
    const mapped = map(grouped, (arr, id) => {
        arr = arr.sort((a, b) => a.DurationOfExistenceInMonths - b.DurationOfExistenceInMonths);
        return arr[parseInt(arr.length / 2)].DurationOfExistenceInMonths;
    });
    const mapped2 = mapped.slice(0, -1);
    return mapped2;
}