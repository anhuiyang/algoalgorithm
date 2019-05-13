const findDuplicates = (arr)=>{
    let output = []
    arr.reduce((all, element)=>{
        if(element in all){
            output.push(element)
        }else{
            all.push(element)
        }
        return all
    },[])
    return output
}
console.log(findDuplicates([3,54,6,7,4,4]))