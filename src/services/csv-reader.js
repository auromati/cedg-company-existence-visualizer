import Papa from 'papaparse';


const wojMap = {
    'łódzkie': 1,
    'świętokrzyskie': 2,
    'wielkopolskie': 3,
    'kujawsko-pomorskie': 4,
    'małopolskie':5,
    'dolnośląskie': 6,
    'lubelskie': 7,
    'lubuskie': 8,
    'mazowieckie': 9,
    'opolskie': 10,
    'podlaskie': 11,
    'pomorskie': 12,
    'śląskie': 13,
    'podkarpackie': 14,
    'warmińsko-mazurskie': 15,
    'zachodniopomorskie': 16
}

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
                    const mappedArray = returnedArray.map(row => ({...row, voivodeshipId: wojMap[row.MainAddressVoivodeship]}));
                    postMessage(mappedArray);
                },
                error: error => console.log(error)
            });
    });

}
