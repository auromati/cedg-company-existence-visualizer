import path from '../data/survival_full_new.csv';
// eslint-disable-next-line import/no-webpack-loader-syntax
import csvReader from 'workerize-loader!./csv-reader';

class SurvivalDataService {
    data = null;

    readSurvivalData() {
        return new Promise((resolve, reject) => {
            if (this.data) {
                resolve(this.data);
            }
            const reader = csvReader();
            reader.addEventListener('message', e => {
                if (e.data.type) {
                    return;
                }
                resolve(e.data);
            })
            reader.readCsv(path);
        });
    }
}

export const survivalDataService = new SurvivalDataService();