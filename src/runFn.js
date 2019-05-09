
const runFn = (populateArr, times, fn)=>{
    let an = 0
    let arraySize = populateArr.length, value = 0
    for(i=0; i<times; i++){
        let hstart = process.hrtime();
        fn(populateArr)
        let hend = process.hrtime(hstart)
        value+=hend[1]
    }
    return {arraysize: arraySize, nanosecond: value/times}
}
module.exports = runFn