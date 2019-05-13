
const populateArr = require('./reverseArray')
const runFn = (populateArr, times, fn)=>{
    let arraySize = populateArr.length, value = 0, i;
    for(i=0; i<times; i++){
        let hstart = process.hrtime();
        fn(populateArr);
        let hend = process.hrtime(hstart);
        value+=hend[1];
    }
    return {arraysize: arraySize, nanosecond: value/times};
}
module.exports = runFn