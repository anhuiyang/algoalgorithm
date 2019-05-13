// buit-in function
    // const reverseArray = (arr)=>{
    //     return arr.reverse()
    // }

// [i]+pop 
    const reverseArray = (arr)=>{
        let tempArr = arr.slice(), arrLength = arr.length
        for(let i=0; i<arrLength; i++){
            arr[i] = tempArr.pop()
        }
        return arr
    }

// push+pop
    // const reverseArray = (arr)=>{
    //     let tempArr = [], arrLength = arr.length, i
    //     for(i=0; i<arrLength; i++){
    //         tempArr.push(arr.pop())
    //     }
    //     return tempArr
    // }

// push+[i] (Jethro)
    // const reverseArray = (arr) => {
    //     let newArray = []
    //     let i
    //     let len = arr.length - 1
    //     for (i = len ; i >= 0; i--) {
    //         newArray.push(arr[i])
    //     }
    //     return newArray
    // }

module.exports = reverseArray