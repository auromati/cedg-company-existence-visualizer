import path from '../data/survival.csv';
import { CsvReader } from './csv-reader';

const csvReader = new CsvReader();

export class SurvivalDataService {
    readSurvivalDataFromCsv() {
        return csvReader.readCsv(path, true);
    }
}