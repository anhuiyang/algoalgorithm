const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const findDuplicate = require('./src/findDuplicate');
const reverseArray = require('./src/reverseArray');
const populateArr = require('./src/populateArr')
let data = rawData = [];
const csvWriter = createCsvWriter({  
    path: 'timingRecord.csv',
    header: [
        {id: 'arraysize', title: 'arraySize'}, 
        {id: 'nanosecond', title: 'Nanosecond'}
    ]
});
const preRun = (n, method)=>{
    for(let i=0; i<0; i++){
        method()
    }
}
const runTimer = (n)=>{
    for(let i=50000; i<=1000000; i+=50000){
        mainArr = populateArr(i);
        let temp = runNthTimes(n, mainArr, fn)
        rawData.push({arraysize: i, nanosecond: temp})
    }
    console.log(rawData)
}

const runNthTimes = (n, array)=>{
    let temp = 0
    for(let i=0; i<n; i++){
        array.reverse()
        array.reverse()
        array.reverse()
        array.reverse()
        array.reverse()
        let hrstart = process.hrtime();
        array.reverse()
        // reverseArray(array);
        // findDuplicate(mainArr)
        let hrend = process.hrtime(hrstart);
        temp+=hrend[1]
    }
    return temp/n
}

runTimer(10, reverseArray)

csvWriter  
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));