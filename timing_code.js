const reverseArray = (array)=>{
    let newArray = [], l = array.length; 
    for(k=0; k<l; k++){
        newArray.push(array.pop())
    }
    return newArray
}

const populateArr = (length)=>{
    let tempArr = []
    for(let j=0; j<length; j++){
        tempArr.push(Math.ceil(Math.random()*10))
    }
    return tempArr
}

for(let i=50000; i<=1000000; i+=50000){
    mainArr = populateArr(i)
    arrSize = mainArr.length
    let hrstart = process.hrtime()
    reverseArray(mainArr)
    let hrend = process.hrtime(hrstart)
    console.log(`arrSize: ${arrSize}, nanoseconds: ${hrend[1]}`)

}