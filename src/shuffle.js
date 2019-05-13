// const shuffleArray = (arr)=>{
//     let currentIndex = arr.length
//     let tempValue, randomIndex
//     while(0!=currentIndex){
//         randomIndex = Math.floor(Math.random() * currentIndex)
//         currentIndex -=1
//         tempValue = arr[currentIndex]
//         arr[currentIndex] = arr[randomIndex]
//         arr[randomIndex] = tempValue
//     }
//     return arr
// }
// const shuffleArray = (arr)=>{
//     let newArr = []
//     while(arr.length!=0){
//         let ramdomIndex = Math.floor(Math.random()*arr.length)
//         newArr.push(arr[ramdomIndex])
//         arr[ramdomIndex] = arr.slice(-1)[0]
//         arr.pop()
//     }
//     return newArr
// }
const shuffleArray = (arr)=>{
    arr.sort(() => Math.random() - 0.5);
    return arr
}
// console.log(shuffleArray([334,5,6,4,3,2,2,2]))
module.exports = shuffleArray