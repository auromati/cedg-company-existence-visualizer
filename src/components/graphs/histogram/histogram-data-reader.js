import { countBy, map } from 'lodash';
import { survivalDataService } from '../../../services/survival-data-service';

export function readHistogramData() {
    return survivalDataService.readSurvivalData().then(survivalData => {
        const grouped = countBy(survivalData, 'DurationOfExistenceInMonths');
        return map(grouped, (count, months) => ({count, months}));
    });
}