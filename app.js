const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const populateArr = require('./src/populateArr')
const runFn = require('./src/runFn')
const reverseArray = require('./src/reverseArray')
let data = []
const app = (times, fn) =>{
    for(let size=50000; size<=1000000; size+=50000){
        console.log('testRun')
        runFn(populateArr(size), times, fn)
        console.log('Run')
        data.push(runFn(populateArr(size), times, fn))
        console.log(data)
    }
}

app(1, reverseArray)

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