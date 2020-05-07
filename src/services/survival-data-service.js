import path from '../data/survival.csv';
import { CsvReader } from './csv-reader';

const csvReader = new CsvReader();

class SurvivalDataService {
    data = null;

    readSurvivalDataFromCsv() {
        return this.data ? 
            new Promise((resolve, reject) => resolve(this.data)) : 
            csvReader.readCsv(path, true).then(csvArray => {
                this.data = csvArray;
                return csvArray;
            });
    }
}

export const survivalDataService = new SurvivalDataService();