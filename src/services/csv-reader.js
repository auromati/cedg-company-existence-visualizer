import Papa from 'papaparse';


export function readCsv(path) {
    const promise = fetch(path).then(response => {
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');

        let result = '';
        return reader.read().then(function process({ done, value }) {
            if (done) {
                return result;
            }
            result += decoder.decode(value);
            return reader.read().then(process);
        });
    }).then(csvData => {
        Papa.parse(csvData,
            {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                delimiter: ',',
                complete: csvDetails => {
                    const returnedArray = csvDetails.data.slice();
                    postMessage(returnedArray);
                },
                error: error => console.log(error)
            });
    });

}
