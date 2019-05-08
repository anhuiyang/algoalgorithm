const reverseArray = require('../src/reverseArray')
describe('reverseArray', ()=>{
    test('index1', ()=>{
        arr = [1,2,3,4]
        expect(reverseArray(arr)[0]).toBe(4)
        console.log(arr)
    })
    test('index3', ()=>{
        arr = [1,2,3,4]
        expect(reverseArray(arr)[3]).toBe(1)
        console.log(arr)
    })
})
