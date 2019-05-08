const populateArr = (size)=>{
    let tempArr = [];
    for(let j=0; j<size; j++){
        tempArr.push(Math.floor(Math.random()*((size*2)+1))-size);
    }
    return tempArr;
}

module.exports = populateArr