import Papa from 'papaparse';


export class CsvReader {
    readCsv(path) {
        return fetch(path).then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');

            let result = ''; 
            return reader.read().then(function process({done, value})  {
                if (done) {
                    return result;
                }
                result += decoder.decode(value);
                return reader.read().then(process);
            });
        }).then(csvData => {
            return new Promise((resolve, error) => Papa.parse(csvData, 
                {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true,
                    complete: csvDetails => {
                        const returnedArray = csvDetails.data.slice();
                        resolve(returnedArray);
                    }, 
                    error
                }));
        });
    }
}