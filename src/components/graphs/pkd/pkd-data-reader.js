import { countBy, map } from 'lodash';

export function readPkdData(survivalData, pkd) {
    const data = survivalData.filter(c => c.PKD && c.PKD.startsWith(pkd));
    const grouped = countBy(data, 'DurationOfExistenceInMonths');
    return map(grouped, (count, months) => ({ count, months }));
}