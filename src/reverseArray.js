const reverseArray = (arr)=>{
    let newArr = []
    arr.forEach(element=>{
        newArr.unshift(element)
    })
    return newArr
    // let tempArr = arr.slice(), arrLength = arr.length
    // for(let i=0; i<arrLength; i++){
    //     arr[i] = tempArr.pop()
    // }
    // return arr

    // let tempArr = [], arrLength = arr.length
    // for(let i=0; i<arrLength; i++){
    //     tempArr.push(arr.pop())
    // }
    // return tempArr
}
// const reverseArray = (arr)=>{
//     return arr.reverse()
// }
module.exports = reverseArray