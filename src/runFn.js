const populateArr = require('./populateArr')

const runFn = (populateArr, times, fn)=>{
    let arraySize = populateArr.length, value = 0
    for(i=0; i<times; i++){
        // console.log(populateArr.length)
        let hstart = process.hrtime();
        fn(populateArr)
        console.log(populateArr.length)
        let hend = process.hrtime(hstart)
        value+=hend[1]
    }
    // console.log({arraysize: arraySize, nanosecond: value/times})
    return {arraysize: arraySize, nanosecond: value/times}
}
// runFn(populateArr(5), 5, (ar)=>{return ar.reverse()})
module.exports = runFn