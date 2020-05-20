import { map, pick} from 'lodash';
export function readData(survivalData) {
    return map(survivalData, entry =>
        pick(entry, ['DurationOfExistenceInMonths', 'ShareholderInOtherCompanies',
            'NoOfLicences', 'NoOfAdditionalPlaceOfTheBusiness']));
}