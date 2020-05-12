import { countBy, map } from 'lodash';

export function readPkdData(survivalData, section, division, group, pkdClass) {
    let data = survivalData;
    if (pkdClass) {
        data = survivalData.filter(c => c.PKDMainClass === pkdClass);
    }
    else if (group) {
        data = survivalData.filter(c => c.PKDMainGroup === group);
    }
    else if (division) {
        data = survivalData.filter(c => c.PKDMainDivision === division);
    }
    else if (section) {
        data = survivalData.filter(c => c.PKDMainSection === section);
    }
    const grouped = countBy(data, 'DurationOfExistenceInMonths');
    return map(grouped, (count, months) => ({ count, months }));
}