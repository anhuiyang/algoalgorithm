const reverseArray = (array)=>{

    let newArray = [], l=array.length;
    for(k=0; k<l; k++){
        newArray.push(array.pop())
    }
    return newArray;
}

module.exports = reverseArray