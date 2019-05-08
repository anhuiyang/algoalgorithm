const reverseArray = (array)=>{
    return array.sort((a, b)=>{
        return b-a
    })
    // let newArray = [], l=array.length;
    // array.forEach(element=>{
    //     newArray.unshift(element)
    // })
    // for(k=0; k<l; k++){
        // newArray.unshift(array.shift())
        // newArray.push(array.pop())
        // newArray.unshift(array[k])
    // }
    // return newArray;
}

module.exports = reverseArray