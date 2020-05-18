import { countBy, map } from 'lodash';

export function readHistogramData(survivalData) {
    const grouped = countBy(survivalData, 'DurationOfExistenceInMonths');
    return map(grouped, (count, months) => ({ count, months }));
}