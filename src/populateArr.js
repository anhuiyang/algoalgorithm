const populateArr = (size)=>{
    let arr = []
    for(i=0; i<size; i++){
        arr.push(Math.floor(Math.random()*((size*2)-1)-size))
    }
    return arr
}
module.exports = populateArr