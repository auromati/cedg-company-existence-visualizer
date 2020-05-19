import { countBy, map } from 'lodash';

export function readPkdData(survivalData, pkd) {
    const grouped = countBy(survivalData, 'DurationOfExistenceInMonths');
    return map(grouped, (count, months) => ({ count, months }));
}