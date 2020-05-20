import path from '../data/survival_full.csv';
// eslint-disable-next-line import/no-webpack-loader-syntax
import { readCsv } from './csv-reader';

class SurvivalDataService {
    data = null;

    readSurvivalData() {
        return new Promise((resolve, reject) => {
            if (this.data) {
                resolve(this.data);
                return;
            }
            readCsv(path).then(data => resolve(data));
        });
    }
}

export const survivalDataService = new SurvivalDataService();