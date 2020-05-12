import { countBy, map, filter } from 'lodash';

export function readPkdData(survivalData, section, division, group, pkdClass) {
    console.log(section)
    let data = [];
    if (pkdClass) {
        data = filter(survivalData, function (c) { return c.PKDMainClass === pkdClass });
    }
    else if (group) {
        data = filter(survivalData, function (c) { return c.PKDMainGroup === group });
    }
    else if (division) {
        data = filter(survivalData, function (c) { return c.PKDMainDivision === division });
    }
    else if (section) {
        data = filter(survivalData, function (c) { return c.PKDMainSection === section });
    }
    const grouped = countBy(data, 'DurationOfExistenceInMonths');
    return map(grouped, (count, months) => ({ count, months }));
}