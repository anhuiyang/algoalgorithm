const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
var fromEntries = require('object.fromentries');
const findDuplicate = require('./src/findDuplicate');
const reverseArray = require('./src/reverseArray');
let data = rawData = [];
const csvWriter = createCsvWriter({  
    path: 'timingRecord.csv',
    header: [
        {id: 'arraysize', title: 'arraySize'}, 
        {id: 'nanosecond', title: 'Nanosecond'}
    ]
});
const populateArr = (size)=>{
    let tempArr = [];
    for(let j=0; j<size; j++){
        tempArr.push(Math.ceil(Math.random()*((size*2)+1))-size);
    }
    return tempArr;
}
const runTimer = (n)=>{
    for(let i=50000; i<=1000000; i+=50000){
        mainArr = populateArr(i);
        let temp = runNthTimes(n, mainArr)
        rawData.push({arraysize: i, nanosecond: temp})
    }
    console.log(rawData)
}

const runNthTimes = (n, array)=>{
    let temp = 0
    for(let i=0; i<n; i++){
        let hrstart = process.hrtime();
        mainArr.reverse()
        // reverseArray(array);
        // findDuplicate(mainArr)
        let hrend = process.hrtime(hrstart);
        temp+=hrend[1]
    }
    console.log(temp)
    return temp/n
}

const toObject = (n)=>{
    for (let i=0; i<n; i++){
        rawData[0]
    }
}
runTimer(1)

csvWriter  
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));