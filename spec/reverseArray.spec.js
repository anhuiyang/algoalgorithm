const reverseArray = require('../src/reverseArray')

test('erverseArry', ()=>{
    expect(reverseArray([1,2,3])[0]).toBe(3)
    expect(reverseArray([1,2,3])[1]).toBe(2)
    expect(reverseArray([1,2,3])[2]).toBe(1)
})