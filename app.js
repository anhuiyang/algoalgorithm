const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const populateArr = require('./oldFiles.js/src/populateArr')


const csvWriter = createCsvWriter({  
    path: 'recordRunTime.csv',
    header: [
        {id: 'arraysize', title: 'arraySize'}, 
        {id: 'nanosecond', title: 'Nanosecond'}
    ]
});
csvWriter  
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));